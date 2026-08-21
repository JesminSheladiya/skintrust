// Category icon mappings - used for category cards on services index page
export const CATEGORY_ICONS = {
  "hair-restoration": "hair",
  "acne-scar-correction": "face",
  "skin-rejuvenation": "hydra",
  "anti-ageing-lifting": "thread",
  "laser-treatments": "laser",
  "dermato-surgery": "patch",
};

export function categoryIcon(slug) {
  return CATEGORY_ICONS[slug] || "sparkle";
}

// Treatment icon mappings - maps exact treatment titles to icon keys
// These keys correspond to react-icons in TreatmentIcon.jsx
const TREATMENT_ICONS = {
  // Hair restoration
  "PRP Hair Treatment": "prp",
  "GFC Therapy": "gfc",
  "Exosome Therapy": "exosome",
  "FUE Hair Transplant": "fue",
  "LLLT (Laser Therapy)": "lllt",
  "Mesotherapy": "mesotherapy",
  "Hair Botox": "hair-botox",
  "Hair Booster": "hair-booster",
  // Acne & scar
  "Medical Acne Management": "acne-management",
  "Chemical Peels": "chemical-peels",
  "Pico & Carbon Toning": "pico-carbon",
  "MNRF": "mnrf",
  "Fractional CO2 & Q-YAG": "fractional-co2-qyag",
  "Dermapen International": "dermapen-intl",
  "Subcision": "subcision",
  "Skin Boosters, PDRN & Exosomes": "skin-boosters-pdrn-exosomes",
  "LED Phototherapy": "led-phototherapy",
  // Anti-ageing
  "Botox (Wrinkle Relaxation)": "botox-wrinkle",
  "Dermal Fillers (Volume Restoration)": "dermal-fillers",
  "Thread Lifts (Non-Surgical Face Lift)": "thread-lifts",
  "HIFU (Focused Ultrasound Lifting)": "hifu-lifting",
  "Apollo Quattro": "apollo-quattro",
  "MNRF Tightening": "mnrf-tightening-anti",
  "PDRN Therapy": "pdrn-therapy",
  "Skin Boosters": "skin-boosters-anti",
  "Under-Eye Rejuvenation (PDRN, Peels, Dermapen)": "under-eye-rejuvenation",
  // Dermatology & surgery
  "Mole, Skin Tag & Cyst Removal": "mole-skin-tag-cyst",
  "Ear Lobe Repair": "ear-lobe-repair",
  "Vitiligo Surgery & Skin Grafting": "vitiligo-grafting",
  "Phototherapy (NB-UVB, PUVA, Excimer)": "phototherapy-nb-uvb",
  "Cryotherapy & Electrocautery": "cryo-electrocautery",
  "Microblading & Dermoscopy": "microblading-dermoscopy",
  // Laser
  "Laser Hair Removal (Diode — All Body Areas)": "laser-hair-removal-diode",
  "Laser Toning for Pigmentation": "laser-toning-pigmentation",
  "Carbon Laser Peel": "carbon-laser-peel",
  "Tattoo Removal (Q-Switched Nd:YAG)": "tattoo-removal-q",
  "Fractional CO2 Resurfacing": "fractional-co2-resurfacing",
  // Skin rejuvenation
  "HydraFacial": "hydrafacial",
  "Hydra Touch": "hydra-touch",
  "Laser Toning (Q-Switched Nd:YAG)": "laser-toning-pigmentation",
  "Chemical Peels Brightening & Maintenance": "chemical-peels",
  "Microdermabrasion & Microneedling": "microdermabrasion",
  "IV Glutathione Therapy": "iv-glutathione",
  "Skin Boosters, PDRN & Exosomes": "skin-boosters-pdrn-exosomes",
  "Dr. Platon Cold Plasma Therapy": "cold-plasma",
};

export function treatmentIcon(title = "") {
  // First try exact match
  if (TREATMENT_ICONS[title]) return TREATMENT_ICONS[title];

  // Fallback: fuzzy match based on keywords in title
  const t = title.toLowerCase();
  if (/(prp|platelet)/.test(t)) return "prp";
  if (/(gfc|growth factor)/.test(t)) return "gfc";
  if (/(exosome|vesicle)/.test(t)) return "exosome";
  if (/(fue|transplant|follicular)/.test(t)) return "fue";
  if (/(lllt|low level|laser therapy)/.test(t)) return "lllt";
  if (/(mesotherapy|meso)/.test(t)) return "mesotherapy";
  if (/(hair botox|botox hair)/.test(t)) return "hair-botox";
  if (/(hair booster|booster)/.test(t)) return "hair-booster";
  if (/(acne|pimple|breakout)/.test(t) && !/(scar|mark)/.test(t)) return "acne-management";
  if (/(chemical peel|peeling)/.test(t)) return "chemical-peels";
  if (/(pico|picosecond)/.test(t) && /(carbon|toning)/.test(t)) return "pico-carbon";
  if (/(mnrf|microneedling radio)/.test(t) && !/(tight|anti)/.test(t)) return "mnrf";
  if (/(fractional co2|co2 laser)/.test(t) && /(q-?yag|qswitched)/.test(t)) return "fractional-co2-qyag";
  if (/(dermapen|microneedling pen)/.test(t)) return "dermapen-intl";
  if (/(subcision|subcission)/.test(t)) return "subcision";
  if (/(skin booster|pdrn|exosome)/.test(t) && /(acne|scar)/.test(t)) return "skin-boosters-pdrn-exosomes";
  if (/(led|light therapy|phototherapy)/.test(t) && /(acne|scar)/.test(t)) return "led-phototherapy";
  if (/(botox|wrinkle)/.test(t) && /(anti|age)/.test(t)) return "botox-wrinkle";
  if (/(filler|volume|dermal)/.test(t)) return "dermal-fillers";
  if (/(thread|lift)/.test(t) && /(anti|age|face)/.test(t)) return "thread-lifts";
  if (/(hifu|ultrasound)/.test(t)) return "hifu-lifting";
  if (/(apollo|quattro)/.test(t)) return "apollo-quattro";
  if (/(mnrf|radio).*tight/.test(t)) return "mnrf-tightening-anti";
  if (/(pdrn|polynucleotide)/.test(t) && !/(hair|booster)/.test(t)) return "pdrn-therapy";
  if (/(skin booster)/.test(t) && /(anti|age)/.test(t)) return "skin-boosters-anti";
  if (/(under.?eye|eye rejuven)/.test(t)) return "under-eye-rejuvenation";
  if (/(mole|skin tag|cyst)/.test(t)) return "mole-skin-tag-cyst";
  if (/(ear|lobe)/.test(t)) return "ear-lobe-repair";
  if (/(vitiligo|graft)/.test(t)) return "vitiligo-grafting";
  if (/(phototherapy|uvb|puva|excimer)/.test(t)) return "phototherapy-nb-uvb";
  if (/(cryo|electrocautery|electro)/.test(t)) return "cryo-electrocautery";
  if (/(microblad|dermoscop)/.test(t)) return "microblading-dermoscopy";
  if (/(hair removal|diode)/.test(t)) return "laser-hair-removal-diode";
  if (/(laser toning|pigment)/.test(t) && !/(carbon|acne)/.test(t)) return "laser-toning-pigmentation";
  if (/(carbon.*peel|carbon laser)/.test(t)) return "carbon-laser-peel";
  if (/(tattoo|ink)/.test(t)) return "tattoo-removal-q";
  if (/(fractional.*resurfac|co2.*resurfac)/.test(t)) return "fractional-co2-resurfacing";
  if (/(hydrafacial|hydra facial)/.test(t)) return "hydrafacial";
  if (/(hydra touch|hydratouch)/.test(t)) return "hydra-touch";
  if (/(microderm|microneedl)/.test(t) && !/(pen|dermapen)/.test(t)) return "microdermabrasion";
  if (/(iv|glutathione)/.test(t)) return "iv-glutathione";
  if (/(platon|cold plasma)/.test(t)) return "cold-plasma";

  // General category fallbacks
  if (/(hair|transplant|fue|follicle|scalp|tricholog)/.test(t)) return "hair";
  if (/(mole|tag|cyst|ear|vitiligo|graft|surgery|cryo|electrocautery|subcision|microblad|dermoscop|excis)/.test(t)) return "patch";
  if (/(hifu|thread|lift|tighten|mnrf|apollo)/.test(t)) return "wave";
  if (/(laser|lllt|toning|photother|phototherap|resurfacing|carbon|q-switched|excimer|tattoo)/.test(t)) return "laser";
  if (/(prp|gfc|exosome|mesotherap|booster|filler|botox|peptide|pdrn|glutathione|iv |hydra|microderm|microneedl|dermapen|skin booster|hair botox|hair booster)/.test(t)) return "drop";
  if (/(peel|hydra|microderm|microneedl|dermapen|acne|scar|pigment|rejuvenat|glow|radiance|texture|platon)/.test(t)) return "sparkle";

  return "sparkle";
}

// Legacy ICONS object for backward compatibility with CatIcon.astro
// Maps icon keys to SVG path strings
export const ICONS = {
  hair: '<path d="M7 21c0-5 1-9 5-14 4 5 5 9 5 14"/><path d="M10 21c-.4-3 0-6 2-9"/><path d="M14 21c.4-3 0-6-2-9"/>',
  vial: '<path d="M9 2v13a3 3 0 0 0 6 0V2"/><path d="M9 2h6"/><path d="M10.5 11h3"/>',
  cell: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="5.5" r="1"/><circle cx="17.5" cy="14" r="1"/><circle cx="6.5" cy="14" r="1"/>',
  laser: '<path d="M3 21L19 5"/><path d="M19 5h-5M19 5v5"/><circle cx="5.5" cy="18.5" r="1.5"/>',
  needle: '<path d="M4 20l3-3"/><path d="M7 17l6-6"/><path d="M13 11l5-5 2 2-5 5"/><path d="M10 14l2 2"/>',
  wave: '<path d="M3 11c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M3 16c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/>',
  drop: '<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z"/>',
  sparkle: '<path d="M12 3l1.8 5.7L19.5 10l-5.7 1.3L12 17l-1.8-5.7L4.5 10l5.7-1.3L12 3Z"/><path d="M18.5 3.5l.7 1.8L21 6l-1.8.7L18.5 8.5 17.8 6.7 16 6l1.8-.5L18.5 3.5Z"/>',
  face: '<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01"/><path d="M9 15c1.5 1 4.5 1 6 0"/><circle cx="15.5" cy="14.5" r="1.3"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5Z"/><path d="M3 13l9 5 9-5"/><path d="M3 17l9 5 9-5"/>',
  pen: '<path d="M4 20l2-5L15 6l3 3L9 18l-5 2Z"/><path d="M14 7l3 3"/>',
  eye: '<path d="M2 12c3-5 7-7 10-7s7 2 10 7c-3 5-7 7-10 7S5 17 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  spot: '<circle cx="10" cy="10" r="6"/><circle cx="10" cy="10" r="2"/><path d="M14.5 14.5L21 21"/>',
  ear: '<path d="M7 9a5 5 0 0 1 10 0c0 4-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 12a2 2 0 0 0 4 0"/>',
  patch: '<path d="M8 3v3M16 3v3M8 21v-3M16 21v-3M3 8h3M3 16h3M21 8h-3M21 16h-3"/><rect x="8" y="8" width="8" height="8" rx="2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"/>',
  snow: '<path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/><path d="M12 6l-2-2M12 6l2-2M12 18l-2 2M12 18l2 2M6 12l-2-2M6 12l-2 2M18 12l2-2M18 12l2 2"/>',
  iv: '<path d="M10 3h4v5a3 3 0 0 1-4 0V3Z"/><path d="M12 11v4"/><path d="M12 15c1.6 2 2 2.6 2 3.6a2 2 0 0 1-4 0c0-1 .4-1.6 2-3.6Z"/><path d="M9 21h6"/>',
  thread: '<path d="M4 6c6 0 11 4 16 5"/><path d="M7 6l-1.5 2M11 7l-1.5 2M15 8.2l-1.5 2M19 10l-1.5 2"/>',
  device: '<rect x="5" y="9" width="14" height="9" rx="2"/><path d="M9 9V6h6v3"/><circle cx="9.5" cy="13.5" r="1"/><circle cx="14.5" cy="13.5" r="1"/>',
  hydra: '<path d="M12 3c3 4 5 6 5 9a5 5 0 0 1-10 0c0-3 2-5 5-9Z"/><path d="M9 14c1-1 2-1 3 0s2 1 3 0"/>',
  syringe: '<path d="M4 20l4-4"/><path d="M8 16l4-4 3 3-4 4-3-3z"/><path d="M15 9l5-5"/><path d="M13 11l2 2"/>',
};