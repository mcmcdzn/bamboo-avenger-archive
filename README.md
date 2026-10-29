# The Bamboo Avenger Research Archive

A static folklore-archive website documenting reported sightings of a recurring figure in the Rogue Valley of Southern Oregon. Evidence remains inconclusive.

No build step. No dependencies. Fonts are self-hosted, so the site works offline and makes no third-party requests.

## Deploy

**GitHub Pages** — push this folder's contents to a repository, then Settings → Pages → deploy from branch (root). `.nojekyll` is included.

**Netlify** — drag the folder onto app.netlify.com/drop, or connect the repo with no build command and publish directory `/`. `netlify.toml` is included.

**Anything else** — upload the folder to any static host. `404.html` is picked up automatically by GitHub Pages and Netlify.

To preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home — Composite Witness Reconstruction 001, latest incidents, map and evidence previews |
| `subject.html` | Subject Profile — overview, equipment, environmental associations, recurring characteristics |
| `symbol.html` | Symbol 001 (森) — translation, research notes, six occurrence specimens, associated reports |
| `phrase.html` | Phrase 001 (森に一本、影が立つ。) — transcription slip, fragment, occurrence ledger |
| `incidents.html` | Incident Archive — 15 reports, filterable by location, classification and text |
| `map.html` | Incident Map — interactive Plate M-1 field map with classification filters |
| `green-vein.html` | The Green Vein Tradition |
| `whispering-monks.html` | The Whispering Monks |
| `evidence.html` | Evidence Vault — Artifacts A-17, B-03, C-11, D-04, E-09 and field notebooks |
| `classified.html` | Classified Access — password-gated folios that lead into Layer III |
| `myth.html` | Myth Archive (Layer III) — origin narrative, the Last Survivor, reported capabilities, Whispering Monk teachings, Green Vein traditions. Not in the main navigation; reached from the home page, folklore pages, folios and footer |
| `one-shadow.html` | Hidden page (not in the navigation; reached from the last folio) |
| `404.html` | "No record." |

## Three layers

Every record page carries a layer marker (I · Archive / II · Folklore / III · Myth) beside its breadcrumb.

- **Layer I · The Archive** — public record: Subject, Symbol 001, Incidents, Map, Evidence. Takes no position.
- **Layer II · The Folklore** — Green Vein, Whispering Monks, Phrase 001. Scholarly and cautious.
- **Layer III · The Myth** — `myth.html` and the restricted folios. Stories preserved as told, always labelled as unverified tradition.

## Classified access terms

Not case-sensitive. Each releases one folio.

| Term | Folio |
| --- | --- |
| `mori` | I — Symbol 001 supplemental sheet (withheld occurrences) → Forest Memory |
| `greenvein` | II — Field log GV-17 (a walk along the Green Vein route) → Origin narrative |
| `reeds` | III — Interview transcript, W-0412, tape 2 side B → Wind Through Reeds |
| `stillness` | IV — Folio 0, unindexed → Bend. Listen. Act., and `one-shadow.html` |

Folio contents are stored enciphered against their term in `js/folios.js`, so they do not appear in the page source. This is atmosphere, not security.

## Structure

```
/
├── index.html … one-shadow.html, 404.html
├── css/archive.css             all styles
├── js/
│   ├── incidents-data.js       the 15 incidents + 6 locations (edit here; Home, Incidents and Map all read it)
│   ├── archive.js              nav, lightbox, incident list, map interactivity
│   ├── classified.js           access-term handling
│   └── folios.js               enciphered folio content
└── assets/
    ├── images/                 crops of BambooAvengerV6.jpg (front, rear, staff, symbol, bridge, phrase, valley, outcrop) + mono prints
    ├── graphics/
    │   ├── symbol/             analysis sheet, specimen overlay, field sketches, archive cards, six specimens
    │   ├── phrase/             transcription slip, torn fragment
    │   ├── evidence/           artifact plates A-17, B-03, C-11, D-04, E-09
    │   ├── notebooks/          field notebook pages 01–03
    │   ├── green-vein/         sketch map, profile diagram, descriptor tally
    │   ├── monks/              redacted memo, evidence board, archive folder
    │   └── myth/               folder F-3, bamboo botanical plate GV-7, teaching card
    ├── maps/                 ashland-field-map.svg (Plate M-1), green-vein-theories.svg (Plate GV-3)
    ├── textures/               parchment, charcoal, forest tiles
    ├── fonts/                  Cormorant Garamond, EB Garamond, Courier Prime, Noto Serif JP subset (SIL OFL)
    └── favicon.svg
```

## Notes on the reconstruction

`assets/images/reconstruction-001-full-sheet.jpg` is the original image, unaltered. The site presents it as the "circulated copy" — the reconstruction as it left the archive, with a title and annotations "added by unknown hands." All other crops have that printed text removed, so the reconstruction reads as an archival document rather than a title card.

## Editing incidents

Add or change entries in `js/incidents-data.js`. Each needs an `id`, ISO `date`, a `loc` key from `ARCHIVE.locations`, a `cls` key from `ARCHIVE.classes`, `title`, `summary`, `notes`, `witness`, and an `xref` array of links. Map markers, counts and the Home page update automatically.
