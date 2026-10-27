/* Incident register — Collection 07. Shared by Home, Incident Archive and Incident Map.
   Witness identities are withheld; codes (W-xxxx) are archive-assigned. */
window.ARCHIVE = window.ARCHIVE || {};

ARCHIVE.locations = {
  'plaza':     { name: 'Plaza District',       x: 470, y: 298,  grid: 'D3', note: 'Town center at the north mouth of the creek canyon. Lithia fountains, shopfronts, the main street.' },
  'sixth':     { name: 'Sixth Street area',    x: 660, y: 228,  grid: 'F2', note: 'Residential and rail-side blocks north-east of downtown, near A Street and the historic Railroad District.' },
  'park':      { name: 'Lithia Park',          x: 456, y: 420,  grid: 'D4', note: 'Long wooded park following Ashland Creek south from the Plaza. Ponds, lawns, footpaths and several stone footbridges.' },
  'bridge':    { name: 'Lithia Bridge',        x: 452, y: 606,  grid: 'D5', note: 'Arched stone footbridge in the upper park. Recorded in more reports than any other single structure.' },
  'watershed': { name: 'Watershed Trail',      x: 332, y: 856,  grid: 'C8', note: 'Forested trail system climbing south into the Ashland watershed above the reservoir.' },
  'mountain':  { name: 'Mount Ashland',        x: 262, y: 1172, labelLeft: true, grid: 'C10', note: 'Summit area and access road, roughly 4.5 miles beyond the edge of town. Elevation 7,532 ft.' }
};

ARCHIVE.classes = {
  'plausible':   { label: 'Plausible',    css: 'c-plausible',   note: 'Independent detail corroborates at least part of the account.' },
  'review':      { label: 'Under Review', css: 'c-review',      note: 'Open file. Follow-up in progress.' },
  'unconfirmed': { label: 'Unconfirmed',  css: 'c-unconfirmed', note: 'Single witness; no supporting material located.' },
  'anecdotal':   { label: 'Anecdotal',    css: 'c-anecdotal',   note: 'Received second-hand or recalled long after the fact.' },
  'archived':    { label: 'Archived',     css: 'c-archived',    note: 'Closed. Retained for the record.' }
};

ARCHIVE.incidents = [
  {
    id: 'RVF-1987-003', date: '1987-09-12', loc: 'watershed', cls: 'archived', witness: 'W-0233',
    title: 'Figure walks ahead of a lost hiker to the trailhead',
    summary: 'A hiker who lost the trail after dark on the descent reported a hooded figure carrying "two long poles" some distance ahead. The figure kept the same distance for roughly a mile and was not visible when the hiker reached the trailhead gate.',
    notes: 'Earliest account in the collection. Transcribed from a 1994 oral-history session; the date is approximate and was fixed by the witness\'s memory of a fire-season closure. The witness described the trail as "following water" and used the phrase "the monks keep it." Neither remark was explained.',
    xref: ['green-vein.html', 'whispering-monks.html']
  },
  {
    id: 'RVF-1996-011', date: '1996-11-03', loc: 'mountain', cls: 'anecdotal', witness: 'W-0318',
    title: 'Car freed from early snow on the mountain road',
    summary: 'Two travelers whose car slid into a snowbank on the mountain road reported that someone pushed the vehicle clear from behind. When they stopped a few yards on to thank the person, no one was there.',
    notes: 'The witnesses later stated there were no footprints beyond those around the car; blowing snow that night could account for this. In the original statement W-0318 also used the term "Whispering Monks," without being asked and without explanation.',
    xref: ['whispering-monks.html']
  },
  {
    id: 'RVF-2003-007', date: '2003-06-21', loc: 'plaza', cls: 'unconfirmed', witness: 'W-0402',
    title: 'Child returned to parents at the Plaza fountains',
    summary: 'During a crowded solstice evening, a child separated from her parents was found waiting beside the Plaza fountains. She said "the man with the bamboo" had walked her there. Her parents saw no one with her.',
    notes: 'The parent (W-0402) first heard the term "Whispering Monks" from a bus driver some weeks later and connected it to this evening. The driver was not identified.',
    xref: []
  },
  {
    id: 'RVF-2009-014', date: '2009-10-17', loc: 'bridge', cls: 'plausible', witness: 'W-0377',
    title: 'Phrase written in chalk on the footbridge',
    summary: 'A line of Japanese text was found chalked across the deck of the stone footbridge shortly after a figure was seen standing on the bridge at dusk. Rain removed it the next day.',
    notes: 'First recorded instance of Phrase 001. The witness photographed the writing but the photograph was not retained; the archive holds only a hand transcription (see transcription slip). Two park visitors independently confirmed seeing chalk on the bridge that morning.',
    xref: ['phrase.html', 'symbol.html']
  },
  {
    id: 'RVF-2011-019', date: '2011-06-14', loc: 'sixth', cls: 'plausible', witness: 'W-0412',
    title: 'Repaired bicycle left at a door overnight',
    summary: 'A bicycle left with a broken chain near A Street was found the next morning repaired and leaned against its owner\'s front door. A neighbor reported seeing a hooded figure with a mark on the chest of the jacket.',
    notes: 'The neighbor (W-0412) produced the sketch catalogued as Artifact B-03 during a second interview, stating the thread was "dark green, not black." The chain link used in the repair did not match the original manufacturer.',
    xref: ['evidence.html#B-03', 'symbol.html']
  },
  {
    id: 'RVF-2013-022', date: '2013-04-02', loc: 'watershed', cls: 'review', witness: 'Trail crew (3)',
    title: 'Downed tree cleared from trail overnight',
    summary: 'A volunteer trail crew arriving to remove a fallen fir found it already cut and rolled clear of the path. Saw marks were fresh. Two narrow, crossed impressions were noted in the mud at the trail edge.',
    notes: 'No work order exists for this section. The crew leader measured the impressions at roughly the diameter of a bamboo stave. Photographs taken by the crew are on loan and have not yet been catalogued.',
    xref: ['evidence.html#D-04']
  },
  {
    id: 'RVF-2016-028', date: '2016-09-30', loc: 'bridge', cls: 'plausible', witness: 'W-0731',
    title: 'Figure on the bridge for two seconds',
    summary: 'A walker reported a still, hooded figure standing at the crown of the stone footbridge at dusk. She looked down at the path for a moment; when she looked up the bridge was empty. No one passed her on the only path.',
    notes: 'W-0731 began to say "the monks" during interview, then said "never mind." She also offered that the Green Vein "begins at the bridge." A researcher\'s field notebook from the same site (page 02) records similar observations.',
    xref: ['green-vein.html', 'whispering-monks.html']
  },
  {
    id: 'RVF-2019-031', date: '2019-11-02', loc: 'mountain', cls: 'review', witness: 'W-0587',
    title: 'Charred bamboo fragment beside a cold fire ring',
    summary: 'A hiker on a forest road below the summit found a partially burned section of bamboo next to a small, carefully made ring of stones. The ring was cold and swept clean; there was no litter.',
    notes: 'Catalogued as Artifact A-17. No bamboo is known to grow wild at this elevation. Species identification is pending. Asked about the site, W-0587 said "the monks keep it" — word for word the phrase recorded from W-0233 in 1987. The two witnesses are not known to each other. The same witness filed RVF-2019-033 two weeks later.',
    xref: ['evidence.html#A-17']
  },
  {
    id: 'RVF-2019-033', date: '2019-11-16', loc: 'watershed', cls: 'unconfirmed', witness: 'W-0587',
    title: 'Sound "like several people breathing in unison"',
    summary: 'Near the upper reservoir at first light, the witness heard what she described as several people breathing together, slow and even, from somewhere uphill. She saw no one and the sound stopped when she called out.',
    notes: 'This account is referenced, with location withheld, in internal memo RVF/WM-03. Elk and wind in dense timber have both been suggested.',
    xref: ['whispering-monks.html']
  },
  {
    id: 'RVF-2021-006', date: '2021-02-09', loc: 'plaza', cls: 'anecdotal', witness: 'W-0806',
    title: 'Sidewalks shoveled before dawn',
    summary: 'After an overnight snowfall, the sidewalks in front of several closed Plaza businesses were found cleared before 6 a.m. A café owner said her security camera showed a hooded figure at 4:52 a.m., mostly hidden by falling snow.',
    notes: 'The recording was overwritten before the archive could request a copy. The owner described "two sticks" over the figure\'s shoulders but was unsure.',
    xref: []
  },
  {
    id: 'RVF-2022-012', date: '2022-03-29', loc: 'park', cls: 'plausible', witness: 'Park visitor (anon.)',
    title: 'Note pinned to the park kiosk after a storm',
    summary: 'An unsigned note was found tacked to an information kiosk stating that a fallen alder below the upper footbridge had been moved and the path was open. The path was open. Parks staff had no record of the work.',
    notes: 'Catalogued as Artifact C-11. The note carries a small drawn mark matching Symbol 001. Handwriting has not been compared against any other document in the collection.',
    xref: ['evidence.html#C-11', 'symbol.html']
  },
  {
    id: 'RVF-2024-017', date: '2024-09-21', loc: 'watershed', cls: 'review', witness: 'W-0861',
    title: 'Unlisted trail marker at an unmapped junction',
    summary: 'A runner found a carved wooden marker nailed to a stump at what appeared to be a minor, unmarked junction about 2.4 miles up the trail. The marker bore a carved symbol and an arrow pointing toward the creek.',
    notes: 'Catalogued as Artifact E-09. The marker matches no agency inventory. The wood is heavily weathered, suggesting it had been in place for years, yet regular users of the trail do not recall it.',
    xref: ['evidence.html#E-09', 'green-vein.html']
  },
  {
    id: 'RVF-2024-029', date: '2024-10-12', loc: 'sixth', cls: 'anecdotal', witness: 'W-0902 (minor, with guardian)',
    title: 'Dropped wallet returned on the sidewalk',
    summary: 'A guardian\'s dropped wallet was returned, contents intact, while she was briefly inside a shop. Her child said a "tall man with sticks on his back" handed it over and walked off toward the tracks.',
    notes: 'The guardian did not see the figure. Asked who the man was, the child said, "He\'s with the whispering monks." The child could not say where she had heard the term.',
    xref: ['whispering-monks.html']
  },
  {
    id: 'RVF-2025-024', date: '2025-10-14', loc: 'park', cls: 'unconfirmed', witness: 'Archive volunteer',
    title: 'Observation near the upper pond',
    summary: 'An archive volunteer walking the upper park at 6:40 p.m. observed a hooded figure moving away along a side path, two staves crossed on the back. The volunteer noted no sound of footsteps. The figure was lost at a bend in the path.',
    notes: 'Recorded at the time in a field notebook (page 01). The volunteer checked the path in both directions and found no one.',
    xref: ['subject.html']
  },
  {
    id: 'RVF-2026-031', date: '2026-10-19', loc: 'mountain', cls: 'review', witness: 'Hiking group (4)',
    title: 'Silhouette at a sunset overlook',
    summary: 'Four hikers on a rock outcrop overlooking the valley saw a hooded figure standing a short distance below them, holding a bamboo staff in each hand, facing the sunset. One took a photograph. The figure does not appear in the frame, which is largely lost to lens flare.',
    notes: 'Most recent report on file. The group\'s description closely matches the front view of Composite Witness Reconstruction 001, which several of them had seen beforehand. The archive notes this as a possible influence on the account.',
    xref: ['subject.html']
  }
];

ARCHIVE.fmtDate = function (iso) {
  const m = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const [y, mo, d] = iso.split('-');
  return `${parseInt(d, 10)} ${m[parseInt(mo, 10) - 1]} ${y}`;
};
