import { SITE_BASE } from "./site.js";

export default {
  "@context":"https://schema.org",
  "@type":"MedicalClinic",
  "name":"Skin Trust Hospital",
  "alternateName":"SkinTrust Karur",
  url: `${SITE_BASE}/`,
  "telephone":"+91-96269-23299",
  image: `${SITE_BASE}/assets/images/home-cover.jpg`,
  "address":{"@type":"PostalAddress","streetAddress":"No. 28, Chairman Ramanujan Street","addressLocality":"Karur","postalCode":"639001","addressRegion":"Tamil Nadu","addressCountry":"IN"},
  "geo":{"@type":"GeoCoordinates","latitude":10.961598,"longitude":78.0767411},
  "hasMap":"https://g.page/skintrusthospital",
  "openingHours":"Mo-Sa 09:30-19:30",
  "priceRange":"₹₹",
  "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"3600","bestRating":"5"},
  "medicalSpecialty":"Dermatology",
  "founder":{"@type":"Physician","name":"Dr. Kavitha","medicalSpecialty":"Dermatology","qualification":"MBBS, MD (Dermatology)"},
  "availableService":[
    {"@type":"MedicalProcedure","name":"PRP Hair Treatment"},
    {"@type":"MedicalProcedure","name":"GFC Hair Treatment"},
    {"@type":"MedicalProcedure","name":"FUE Hair Transplant"},
    {"@type":"MedicalProcedure","name":"Exosome Hair Therapy"},
    {"@type":"MedicalProcedure","name":"Acne Treatment"},
    {"@type":"MedicalProcedure","name":"Acne Scar Treatment (MNRF, Fractional CO2, Dermapen)"},
    {"@type":"MedicalProcedure","name":"HydraFacial"},
    {"@type":"MedicalProcedure","name":"Laser Hair Removal (Diode Laser)"},
    {"@type":"MedicalProcedure","name":"Laser Toning (Q-Switched Nd:YAG)"},
    {"@type":"MedicalProcedure","name":"Botox and Dermal Fillers"},
    {"@type":"MedicalProcedure","name":"Thread Lift"},
    {"@type":"MedicalProcedure","name":"HIFU Skin Tightening"},
    {"@type":"MedicalProcedure","name":"Tattoo Removal"},
    {"@type":"MedicalProcedure","name":"Dermato Surgery"},
    {"@type":"MedicalProcedure","name":"Vitiligo Surgery and Skin Grafting"},
    {"@type":"MedicalProcedure","name":"Phototherapy (NB-UVB, PUVA, Excimer)"},
    {"@type":"MedicalProcedure","name":"Body Contouring"},
    {"@type":"MedicalProcedure","name":"IV Glutathione Therapy"}
  ]
}
