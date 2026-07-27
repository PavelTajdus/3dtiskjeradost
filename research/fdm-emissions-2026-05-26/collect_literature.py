#!/usr/bin/env python3
import json, re, time, urllib.parse, urllib.request
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parent
RAW = ROOT / "raw"
RAW.mkdir(parents=True, exist_ok=True)

UA = "HermesResearch/1.0 (3dtiskjeradost; contact: pavel@hotend.cz)"

def get_json(url, timeout=40):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode("utf-8", "replace"))

def clean_title(t):
    if isinstance(t, list): t = t[0] if t else ""
    return re.sub(r"\s+", " ", (t or "").strip())

def norm_title(t):
    return re.sub(r"[^a-z0-9]+", " ", clean_title(t).lower()).strip()

def year_from_date(d):
    if isinstance(d, dict):
        parts = d.get("date-parts") or []
        if parts and parts[0]: return parts[0][0]
    if isinstance(d, str):
        m = re.search(r"(19|20)\d{2}", d)
        if m: return int(m.group(0))
    return None

queries = [
    'desktop 3D printer ultrafine particles volatile organic compounds emissions',
    'fused deposition modeling FDM ultrafine particles VOC emissions',
    'fused filament fabrication FFF particle emissions volatile organic compounds',
    'material extrusion 3D printing emissions styrene formaldehyde caprolactam',
    '3D printing emissions PLA ABS PETG TPU nylon polycarbonate',
    '3D printer emissions health risk indoor air filtration ventilation HEPA activated carbon',
    '3D printer ultrafine particles cytotoxicity A549 cells',
    'consumer 3D printer emissions exposure assessment indoor air',
    'additive manufacturing material extrusion occupational exposure VOC UFP',
    '3D printer nanoparticles emissions ABS PLA styrene lactide',
]

records = {}
raw_index = {"generated_at": datetime.now(timezone.utc).isoformat(), "queries": queries, "sources": {}}

def add_record(source, title, **kw):
    title = clean_title(title)
    if not title or len(title) < 8: return
    doi = (kw.get("doi") or "").lower().strip()
    key = "doi:" + doi if doi else "title:" + norm_title(title)
    rec = records.setdefault(key, {"title": title, "sources": []})
    rec["sources"].append(source)
    for k,v in kw.items():
        if v in (None, "", [], {}): continue
        if k == "doi": v = str(v).lower()
        if k not in rec or not rec[k]: rec[k] = v

# PubMed via NCBI EUtils
pubmed_ids = set()
for q in queries:
    term = urllib.parse.quote(q)
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=80&term={term}"
    try:
        data = get_json(url)
        (RAW / f"pubmed_esearch_{len(pubmed_ids)}.json").write_text(json.dumps({"query": q, "data": data}, ensure_ascii=False, indent=2))
        pubmed_ids.update(data.get("esearchresult", {}).get("idlist", []))
    except Exception as e:
        print("PubMed esearch failed", q, e)
    time.sleep(0.35)
raw_index["sources"]["pubmed_id_count"] = len(pubmed_ids)
if pubmed_ids:
    ids = list(pubmed_ids)
    for i in range(0, len(ids), 100):
        chunk = ids[i:i+100]
        url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=" + ",".join(chunk)
        data = get_json(url)
        (RAW / f"pubmed_esummary_{i//100}.json").write_text(json.dumps(data, ensure_ascii=False, indent=2))
        for pid in chunk:
            s = data.get("result", {}).get(pid) or {}
            doi = ""
            for aid in s.get("articleids", []):
                if aid.get("idtype") == "doi": doi = aid.get("value") or doi
            add_record("pubmed", s.get("title"), doi=doi, year=year_from_date(s.get("pubdate")), url=("https://pubmed.ncbi.nlm.nih.gov/"+pid+"/"), journal=s.get("fulljournalname"), authors=[a.get("name") for a in s.get("authors", [])[:8]], pubmed_id=pid)
        time.sleep(0.35)

# Crossref
for n,q in enumerate(queries):
    url = "https://api.crossref.org/works?rows=60&query.bibliographic=" + urllib.parse.quote(q)
    try:
        data = get_json(url)
        (RAW / f"crossref_{n}.json").write_text(json.dumps({"query": q, "data": data}, ensure_ascii=False, indent=2))
        for item in data.get("message", {}).get("items", []):
            title = clean_title(item.get("title"))
            hay = (title + " " + clean_title(item.get("abstract", ""))).lower()
            if not any(x in hay for x in ["3d", "three-dimensional", "additive", "fused", "printer", "printing"]): continue
            if not any(x in hay for x in ["emission", "particle", "volatile", "voc", "ultrafine", "nanoparticle", "styrene", "formaldehyde", "cytotoxic", "exposure", "indoor"]): continue
            add_record("crossref", title, doi=item.get("DOI"), year=year_from_date(item.get("published-print") or item.get("published-online") or item.get("published")), url=item.get("URL"), journal=clean_title(item.get("container-title")), abstract=re.sub(r"<[^>]+>", " ", item.get("abstract", "") or ""), authors=[(a.get("given","")+" "+a.get("family","")).strip() for a in item.get("author", [])[:8]])
    except Exception as e:
        print("Crossref failed", q, e)
    time.sleep(1.0)

# OpenAlex
for n,q in enumerate(queries):
    url = "https://api.openalex.org/works?per-page=50&search=" + urllib.parse.quote(q) + "&mailto=pavel@hotend.cz"
    try:
        data = get_json(url)
        (RAW / f"openalex_{n}.json").write_text(json.dumps({"query": q, "data": data}, ensure_ascii=False, indent=2))
        for w in data.get("results", []):
            title = clean_title(w.get("title"))
            hay = title.lower()
            if not any(x in hay for x in ["3d", "three-dimensional", "additive", "fused", "printer", "printing"]): continue
            add_record("openalex", title, doi=(w.get("doi") or "").replace("https://doi.org/", ""), year=w.get("publication_year"), url=w.get("id"), journal=((w.get("primary_location") or {}).get("source") or {}).get("display_name"), authors=[a.get("author",{}).get("display_name") for a in w.get("authorships", [])[:8]], cited_by_count=w.get("cited_by_count"), openalex_id=w.get("id"))
    except Exception as e:
        print("OpenAlex failed", q, e)
    time.sleep(1.0)

# Semantic Scholar
for n,q in enumerate(queries):
    params = urllib.parse.urlencode({"query": q, "limit": 60, "fields": "title,abstract,year,authors,venue,url,externalIds,citationCount,isOpenAccess,openAccessPdf"})
    url = "https://api.semanticscholar.org/graph/v1/paper/search?" + params
    try:
        data = get_json(url)
        (RAW / f"semantic_scholar_{n}.json").write_text(json.dumps({"query": q, "data": data}, ensure_ascii=False, indent=2))
        for p in data.get("data", []):
            ids = p.get("externalIds") or {}
            title = clean_title(p.get("title"))
            hay = (title + " " + (p.get("abstract") or "")).lower()
            if not any(x in hay for x in ["emission", "particle", "volatile", "voc", "ultrafine", "nanoparticle", "styrene", "formaldehyde", "cytotoxic", "exposure", "indoor"]): continue
            add_record("semantic_scholar", title, doi=ids.get("DOI"), year=p.get("year"), url=p.get("url"), journal=p.get("venue"), abstract=p.get("abstract"), authors=[a.get("name") for a in p.get("authors", [])[:8]], cited_by_count=p.get("citationCount"), semantic_scholar_id=p.get("paperId"), open_access_pdf=(p.get("openAccessPdf") or {}).get("url"))
    except Exception as e:
        print("Semantic Scholar failed", q, e)
    time.sleep(1.5)

# Europe PMC
for n,q in enumerate(queries):
    url = "https://www.ebi.ac.uk/europepmc/webservices/rest/search?format=json&pageSize=50&query=" + urllib.parse.quote(q)
    try:
        data = get_json(url)
        (RAW / f"europepmc_{n}.json").write_text(json.dumps({"query": q, "data": data}, ensure_ascii=False, indent=2))
        for r in data.get("resultList", {}).get("result", []):
            add_record("europepmc", r.get("title"), doi=r.get("doi"), year=year_from_date(r.get("firstPublicationDate") or r.get("pubYear")), url=("https://europepmc.org/article/" + r.get("source", "") + "/" + r.get("id", "")), journal=r.get("journalTitle"), authors=(r.get("authorString") or "").split(", ")[:8], pubmed_id=r.get("pmid"))
    except Exception as e:
        print("EuropePMC failed", q, e)
    time.sleep(0.5)

# classify roughly
cats = {
    "core_emissions_measurement": ["emission", "ultrafine", "particle", "volatile", "voc", "nanoparticle", "aerosol"],
    "health_toxicology": ["tox", "cytotoxic", "health", "risk", "exposure", "lung", "cell", "inhal"],
    "materials": ["pla", "abs", "petg", "tpu", "nylon", "polycarbonate", "styrene", "formaldehyde", "caprolactam", "filament"],
    "mitigation_filtration": ["filter", "filtration", "ventilation", "control", "enclosure", "hepa", "activated carbon"],
    "workplace_indoor_air": ["indoor", "office", "workplace", "occupational", "school", "library", "room"],
    "resin_or_other_am": ["resin", "vat", "photopolymer", "powder", "metal", "sla", "stereolithography"],
}
for rec in records.values():
    hay = " ".join(str(rec.get(k, "")) for k in ["title", "abstract", "journal"]).lower()
    rec["categories"] = [c for c, needles in cats.items() if any(n in hay for n in needles)]
    if not rec["categories"]: rec["categories"] = ["other_possible_related"]

out = sorted(records.values(), key=lambda r: (-(r.get("cited_by_count") or 0), r.get("year") or 9999, r.get("title","")))
(ROOT / "literature_records.json").write_text(json.dumps(out, ensure_ascii=False, indent=2))
(ROOT / "raw_index.json").write_text(json.dumps(raw_index, ensure_ascii=False, indent=2))

# Markdown bibliography
lines = ["# FDM / desktop 3D printer emissions literature records", "", f"Generated: {datetime.now(timezone.utc).isoformat()}", f"Records after rough dedupe: {len(out)}", ""]
for i,r in enumerate(out, 1):
    lines.append(f"## {i}. {r['title']}")
    meta = []
    if r.get('year'): meta.append(str(r['year']))
    if r.get('journal'): meta.append(r['journal'])
    if r.get('doi'): meta.append('DOI: ' + r['doi'])
    if r.get('cited_by_count') is not None: meta.append('citations: ' + str(r.get('cited_by_count')))
    lines.append("; ".join(meta))
    if r.get('authors'): lines.append("Authors: " + ", ".join([a for a in r['authors'] if a][:8]))
    if r.get('url'): lines.append("URL: " + r['url'])
    if r.get('open_access_pdf'): lines.append("Open PDF: " + r['open_access_pdf'])
    lines.append("Categories: " + ", ".join(r.get('categories', [])))
    if r.get('abstract'):
        abs = re.sub(r"\s+", " ", r['abstract']).strip()
        lines.append("Abstract: " + abs[:1200])
    lines.append("")
(ROOT / "bibliography.md").write_text("\n".join(lines), encoding="utf-8")
print(json.dumps({"records": len(out), "pubmed_ids": len(pubmed_ids), "root": str(ROOT)}, ensure_ascii=False, indent=2))
