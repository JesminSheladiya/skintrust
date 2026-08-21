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

const TREATMENT_ICONS = {
  // Hair restoration
  "PRP Hair Treatment": "syringe",
  "GFC Therapy": "vial",
  "Exosome Therapy": "cell",
  "FUE Hair Transplant": "hair",
  "LLLT (Laser Therapy)": "laser",
  "Mesotherapy": "needle",
  "Hair Botox": "hydra",
  "Hair Booster": "drop",
  // Acne & scar
  "Medical Acne Management": "face",
  "Chemical Peels": "layers",
  "Pico & Carbon Toning": "sparkle",
  "MNRF": "wave",
  "Fractional CO2 & Q-YAG": "laser",
  "Dermapen International": "pen",
  "Subcision": "needle",
  "Skin Boosters, PDRN & Exosomes": "drop",
  "LED Phototherapy": "sun",
  // Anti-ageing
  "Botox (Wrinkle Relaxation)": "syringe",
  "Dermal Fillers (Volume Restoration)": "drop",
  "Thread Lifts (Non-Surgical Face Lift)": "thread",
  "HIFU (Focused Ultrasound Lifting)": "wave",
  "Apollo Quattro": "device",
  "MNRF Tightening": "wave",
  "PDRN Therapy": "drop",
  "Skin Boosters": "drop",
  "Under-Eye Rejuvenation (PDRN, Peels, Dermapen)": "eye",
  // Dermatology & surgery
  "Mole, Skin Tag & Cyst Removal": "spot",
  "Ear Lobe Repair": "ear",
  "Vitiligo Surgery & Skin Grafting": "patch",
  "Phototherapy (NB-UVB, PUVA, Excimer)": "sun",
  "Cryotherapy & Electrocautery": "snow",
  "Microblading & Dermoscopy": "pen",
  // Laser
  "Laser Hair Removal (Diode — All Body Areas)": "laser",
  "Laser Toning for Pigmentation": "laser",
  "Carbon Laser Peel": "sparkle",
  "Tattoo Removal (Q-Switched Nd:YAG)": "laser",
  "Fractional CO2 Resurfacing": "laser",
  // Skin rejuvenation
  "HydraFacial": "hydra",
  "Hydra Touch": "hydra",
  "Laser Toning (Q-Switched Nd:YAG)": "laser",
  "Chemical Peels Brightening & Maintenance": "layers",
  "Microdermabrasion & Microneedling": "pen",
  "IV Glutathione Therapy": "iv",
  "Skin Boosters, PDRN & Exosomes": "drop",
  "Dr. Platon Cold Plasma Therapy": "sparkle",
};

export function treatmentIcon(title = "") {
  if (TREATMENT_ICONS[title]) return TREATMENT_ICONS[title];
  const t = title.toLowerCase();
  if (/(hair|transplant|fue|follicle|scalp|tricholog)/.test(t)) return "hair";
  if (/(mole|tag|cyst|ear|vitiligo|graft|surgery|cryo|electrocautery|subcision|microblad|dermoscop|excis)/.test(t)) return "patch";
  if (/(hifu|thread|lift|tighten|mnrf|apollo)/.test(t)) return "wave";
  if (/(laser|lllt|toning|photother|phototherap|resurfacing|carbon|q-switched|excimer|tattoo)/.test(t)) return "laser";
  if (/(prp|gfc|exosome|mesotherap|booster|filler|botox|peptide|pdrn|glutathione|iv |hydra|microderm|microneedl|dermapen|skin booster|hair botox|hair booster)/.test(t)) return "drop";
  if (/(peel|hydra|microderm|microneedl|dermapen|acne|scar|pigment|rejuvenat|glow|radiance|texture|platon)/.test(t)) return "sparkle";
  return "sparkle";
}
