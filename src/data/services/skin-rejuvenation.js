const waLink =
  "https://wa.me/910000000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20skin%20rejuvenation%20consultation%20at%20Skin%20Trust.";

import { SITE_BASE, BASE } from "../site.js";
import { getHeader, getFooter } from "../layout.js";

export default {
  slug: "skin-rejuvenation-karur",
  displayName: "Skin Rejuvenation & Glow",
  summary:
    "From HydraFacial maintenance and laser toning to regenerative skin boosters, Dr. Kavitha offers personalised skin rejuvenation and glow treatments at Skin Trust, Karur.",
  meta: {
    title: "Skin Rejuvenation & Glow in Karur | Skin Trust - Dr. Kavitha",
    description:
      "Skin rejuvenation and glow treatments in Karur by Dr. Kavitha, MD Dermatology. HydraFacial, Hydra Touch, Laser Toning, Chemical Peels, Microdermabrasion, Microneedling, IV Glutathione, Skin Boosters, PDRN, Exosomes, Dr. Platon. 3,500+ reviews. Book today.",
    keywords:
      "skin rejuvenation karur, glow treatment karur, hydrafacial karur, laser toning karur, chemical peel karur, iv glutathione karur, skin boosters karur, pdrn karur, exosome therapy karur, cold plasma karur",
    canonical: `${SITE_BASE}/services/skin-rejuvenation-karur`,
    ogTitle: "Skin Rejuvenation & Glow in Karur | Skin Trust - Dr. Kavitha",
    ogDescription:
      "Skin rejuvenation and glow treatments in Karur by Dr. Kavitha, MD Dermatology. HydraFacial, Hydra Touch, Laser Toning, Chemical Peels, Microdermabrasion, Microneedling, IV Glutathione, Skin Boosters, PDRN, Exosomes, Dr. Platon. Book today.",
    ogUrl: `${SITE_BASE}/services/skin-rejuvenation-karur`,
  },
  headCss: `${BASE}/assets/css/skin-rejuvenation.css`,
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
          name: "Skin Rejuvenation & Glow Treatments",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "HydraFacial in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Hydra Touch in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Laser Toning in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Chemical Peels in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Microdermabrasion in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "IV Glutathione Therapy in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Skin Boosters, PDRN & Exosomes in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Dr. Platon Cold Plasma Therapy in Karur" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the difference between skin rejuvenation and anti-ageing treatment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Skin rejuvenation focuses on restoring tone, texture, hydration and glow, addressing dullness, mild pigmentation and surface texture rather than deep lines or volume loss. Anti-ageing treatments target wrinkles, sagging and loss of facial volume. Many patients need elements of both, and Dr. Kavitha will tell you honestly which category your concern falls into.",
            },
          },
          {
            "@type": "Question",
            name: "How often should I get a HydraFacial or Hydra Touch session?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most patients maintain results with a session every four to six weeks, though this depends on your skin type, oil production and how your skin responds to Tamil Nadu's humidity. Dr. Kavitha sets a realistic maintenance interval at your first visit itself.",
            },
          },
          {
            "@type": "Question",
            name: "Is laser toning permanent, and how many sessions are needed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Laser toning gradually breaks down pigment and evens out tone, but it does not prevent new pigmentation from sun exposure or hormonal factors. Most patients need six to eight initial sessions, followed by occasional maintenance sessions. Daily sunscreen use is essential to protect the results.",
            },
          },
          {
            "@type": "Question",
            name: "Is IV glutathione therapy safe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When administered under medical supervision with the correct dosage and frequency, IV glutathione is generally safe. Dr. Kavitha reviews your health history before starting any course and monitors you through the treatment. It is not offered as an unsupervised walk-in service at this clinic.",
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
    eyebrow: "Skin Rejuvenation & Glow · Karur",
    h1: "Glow that holds up to <em>Tamil Nadu's sun and humidity.</em>",
    lede:
      "From HydraFacial maintenance and laser toning to regenerative skin boosters, Dr. Kavitha addresses concerns such as dullness, uneven skin tone and early textural changes through personalised treatment plans. Each protocol is selected after assessing your skin's condition, concerns and treatment needs.",
    ctaHref: "#book",
    ctaLabel: "Book a consultation",
    figureText: "Skin assessment<br>at Skin Trust<br>(3:4 portrait)",
    image: `${BASE}/assets/images/treatments/treatment-banner/skin-rejuventation.png`,
    imageAlt: "Skin Rejuvenation & Glow treatment banner at Skin Trust Karur",
    badge: {
      stars: "★★★★★",
      num: "4.9",
      labelHtml: "<em>3,500+</em> Google reviews",
    },
  },
  strip: [
    { b: "6+", label: "Treatments available" },
    { b: "Rejuvenation", label: "Personalised to your skin" },
    { b: "Doctor", label: "Performs every session" },
    { b: "Karur", label: "Established clinic" },
  ],
  results: {
    eyebrow: "Patient results",
    h2: "Before &amp; after, by treatment",
    lede:
      "Real patient skin progress from three key treatments at Skin Trust. All images published with written patient consent, photographed under identical clinic lighting.",
    tabs: [
      {
        id: "hydrafacial",
        label: "HydraFacial & Boosters",
        cards: [
          {
            afterNote: "Session 4",
            ariaLabel: "Dull dehydrated skin, HydraFacial and skin boosters, 4 sessions",
            title: "Dull, dehydrated skin",
            body: "Female, 32. Dull, dehydrated skin with uneven surface texture treated with combined HydraFacial and skin booster sessions. Even luminosity and hydration visible by session four.",
            tags: ["HydraFacial", "Skin Boosters", "Hydration"],
          },
        ],
      },
      {
        id: "laser-toning",
        label: "Laser Toning",
        cards: [
          {
            afterNote: "Session 6",
            ariaLabel: "Sun-induced pigmentation, laser toning, 6 sessions",
            title: "Sun-induced pigmentation",
            body: "Female, 35. Sun-induced pigmentation and uneven tone addressed with low-fluence Q-switched Nd:YAG laser toning. Visible brightening and tone correction by session six.",
            tags: ["Laser Toning", "Pigmentation", "Tone"],
          },
        ],
      },
      {
        id: "glutathione",
        label: "IV Glutathione & PDRN",
        cards: [
          {
            afterNote: "Month 2",
            ariaLabel: "General dullness, IV glutathione and PDRN, 2 months",
            title: "General dullness and early skin fatigue",
            body: "Male, 30. General dullness and early skin fatigue treated with a monitored IV glutathione course alongside PDRN skin boosters. Noticeable radiance and skin quality improvement at month two.",
            tags: ["IV Glutathione", "PDRN", "Radiance"],
          },
        ],
      },
    ],
    disclaimer:
      "Results vary by individual and depend on skin type, sun exposure, baseline condition and treatment compliance. All photographs are of real Skin Trust patients, published with written consent. These are not a guarantee of outcome.",
  },
  treatments: {
    eyebrow: "Skin rejuvenation treatments",
    h2: "All treatments,<br>one clinic",
    lede:
      "Every treatment is selected based on your skin type, hydration levels and current concerns, with protocols tailored to your individual skin needs.",
    cards: [
      {
        placeholder: "HydraFacial<br>image 16:10",
        title: "HydraFacial",
        body: "A multi-step medical facial that cleanses, exfoliates, extracts and infuses the skin with hydrating serums in a single session. Suited for regular maintenance, dullness and mild congestion, with no downtime.",
        ctaHref: `${BASE}/services/skin-rejuvenation-karur`,
        ctaLabel: "View HydraFacial →",
      },
      {
        placeholder: "Hydra Touch<br>image 16:10",
        title: "Hydra Touch",
        body: "A deeper, hydration-focused facial protocol for skin that has become dry, tight or dehydrated from Tamil Nadu's heat and humidity. Restores surface moisture and supports the skin barrier.",
        ctaHref: `${BASE}/services/skin-rejuvenation-karur`,
        ctaLabel: "View Hydra Touch →",
      },
      {
        placeholder: "Laser toning<br>image 16:10",
        title: "Laser Toning (Q-Switched Nd:YAG)",
        body: "Low-fluence laser sessions that gradually break down excess pigment and even out skin tone without downtime. Used for sun-induced pigmentation, dullness and uneven complexion common in this climate.",
        ctaHref: `${BASE}/services/skin-rejuvenation-karur`,
        ctaLabel: "View laser toning →",
      },
      {
        placeholder: "Chemical peels<br>image 16:10",
        title: "Chemical Peels Brightening & Maintenance",
        body: "Superficial chemical peels are used to improve uneven skin tone, mild pigmentation and overall skin texture while supporting regular skin maintenance. Dr. Kavitha selects the type and strength of the peel based on your skin type, concerns and tolerance to treatment.",
        ctaHref: `${BASE}/services/skin-rejuvenation-karur`,
        ctaLabel: "View chemical peels →",
      },
      {
        placeholder: "Microdermabrasion & microneedling<br>image 16:10",
        title: "Microdermabrasion & Microneedling",
        body: "Mechanical exfoliation and controlled micro-injury techniques that refine surface texture, unclog pores and stimulate natural collagen renewal. Used as a foundation treatment or paired with serums and boosters.",
        ctaHref: `${BASE}/services/skin-rejuvenation-karur`,
        ctaLabel: "View microdermabrasion →",
      },
      {
        placeholder: "IV glutathione<br>image 16:10",
        title: "IV Glutathione Therapy",
        body: "Intravenous antioxidant therapy administered under medical supervision as part of a personalised treatment plan. The course, dosage and frequency are determined based on individual needs and clinical assessment.",
        ctaHref: `${BASE}/services/skin-rejuvenation-karur`,
        ctaLabel: "View IV glutathione →",
      },
      {
        placeholder: "Skin boosters, PDRN & exosomes<br>image 16:10",
        title: "Skin Boosters, PDRN & Exosomes",
        body: "Regenerative injectables that hydrate from within the dermis and support tissue repair. PDRN and exosome-based boosters restore skin quality, elasticity and glow in skin that has lost its bounce.",
        ctaHref: `${BASE}/services/skin-rejuvenation-karur`,
        ctaLabel: "View skin boosters →",
      },
      {
        placeholder: "Dr. Platon cold plasma<br>image 16:10",
        title: "Dr. Platon Cold Plasma Therapy",
        body: "Needle-free cold plasma technology that delivers a controlled micro-thermal effect to tighten, resurface and refresh the skin without cuts or injections. Used around the eyes, mouth and neck.",
        ctaHref: `${BASE}/services/skin-rejuvenation-karur`,
        ctaLabel: "View Dr. Platon →",
      },
    ],
  },
  why: {
    eyebrow: "Why Karur Trusts Dr. Kavitha",
    h2: "Glow is a result.<br>It deserves an assessed approach.",
    lede:
      "A dermatology-led approach to skin rejuvenation, where every treatment is thoughtfully selected based on your skin's needs and long-term goals.",
    items: [
      {
        title: "Skin-type assessment first",
        text: "Your skin type, hydration levels, pigmentation, tone and sun exposure history are assessed before a rejuvenation treatment is recommended. This allows the treatment protocol to be tailored to your skin's specific condition and concerns.",
      },
      {
        title: "Maintenance, not a one-time fix",
        text: "Rejuvenation treatments here are planned as an ongoing rhythm suited to how your skin responds, not sold as a single procedure that permanently resolves dullness or uneven tone.",
      },
      {
        title: "Built for Tamil Nadu's climate",
        text: "Sun exposure, humidity and pigmentation-prone skin are considered at every step. Peel strength, laser fluence and product choice are adjusted for skin that lives under this sun year-round.",
      },
      {
        title: "Doctor performs every procedure",
        text: "Every laser toning session, IV glutathione infusion, skin booster injection and Dr. Platon session is personally administered by Dr. Kavitha. All medical procedures are performed under her direct supervision and clinical care.",
      },
      {
        title: "Least invasive option that works",
        text: "Rejuvenation does not require the most intensive treatment available. Dr. Kavitha starts with the least invasive option that will genuinely deliver results, and escalates only where the skin needs it.",
      },
      {
        title: "Standardised photography at every visit",
        text: "Standardised progress photographs are taken at each follow-up using consistent lighting, angles and positioning. These images help objectively document changes in skin tone, texture and overall appearance over time.",
      },
      {
        title: "Full treatment spectrum available",
        text: "From HydraFacial and chemical peels through to laser toning, regenerative boosters and cold plasma therapy, the complete rejuvenation and glow pathway is available at this one clinic in Karur.",
      },
      {
        title: "Darker skin type experience",
        text: "Fitzpatrick IV to VI skin types require careful laser and peel selection to avoid triggering post-inflammatory pigmentation. Dr. Kavitha has extensive experience treating South Indian skin types safely and effectively.",
      },
      {
        title: "3,500+ verified Google reviews",
        text: "The most-reviewed skin clinic in Karur district with a 4.9 average. Patients from Trichy, Namakkal, Erode and Dindigul attend this clinic specifically because word of mouth across Tamil Nadu is that strong.",
      },
    ],
    stats: [
      { value: "6+", label: "Treatments available" },
      { value: "8", label: "Rejuvenation treatments" },
      { value: "4.9", label: "Google rating" },
      { value: "100%", label: "Doctor-performed sessions" },
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
      "Skin rejuvenation is often treated as a single facial or a one-time glow session, but Dr. Kavitha approaches it as an ongoing relationship with your skin. Most patients arrive after cycling through generic facials and over-the-counter brightening products that offered results for a few days at most.",
      "Her approach starts with a proper skin assessment, skin type, sun exposure pattern, hydration level and any underlying pigmentation. From there she builds a maintenance rhythm, combining in-clinic treatments such as HydraFacial, laser toning or skin boosters with a realistic schedule for return visits, so improvement holds rather than fading between sessions.",
      "All in-clinic procedures — laser toning, IV glutathione infusions, skin booster and PDRN injections, and Dr. Platon sessions, are performed by Dr. Kavitha personally.",
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
          "My skin used to look tired and uneven no matter how many products I tried. Dr. Kavitha explained it was years of sun exposure, not just dullness. A few sessions of laser toning and HydraFacial later, people keep asking what I have changed.",
        name: "Priyanka S.",
        meta: "Google review · Karur",
      },
      {
        quote:
          "I went in wanting a one-time glow facial before a family function and left with an actual skincare plan. She was honest that a single session would not hold for long and set up a proper maintenance schedule instead.",
        name: "Selvakumar R.",
        meta: "Google review · Trichy",
      },
      {
        quote:
          "The IV glutathione and skin booster combination she recommended made a real difference to my skin's texture, not just brightness. She reviewed my progress photos at every visit so I could actually see the change.",
        name: "Abinaya M.",
        meta: "Google review · Erode",
      },
    ],
    allHref:
      "https://www.google.com/maps/place/Skin+Trust+Hospital/@10.961598,78.0767411,15z/data=!4m5!3m4!1s0x0:0x62678fb45b2ac308!8m2!3d10.961598!4d78.0767411",
    allLabel: "Read all 3,500+ reviews on Google",
  },
  faq: {
    eyebrow: "Common questions",
    h2: "Before you book",
    items: [
      {
        question: "What is the difference between skin rejuvenation and anti-ageing treatment?",
        answer:
          "Skin rejuvenation focuses on restoring tone, texture, hydration and glow, addressing dullness, mild pigmentation and surface texture rather than deep lines or volume loss. Anti-ageing treatments target wrinkles, sagging and loss of facial volume. Many patients need elements of both, and Dr. Kavitha will tell you honestly which category your concern falls into.",
      },
      {
        question: "How often should I get a HydraFacial or Hydra Touch session?",
        answer:
          "Most patients maintain results with a session every four to six weeks, though this depends on your skin type, oil production and how your skin responds to Tamil Nadu's humidity. Dr. Kavitha sets a realistic maintenance interval at your first visit itself.",
      },
      {
        question: "Is laser toning permanent, and how many sessions are needed?",
        answer:
          "Laser toning gradually breaks down pigment and evens out tone, but it does not prevent new pigmentation from sun exposure or hormonal factors. Most patients need six to eight initial sessions, followed by occasional maintenance sessions. Daily sunscreen use is essential to protect the results.",
      },
      {
        question: "Is IV glutathione therapy safe?",
        answer:
          "When administered under medical supervision with the correct dosage and frequency, IV glutathione is generally safe. Dr. Kavitha reviews your health history before starting any course and monitors you through the treatment. It is not offered as an unsupervised walk-in service at this clinic.",
      },
      {
        question: "What are skin boosters, PDRN and exosomes, and how are they different?",
        answer:
          "Skin boosters are injectable hyaluronic acid-based treatments that hydrate the deeper layers of skin. PDRN (polynucleotide) injections support tissue repair and collagen activity. Exosome-based treatments deliver growth-factor signals to accelerate skin recovery and quality. Dr. Kavitha selects one, or a combination, based on what your skin actually needs.",
      },
      {
        question: "Is Dr. Platon cold plasma therapy painful? What is the downtime?",
        answer:
          "Most patients feel mild warming or tingling rather than pain, and topical numbing can be used if needed. Small superficial micro-crusts may appear at the treated area for a few days, fading on their own without significant downtime.",
      },
      {
        question: "Are chemical peels and microdermabrasion safe for Indian skin?",
        answer:
          "Yes, when the peel strength and technique are matched to your skin type. Aggressive peels or overly deep microdermabrasion on darker Fitzpatrick skin types can trigger pigmentation rather than reduce it. Dr. Kavitha selects a brightening and maintenance-focused protocol appropriate for South Indian skin, rather than one fixed strength for every patient.",
      },
      {
        question: "How soon will I see visible glow or tone improvement?",
        answer:
          "HydraFacial and microdermabrasion show immediate surface glow after a single session, though this fades without a maintenance rhythm. Laser toning, skin boosters and IV glutathione build progressively over several sessions, with visible tone and texture change usually apparent four to six weeks into a course.",
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
        href: "https://www.google.com/maps/place/Skin+Trust+Hospital/@10.961598,78.0767411,15z/data=!4m5!3m4!1s0x0:0x62678fb45b2ac308!8m2!3d10.961598!4d78.0767411",
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
    h2: "Start with skin that's actually assessed.",
    lede:
      "A first consultation covers your skin type, current concerns, sun exposure pattern and a realistic maintenance plan. No packages are sold at this visit.",
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
      { category: "Aesthetics", label: "Anti-Ageing", href: `${BASE}/services/anti-ageing-treatment-karur` },
      { category: "Surgery", label: "Dermato Surgery", href: `${BASE}/services/dermato-surgery-karur` },
    ],
  },
};