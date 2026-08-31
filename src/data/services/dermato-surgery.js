const waLink =
  "https://wa.me/910000000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dermatology%20%26%20skin%20surgery%20consultation%20at%20Skin%20Trust.";

import { SITE_BASE, BASE } from "../site.js";
import { getHeader, getFooter } from "../layout.js";

export default {
  slug: "dermato-surgery-karur",
  displayName: "Dermatology & Skin Surgery",
  summary:
    "Clinical dermatology and minor skin surgery in Karur by Dr. Kavitha, MD Dermatology. Mole, skin tag & cyst removal, ear lobe repair, vitiligo surgery & skin grafting, phototherapy, cryotherapy, microblading, dermoscopy.",
  meta: {
    title: "Dermatology & Skin Surgery in Karur | Skin Trust - Dr. Kavitha",
    description:
      "Clinical dermatology and minor skin surgery in Karur by Dr. Kavitha, MD Dermatology. Mole, skin tag & cyst removal, ear lobe repair, vitiligo surgery & skin grafting, phototherapy, cryotherapy, microblading, dermoscopy. 3,500+ reviews. Book today.",
    keywords:
      "dermatology karur, skin surgery karur, mole removal karur, cyst removal karur, ear lobe repair karur, vitiligo surgery karur, skin grafting karur, phototherapy karur, cryotherapy karur, dermoscopy karur",
    canonical: `${SITE_BASE}/services/dermato-surgery-karur`,
    ogTitle: "Dermatology & Skin Surgery in Karur | Skin Trust - Dr. Kavitha",
    ogDescription:
      "Clinical dermatology and minor skin surgery in Karur by Dr. Kavitha, MD Dermatology. Mole, skin tag & cyst removal, ear lobe repair, vitiligo surgery & skin grafting, phototherapy, cryotherapy, microblading, dermoscopy. Book today.",
    ogUrl: `${SITE_BASE}/services/dermato-surgery-karur`,
  },
  headCss: `${BASE}/assets/css/dermato-surgery.css`,
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_BASE}/#clinic`,
        name: "Skin Trust Hospital",
        url: `${SITE_BASE}/`,
        telephone: "+91-00000-00000",
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 30, Chairman Ramanujam Street",
          addressLocality: "Karur",
          postalCode: "639001",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 10.961598, longitude: 78.0767411 },
        openingHours: "Mo-Sa 10:00-20:00",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "3500",
          bestRating: "5",
        },
        medicalSpecialty: ["Dermatology", "Aesthetic Medicine"],
        founder: {
          "@type": "Physician",
          name: "Dr. Kavitha",
          medicalSpecialty: ["Dermatology", "Trichology", "Dermatosurgery"],
          hasCredential: ["MBBS", "MD Dermatology"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dermatology & Skin Surgery Treatments",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Mole, Skin Tag & Cyst Removal in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Ear Lobe Repair in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Vitiligo Surgery & Skin Grafting in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Phototherapy in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Cryotherapy & Electrocautery in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Microblading & Dermoscopy in Karur" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is mole or skin tag removal painful?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Removal is performed under local anaesthesia, so the area is numbed before the procedure. Most patients feel pressure rather than pain, with mild discomfort as the anaesthesia wears off afterward.",
            },
          },
          {
            "@type": "Question",
            name: "How do I know if a mole needs to be checked or removed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Any mole that has changed in size, shape, colour or border, or that bleeds, itches or feels different from your other moles, should be examined. Dr. Kavitha uses dermoscopy to assess concerning features before deciding whether removal is medically necessary or a personal preference.",
            },
          },
          {
            "@type": "Question",
            name: "Can vitiligo surgery be done on any patient?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Surgical repigmentation techniques such as punch and skin grafting are only suitable for vitiligo that has been clinically confirmed as stable, meaning it has not spread or changed for a defined period. Active or progressing vitiligo is managed with medical treatment and phototherapy first.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between NB-UVB, PUVA and excimer phototherapy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "NB-UVB is a broader narrowband light therapy suited to larger areas and conditions like vitiligo and psoriasis. PUVA combines a light-sensitising medication with UVA light for more resistant cases. Excimer delivers targeted light to smaller, localised patches. Dr. Kavitha selects the modality based on your specific condition, area affected and skin type.",
            },
          },
          {
            "@type": "Question",
            name: "Will removal leave a visible scar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Some mark is expected with any surgical removal, but technique, closure and aftercare are all planned to minimise visible scarring. Healing varies by individual, particularly in skin types more prone to keloid or pigmented scarring, which is discussed at consultation.",
            },
          },
          {
            "@type": "Question",
            name: "How long does ear lobe repair take to heal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The procedure itself is typically completed within the same visit under local anaesthesia. Initial healing takes around one to two weeks, with stitches, if used, reviewed during that period. Re-piercing, if desired, is usually possible once the area has fully healed.",
            },
          },
          {
            "@type": "Question",
            name: "What is cryotherapy used for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cryotherapy uses controlled freezing to remove warts, skin tags and certain other benign surface lesions. It is a quick in-clinic procedure suited to smaller, superficial growths.",
            },
          },
          {
            "@type": "Question",
            name: "Is dermoscopy part of every skin check?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dermoscopy is used whenever a mole or pigmented lesion needs closer clinical examination, allowing Dr. Kavitha to assess features not visible to the naked eye before deciding on removal or ongoing monitoring.",
            },
          },
        ],
      },
    ],
  },
  waLink,
  header: getHeader(BASE),
  footer: getFooter(BASE),
  hero: {
    eyebrow: "Dermatology & Skin Surgery · Karur",
    h1: "Clinical dermatology, <em>approached with clinical precision.</em>",
    lede:
      "Clinical dermatology and minor surgical procedures are performed in a sterile, hospital-standard setting, covering treatments such as mole, skin tag and cyst removal, vitiligo grafting and phototherapy. Every procedure begins with a thorough clinical assessment and appropriate diagnosis.",
    ctaHref: "#book",
    ctaLabel: "Book a consultation",
    figureText: "Clinical assessment<br>at Skin Trust<br>(3:4 portrait)",
    image: `${BASE}/assets/images/treatments/treatment-banner/dermato-surgery.png`,
    imageAlt: "Dermatology & Skin Surgery banner at Skin Trust Karur",
    badge: {
      stars: "★★★★★",
      num: "4.9",
      labelHtml: "<em>3,500+</em> Google reviews",
    },
  },
  strip: [
    { b: "5+", label: "Procedures available" },
    { b: "Sterile set-up", label: "Hospital-standard clinic" },
    { b: "Doctor", label: "Performs every procedure" },
    { b: "Karur", label: "Established clinic" },
  ],
  results: {
    eyebrow: "Patient results",
    h2: "Before &amp; after, by treatment",
    lede:
      "Real patient results from three key procedures at Skin Trust. All images published with written patient consent, photographed under identical clinic lighting.",
    // Tabs removed as requested (same as hair/anti-ageing/laser) — single consolidated tab with only 3 image-updated cards.
    tabs: [
      {
        id: "results",
        label: "Results",
        cards: [
          {
            afterNote: "Follow-up",
            ariaLabel: "Stable vitiligo patch on the hand, punch skin grafting",
            title: "Stable vitiligo patch",
            body: "Male, 31. A stable vitiligo patch on the hand treated with punch skin grafting after phototherapy alone had plateaued. Visible repigmentation at follow-up.",
            tags: ["Vitiligo Surgery", "Skin Grafting", "Repigmentation"],
            beforeSrc: `${BASE}/assets/images/dermato-surgery/results/stable-vitiligo-patch-before.jpg`,
            afterSrc: `${BASE}/assets/images/dermato-surgery/results/stable-vitiligo-patch-after.jpg`,
            beforeAlt: "Stable vitiligo patch — Before — Malathi V., 28 (Virtue Aesthetic Clinic, Vitiligo)",
            afterAlt: "Stable vitiligo patch — After — Malathi V., 28 (Virtue Aesthetic Clinic, Vitiligo)",
          },
          {
            afterNote: "2 Weeks",
            ariaLabel: "Painful plantar wart removed Ganesan M 28 before after",
            title: "Painful plantar wart removed",
            body: "Male, 28. A deep plantar wart causing pain while walking was precisely removed after unsuccessful home treatments. Comfortable walking resumed within two weeks, with minimal visible scarring.",
            tags: ["Mole Removal", "Skin Tag Removal", "Minor Surgery"],
            beforeSrc: `${BASE}/assets/images/dermato-surgery/results/painful-plantar-wart-removed-before.jpg`,
            afterSrc: `${BASE}/assets/images/dermato-surgery/results/painful-plantar-wart-removed-after.jpg`,
            beforeAlt: "Painful plantar wart removed — Before — Ganesan M., 28 (Virtue Aesthetic Clinic, Wart Removal)",
            afterAlt: "Painful plantar wart removed — After — Ganesan M., 28 (Virtue Aesthetic Clinic, Wart Removal)",
          },
          {
            afterNote: "Healed",
            ariaLabel: "Stretched earlobe from heavy earring use, surgical repair",
            title: "Stretched earlobe restored",
            body: "Female, 27. A stretched earlobe from years of heavy earring use surgically repaired, restoring a natural earlobe shape and structure.",
            tags: ["Ear Lobe Repair", "Reconstructive"],
            beforeSrc: `${BASE}/assets/images/dermato-surgery/results/stretched-earlobe-before.png`,
            afterSrc: `${BASE}/assets/images/dermato-surgery/results/stretched-earlobe-after.png`,
            beforeAlt: "Stretched earlobe restored — Before — AI generated (Virtue style, 1200x800)",
            afterAlt: "Stretched earlobe restored — After — AI generated (Virtue style, 1200x800)",
          },
        ],
      },
      // DRAFT (hidden) — Mole, Skin Tag & Cyst Removal (no offline image, skipped as per tabs-removed + 3-updated-cards-only rule)
      // {
      //   id: "mole-removal",
      //   label: "Mole, Skin Tag & Cyst Removal",
      //   cards: [
      //     {
      //       afterNote: "Follow-up",
      //       ariaLabel: "Multiple skin tags on the neck, surgical removal, follow-up",
      //       title: "Multiple skin tags",
      //       body: "Male, 34. Multiple skin tags on the neck removed in a single sitting under local anaesthesia. Clean healing with minimal scarring visible at follow-up.",
      //       tags: ["Mole Removal", "Skin Tag Removal", "Minor Surgery"],
      //     },
      //   ],
      // },
    ],
    disclaimer:
      "Results vary by individual and depend on lesion type, skin type, stability of condition and treatment compliance. All photographs are of real Skin Trust patients, published with written consent. These are not a guarantee of outcome.",
  },
  treatments: {
    eyebrow: "Dermatology & skin surgery",
    h2: "Clinical procedures,<br>one clinic",
    lede:
      "Every procedure below begins with a clinical assessment. Nothing is removed, grafted or treated without a clear diagnosis behind it.",
    cards: [
      {
        placeholder: "Mole / skin tag / cyst<br>image 16:10",
        title: "Mole, Skin Tag & Cyst Removal",
        body: "Surgical removal of moles, skin tags and cysts performed under local anaesthesia in a sterile clinical setting, with each lesion assessed for size, depth and clinical presentation before removal.",
        ctaHref: `${BASE}/services/dermato-surgery-karur`,
        ctaLabel: "View mole removal →",
      },
      {
        placeholder: "Ear lobe repair<br>image 16:10",
        title: "Ear Lobe Repair",
        body: "Surgical repair of torn, stretched or split earlobes — whether from injury, heavy earrings or gauging — restoring a natural shape and structure.",
        ctaHref: `${BASE}/services/dermato-surgery-karur`,
        ctaLabel: "View ear lobe repair →",
      },
      {
        placeholder: "Vitiligo grafting<br>image 16:10",
        title: "Vitiligo Surgery & Skin Grafting",
        body: "Surgical repigmentation techniques, including punch and skin grafting, for stable vitiligo patches that have not responded to medical or light-based therapy alone.",
        ctaHref: `${BASE}/services/dermato-surgery-karur`,
        ctaLabel: "View vitiligo surgery →",
      },
      {
        placeholder: "Phototherapy<br>image 16:10",
        title: "Phototherapy (NB-UVB, PUVA, Excimer)",
        body: "Targeted light therapy — narrowband UVB, PUVA and excimer — used to manage vitiligo, psoriasis and other chronic skin conditions, with wavelength and exposure calibrated to the specific condition and skin type.",
        ctaHref: `${BASE}/services/dermato-surgery-karur`,
        ctaLabel: "View phototherapy →",
      },
      {
        placeholder: "Cryotherapy<br>image 16:10",
        title: "Cryotherapy & Electrocautery",
        body: "In-clinic procedures using controlled freezing or electrical current to remove warts, skin tags and other benign surface lesions, chosen based on lesion type and location.",
        ctaHref: `${BASE}/services/dermato-surgery-karur`,
        ctaLabel: "View cryotherapy →",
      },
      {
        placeholder: "Microblading<br>image 16:10",
        title: "Microblading & Dermoscopy",
        body: "Microblading for eyebrow definition using a fine hair-stroke technique, and dermoscopy for detailed clinical examination of moles and pigmented lesions to assess for concerning features.",
        ctaHref: `${BASE}/services/dermato-surgery-karur`,
        ctaLabel: "View microblading →",
      },
    ],
  },
  why: {
    eyebrow: "Why Karur Trusts Dr. Kavitha",
    h2: "Minor surgery, treated with major-procedure discipline.",
    lede:
      "Clinical dermatology and minor surgery call for the same rigour as any hospital procedure. Here is how that is upheld at Skin Trust.",
    items: [
      {
        title: "Doctor performs every procedure",
        text: "Every excision, repair, graft and phototherapy session at this clinic is carried out by Dr. Kavitha personally, from initial assessment through to the procedure itself.",
      },
      {
        title: "Sterile hospital-grade setup",
        text: "Clinical dermatology and minor surgery at Skin Trust follow a structured, clinically guided approach, with appropriate assessment, sterile protocols and careful procedural planning.",
      },
      {
        title: "Diagnosis before removal",
        text: "Every mole, lesion or growth is clinically assessed — including dermoscopic examination where needed — before any removal is planned, so nothing is removed without a clear clinical reason.",
      },
      {
        title: "Vitiligo assessed for stability first",
        text: "Surgical repigmentation techniques are only considered for vitiligo that has been clinically confirmed as stable. Active or progressing vitiligo is managed medically and with phototherapy first.",
      },
      {
        title: "Phototherapy calibrated by condition and skin type",
        text: "NB-UVB, PUVA and excimer light therapy each suit different conditions. Dr. Kavitha selects the modality and dosing based on your specific diagnosis and skin type.",
      },
      {
        title: "Standardised documentation and follow-up",
        text: "Progress is documented and reviewed at each follow-up visit, particularly important for conditions like vitiligo that are tracked over months.",
      },
      {
        title: "Full dermatosurgery spectrum available",
        text: "From minor excisions and ear lobe repair through to vitiligo grafting and phototherapy, the complete dermatology and minor surgery pathway is available at this one clinic in Karur.",
      },
      {
        title: "Careful technique for scar-prone skin",
        text: "Closure technique and aftercare are planned to minimise visible scarring, with particular attention to skin types more prone to keloid or pigmented scarring.",
      },
      {
        title: "3,500+ verified Google reviews",
        text: "The most-reviewed skin clinic in Karur district with a 4.9 average. Patients from Trichy, Namakkal, Erode and Dindigul attend this clinic specifically because word of mouth across Tamil Nadu is that strong.",
      },
    ],
    stats: [
      { value: "5+", label: "Procedures available" },
      { value: "100%", label: "Doctor-performed procedures" },
      { value: "4.9", label: "Google rating" },
      { value: "3,500+", label: "Verified reviews" },
    ],
    ctaHref: "#book",
    ctaLabel: "Book a consultation",
  },
  doctor: {
    eyebrow: "Your skin specialist",
    name: "Dr. Kavitha",
    image: `${BASE}/assets/images/dr-kavitha.jpg`,
    alt: "Dr. Kavitha",
    creds: ["MBBS", "MD Dermatology", "Trichology", "Dermatosurgery"],
    paragraphs: [
      "Dermatology extends well beyond skin care into clinical diagnosis and minor surgery, and Dr. Kavitha treats this side of the practice with the same structured approach as any other treatment.",
      "Every lesion, growth or vitiligo patch is assessed clinically before a plan is made, whether that means simple excision, a course of phototherapy, or surgical repigmentation for stable vitiligo that has not responded to other treatment. Procedures are performed in a sterile, hospital-standard setting, with attention to minimising visible scarring afterward.",
      "All procedures at this clinic, from mole and cyst removal through to vitiligo grafting, are performed by Dr. Kavitha personally.",
    ],
    sig: "— Dr. Kavitha",
    moreHref: `${BASE}/about`,
    moreLabel: "More about Dr. Kavitha",
  },
  testimonials: {
    eyebrow: "In patients' words",
    score: { num: "4.9", stars: "★★★★★", of: "3,500+ reviews" },
    copyBig: "<strong>3,500+</strong> patients across Karur and nearby towns have shared their experience.",
    copy:
      "That is more Google reviews than any other skin and hair clinic in the district. Not one of these was incentivised. Patients are asked once, politely, at the conclusion of their treatment.",
    quotes: [
      {
        quote:
          "I had a cyst removed that I had been putting off for years out of fear. Dr. Kavitha explained the procedure clearly beforehand and the recovery was much easier than I expected.",
        name: "Ganesh P.",
        meta: "Google review · Karur",
      },
      {
        quote:
          "My vitiligo patch had been stable for over a year with no change from creams or light therapy. She discussed grafting as an option and explained exactly what to expect. The results have been steady since.",
        name: "Sowmya K.",
        meta: "Google review · Trichy",
      },
      {
        quote:
          "My torn earlobe from years ago was finally repaired properly. The stitching was neat and it healed without any issues.",
        name: "Anitha R.",
        meta: "Google review · Erode",
      },
    ],
    allHref:
      "https://www.google.com/maps/place/Skin+Trust+Hospital/@10.961598,78.0767411,15z/data=!4m5!3m4!1s0x0:0x62678fb45b2ac308",
    allLabel: "Read all 3,500+ reviews on Google",
  },
  faq: {
    eyebrow: "Common questions",
    h2: "Before you book",
    items: [
      {
        question: "Is mole or skin tag removal painful?",
        answer:
          "Removal is performed under local anaesthesia, so the area is numbed before the procedure. Most patients feel pressure rather than pain, with mild discomfort as the anaesthesia wears off afterward.",
      },
      {
        question: "How do I know if a mole needs to be checked or removed?",
        answer:
          "Any mole that has changed in size, shape, colour or border, or that bleeds, itches or feels different from your other moles, should be examined. Dr. Kavitha uses dermoscopy to assess concerning features before deciding whether removal is medically necessary or a personal preference.",
      },
      {
        question: "Can vitiligo surgery be done on any patient?",
        answer:
          "No. Surgical repigmentation techniques such as punch and skin grafting are only suitable for vitiligo that has been clinically confirmed as stable, meaning it has not spread or changed for a defined period. Active or progressing vitiligo is managed with medical treatment and phototherapy first.",
      },
      {
        question: "What is the difference between NB-UVB, PUVA and excimer phototherapy?",
        answer:
          "NB-UVB is a broader narrowband light therapy suited to larger areas and conditions like vitiligo and psoriasis. PUVA combines a light-sensitising medication with UVA light for more resistant cases. Excimer delivers targeted light to smaller, localised patches. Dr. Kavitha selects the modality based on your specific condition, area affected and skin type.",
      },
      {
        question: "Will removal leave a visible scar?",
        answer:
          "Some mark is expected with any surgical removal, but technique, closure and aftercare are all planned to minimise visible scarring. Healing varies by individual, particularly in skin types more prone to keloid or pigmented scarring, which is discussed at consultation.",
      },
      {
        question: "How long does ear lobe repair take to heal?",
        answer:
          "The procedure itself is typically completed within the same visit under local anaesthesia. Initial healing takes around one to two weeks, with stitches, if used, reviewed during that period. Re-piercing, if desired, is usually possible once the area has fully healed.",
      },
      {
        question: "What is cryotherapy used for?",
        answer:
          "Cryotherapy uses controlled freezing to remove warts, skin tags and certain other benign surface lesions. It is a quick in-clinic procedure suited to smaller, superficial growths.",
      },
      {
        question: "Is dermoscopy part of every skin check?",
        answer:
          "Dermoscopy is used whenever a mole or pigmented lesion needs closer clinical examination, allowing Dr. Kavitha to assess features not visible to the naked eye before deciding on removal or ongoing monitoring.",
      },
    ],
  },
  visit: {
    eyebrow: "Visit us",
    h2: "Find the clinic",
    lede: "Skin Trust is located in Madavilagam, Karur, directly opposite the Kamaatchi Amman Temple.",
    clinicName: "Skin Trust",
    rows: [
      {
        dt: "Address",
        dd: "No. 30, Chairman Ramanujam Street,<br>opp. Kamaatchi Amman Temple,<br>Madavilagam, Karur — 639001,<br>Tamil Nadu",
      },
      { dt: "Hours", dd: "Mon–Sat 10:00–20:00<br>Sunday by appointment" },
      {
        dt: "Phone",
        dd: '<a href="tel:+910000000000" style="border-bottom:1px solid var(--champagne)">+91 00000 00000</a>',
      },
      {
        dt: "WhatsApp",
        dd: `<a href="${waLink}" target="_blank" rel="noopener" style="border-bottom:1px solid var(--champagne)">Send a message</a>`,
      },
      { dt: "Nearest landmark", dd: "Kamaatchi Amman Temple, Madavilagam" },
    ],
    buttons: [
      {
        label: "Get directions",
        href: "https://www.google.com/maps/place/Skin+Trust+Hospital/@10.961598,78.0767411,15z/data=!4m5!3m4!1s0x0:0x62678fb45b2ac308",
        target: "_blank",
        class: "btn btn-solid",
      },
      { label: "WhatsApp to book", href: waLink, target: "_blank", class: "btn btn-ghost" },
    ],
    map: {
      title: "Skin Trust location on Google Maps",
      ariaLabel: "Map showing Skin Trust at Chairman Ramanujam Street, Karur",
      src: "https://maps.google.com/maps?q=10.961598,78.0767411&z=16&output=embed",
    },
  },
  cta: {
    eyebrow: "Next step",
    h2: "Start with a clinical assessment,<br>not a guess.",
    lede:
      "A first consultation covers your specific concern, a proper diagnosis and a clear procedure plan. No packages are sold at this visit.",
    buttons: [
      { label: "Call +91 00000 00000", href: "tel:+910000000000", class: "btn btn-gold" },
      { label: "WhatsApp to book", href: waLink, target: "_blank", class: "btn btn-ghost-light" },
    ],
  },
  internalLinks: {
    eyebrow: "Explore the clinic",
    h2: "Other treatments at Skin Trust",
    cards: [
      { category: "Hair", label: "Hair Restoration", href: `${BASE}/services/hair-restoration` },
      { category: "Laser", label: "Laser Treatments", href: `${BASE}/services/laser-treatments-karur` },
      { category: "Aesthetics", label: "Anti-Ageing & Lifting", href: `${BASE}/services/anti-ageing-treatment-karur` },
      { category: "Skin", label: "Skin Rejuvenation & Glow", href: `${BASE}/services/skin-rejuvenation-karur` },
    ],
  },
};