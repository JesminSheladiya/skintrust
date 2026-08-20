const waLink =
  "https://wa.me/910000000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20laser%20treatment%20consultation%20at%20Skin%20Trust.";

import { SITE_BASE, BASE } from "../site.js";

export default {
  slug: "laser-treatments-karur",
  displayName: "Laser Treatments",
  summary:
    "Medical-grade laser treatments in Karur performed personally by Dr. Kavitha. Laser hair removal, laser toning, carbon laser peel, tattoo removal and fractional CO2 resurfacing — every setting calibrated for Indian skin.",
  meta: {
    title: "Laser Treatments in Karur | Skin Trust - Dr. Kavitha",
    description:
      "Medical-grade laser treatments in Karur performed by Dr. Kavitha, MD Dermatology. Laser Hair Removal, Laser Toning, Carbon Laser Peel, Tattoo Removal, Fractional CO2 Resurfacing — every setting calibrated for Indian skin. 3,500+ reviews. Book today.",
    keywords:
      "laser treatment karur, laser hair removal karur, laser toning karur, carbon laser peel karur, tattoo removal karur, fractional co2 karur, dermatologist laser karur",
    canonical: `${SITE_BASE}/services/laser-treatments-karur`,
    ogTitle: "Laser Treatments in Karur | Skin Trust - Dr. Kavitha",
    ogDescription:
      "Medical-grade laser treatments in Karur performed by Dr. Kavitha, MD Dermatology. Laser Hair Removal, Laser Toning, Carbon Laser Peel, Tattoo Removal, Fractional CO2 Resurfacing. Book today.",
    ogUrl: `${SITE_BASE}/services/laser-treatments-karur`,
  },
  headCss: `${BASE}/assets/css/laser-treatments.css`,
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
          name: "Laser Treatments",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Laser Hair Removal in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Laser Toning for Pigmentation in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Carbon Laser Peel in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Tattoo Removal in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Fractional CO2 Resurfacing in Karur" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is laser treatment safe for Indian or darker skin tones?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, when the wavelength and settings are matched to your Fitzpatrick skin type. Using incorrect settings on darker skin raises the risk of post-inflammatory pigmentation. Dr. Kavitha calibrates every laser session to your specific skin tone rather than using one fixed setting for all patients.",
            },
          },
          {
            "@type": "Question",
            name: "Does the doctor perform the laser sessions personally?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Every laser procedure at this clinic like hair removal, toning, carbon peel, tattoo removal and fractional resurfacing is administered by Dr. Kavitha.",
            },
          },
          {
            "@type": "Question",
            name: "How many sessions of laser hair removal are needed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most patients need six to eight sessions spaced four to six weeks apart, since hair growth cycles mean not all follicles are active at the same time. The exact number depends on hair density, treatment area and hormonal factors, assessed at your first visit.",
            },
          },
          {
            "@type": "Question",
            name: "Can laser toning fully remove pigmentation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Laser toning reduces existing pigment and evens out tone gradually across sessions, but it does not prevent new pigmentation from sun exposure or hormonal changes. Most patients need six to eight sessions along with daily sunscreen to maintain results.",
            },
          },
          {
            "@type": "Question",
            name: "Is tattoo removal possible on all skin tones?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Q-switched Nd:YAG technology can treat a range of skin tones, though settings, ink colour and depth all affect how many sessions are needed and how the skin responds. Dr. Kavitha assesses each tattoo individually before planning a session count.",
            },
          },
          {
            "@type": "Question",
            name: "What is the downtime after Fractional CO2 resurfacing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Downtime depends on the treatment depth. Superficial settings may cause redness for a few days, while deeper resurfacing can involve a week or more of visible healing. Dr. Kavitha plans the depth around your concern and discusses realistic downtime beforehand.",
            },
          },
          {
            "@type": "Question",
            name: "What is a carbon laser peel used for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It combines a carbon layer with laser energy to lift oil, dead skin and surface debris, refining pores and improving tone and texture with no downtime. It is often used as a maintenance treatment or ahead of an event.",
            },
          },
          {
            "@type": "Question",
            name: "What aftercare is needed after a laser session?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sun protection is essential after any laser treatment, particularly in Tamil Nadu's climate. Dr. Kavitha provides a specific aftercare and sunscreen protocol after every session to protect results and reduce pigmentation risk.",
            },
          },
        ],
      },
    ],
  },
  waLink,
  header: {
    topbarAddress: "Karur, Tamil Nadu — opp. Kamaatchi Amman Temple, Madavilagam",
    topbarPhone: "+91 00000 00000",
    topbarPhoneHref: "tel:+910000000000",
    topbarHours: "Mon–Sat 10:00–20:00 · Sun by appointment",
    navLinks: [
      { label: "Hair", href: `${BASE}/services/hair-restoration` },
      { label: "Laser Treatments", href: `${BASE}/services/laser-treatments-karur`, active: true },
      { label: "Anti-Ageing", href: `${BASE}/services/anti-ageing-treatment-karur` },
      { label: "Rejuvenation", href: `${BASE}/services/skin-rejuvenation-karur` },
      { label: "Surgery", href: `${BASE}/services/dermato-surgery-karur` },
    ],
    ctaLabel: "Book appointment",
    ctaHref: "#book",
  },
  footer: {
    address:
      "No. 30, Chairman Ramanujam Street,<br/>Madavilagam, Karur — 639001, Tamil Nadu.",
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    columns: [
      {
        heading: "Laser Treatments",
        links: [
          { label: "Laser Hair Removal", href: `${BASE}/services/laser-treatments-karur` },
          { label: "Laser Toning for Pigmentation", href: `${BASE}/services/laser-treatments-karur` },
          { label: "Carbon Laser Peel", href: `${BASE}/services/laser-treatments-karur` },
          { label: "Tattoo Removal", href: `${BASE}/services/laser-treatments-karur` },
          { label: "Fractional CO2 Resurfacing", href: `${BASE}/services/laser-treatments-karur` },
        ],
      },
      {
        heading: "Other Treatments",
        links: [
          { label: "Hair Restoration", href: `${BASE}/services/hair-restoration` },
          { label: "Anti-Ageing & Lifting", href: `${BASE}/services/anti-ageing-treatment-karur` },
          { label: "Skin Rejuvenation & Glow", href: `${BASE}/services/skin-rejuvenation-karur` },
          { label: "Dermato Surgery", href: `${BASE}/services/dermato-surgery-karur` },
          { label: "All Treatments", href: `${BASE}/services/` },
        ],
      },
      {
        heading: "Clinic",
        links: [
          { label: "About Dr. Kavitha", href: `${BASE}/about` },
          { label: "All Treatments", href: `${BASE}/services/` },
          { label: "Home", href: `${BASE}/` },
        ],
      },
    ],
  },
  hero: {
    eyebrow: "Laser Treatments · Karur",
    h1: "Laser treatment, <em>calibrated to your skin.</em>",
    lede:
      "Medical-grade lasers, operated by Dr. Kavitha personally, with every setting calibrated to Indian skin types to minimise pigmentation risk. From hair removal to pigmentation, tattoo ink and resurfacing, each session is planned around the concern and the skin in front of her.",
    ctaHref: "#book",
    ctaLabel: "Book a consultation",
    figureText: "Laser session<br>at Skin Trust<br>(3:4 portrait)",
    badge: {
      stars: "★★★★★",
      num: "4.9",
      labelHtml: "<em>3,500+</em> Google reviews",
    },
  },
  strip: [
    { b: "5", label: "Laser treatments available" },
    { b: "Doctor-operated", label: "Every laser session" },
    { b: "Calibrated", label: "For Indian skin types" },
    { b: "Karur", label: "Established clinic" },
  ],
  results: {
    eyebrow: "Patient results",
    h2: "Before &amp; after, by treatment",
    lede:
      "Real patient results from three key laser treatments at Skin Trust. All images published with written patient consent, photographed under identical clinic lighting.",
    tabs: [
      {
        id: "laser-toning",
        label: "Laser Toning for Pigmentation",
        cards: [
          {
            afterNote: "Session 6",
            ariaLabel: "Sun-induced pigmentation and uneven tone, laser toning, 6 sessions",
            title: "Sun-induced pigmentation",
            body: "Female, 33. Sun-induced pigmentation and uneven tone addressed with low-fluence Q-switched toning, calibrated to skin type. Visible brightening and tone correction by session six.",
            tags: ["Laser Toning", "Pigmentation", "Tone"],
          },
        ],
      },
      {
        id: "fractional-co2",
        label: "Fractional CO2 Resurfacing",
        cards: [
          {
            afterNote: "Month 3",
            ariaLabel: "Textural scarring and surface irregularities, fractional CO2 resurfacing, 3 months",
            title: "Textural scarring",
            body: "Male, 41. Textural scarring and surface irregularities improved with fractional ablative CO2 resurfacing. Smoother texture and refined pores visible at month three.",
            tags: ["Fractional CO2", "Resurfacing", "Texture"],
          },
        ],
      },
      {
        id: "tattoo-removal",
        label: "Tattoo Removal (Q-Switched Nd:YAG)",
        cards: [
          {
            afterNote: "Planned series",
            ariaLabel: "Small decorative tattoo, Q-switched Nd:YAG removal, planned series",
            title: "Decorative tattoo clearance",
            body: "Female, 29. A small decorative tattoo progressively cleared over a planned series of Q-switched Nd:YAG sessions, with settings adjusted for ink colour and skin tone at each visit.",
            tags: ["Tattoo Removal", "Q-Switched Nd:YAG", "Ink Clearance"],
          },
        ],
      },
    ],
    disclaimer:
      "Results vary by individual and depend on skin type, treatment area, ink or pigment depth and treatment compliance. All photographs are of real Skin Trust patients, published with written consent. These are not a guarantee of outcome.",
  },
  treatments: {
    eyebrow: "Laser treatments",
    h2: "All laser treatments,<br>one clinic",
    lede:
      "Every laser treatment is selected and calibrated according to your skin type, condition and the specific concern being treated. Parameters are adjusted to ensure the treatment is appropriate for your individual skin needs.",
    cards: [
      {
        placeholder: "Laser hair removal<br>image 16:10",
        title: "Laser Hair Removal (Diode — All Body Areas)",
        body: "Diode laser hair reduction suited to Indian skin and hair types, performed across facial and body areas with settings adjusted for hair density, coarseness and skin tone at each site.",
        ctaHref: `${BASE}/services/laser-treatments-karur`,
        ctaLabel: "View laser hair removal →",
      },
      {
        placeholder: "Laser toning<br>image 16:10",
        title: "Laser Toning for Pigmentation",
        body: "Low-fluence toning sessions that gradually break down excess pigment and even out tone, calibrated to your Fitzpatrick skin type to lower the risk of triggering further pigmentation.",
        ctaHref: `${BASE}/services/laser-treatments-karur`,
        ctaLabel: "View laser toning →",
      },
      {
        placeholder: "Carbon laser peel<br>image 16:10",
        title: "Carbon Laser Peel",
        body: "A laser-assisted exfoliation and pore-refining treatment using a carbon layer to target oil, dead skin and surface debris, improving texture and tone with no downtime.",
        ctaHref: `${BASE}/services/laser-treatments-karur`,
        ctaLabel: "View carbon laser peel →",
      },
      {
        placeholder: "Tattoo removal<br>image 16:10",
        title: "Tattoo Removal (Q-Switched Nd:YAG)",
        body: "Q-switched Nd:YAG laser sessions that break down tattoo ink particles for gradual clearance, with settings adjusted by ink colour, depth and surrounding skin tone.",
        ctaHref: `${BASE}/services/laser-treatments-karur`,
        ctaLabel: "View tattoo removal →",
      },
      {
        placeholder: "Fractional CO2<br>image 16:10",
        title: "Fractional CO2 Resurfacing",
        body: "Fractional ablative CO2 laser used for deeper resurfacing, scarring, texture irregularities and general skin renewal, with depth and downtime planned according to the concern being treated.",
        ctaHref: `${BASE}/services/laser-treatments-karur`,
        ctaLabel: "View fractional CO2 →",
      },
    ],
  },
  why: {
    eyebrow: "Why Karur Trusts Dr. Kavitha",
    h2: "Laser treatment is first about safety, then about achieving the right results.",
    lede:
      "Laser energy interacts differently with every skin tone. Here is how that is assessed and managed at Skin Trust.",
    items: [
      {
        title: "Doctor performs every laser session",
        text: "Every laser procedure at this clinic, hair removal, toning, carbon peel, tattoo removal and fractional resurfacing is administered by Dr. Kavitha personally.",
      },
      {
        title: "Settings calibrated for Indian skin types",
        text: "Darker Fitzpatrick skin types carry a higher risk of post-inflammatory pigmentation when laser settings are not adjusted correctly. Dr. Kavitha calibrates fluence, wavelength and cooling to each patient's skin tone before any session begins.",
      },
      {
        title: "Medical-grade equipment",
        text: "All lasers used are certified medical-grade devices, maintained and operated within manufacturer safety parameters for each treatment type.",
      },
      {
        title: "Concern-specific wavelength selection",
        text: "Pigmentation, hair, tattoo ink and scarring each respond to different laser wavelengths. Dr. Kavitha selects the appropriate laser and parameters for the specific concern being treated.",
      },
      {
        title: "Patch testing where needed",
        text: "New patients and higher-risk skin types are patch tested before a full laser session, so the skin's response can be assessed safely first.",
      },
      {
        title: "Standardised photography at every visit",
        text: "Progress photographs are taken under identical lighting and angles at every follow-up, so results are tracked consistently across sessions.",
      },
      {
        title: "Full laser treatment spectrum available",
        text: "From hair removal and pigmentation toning through to tattoo removal and fractional resurfacing, the complete laser treatment pathway is available at this one clinic in Karur.",
      },
      {
        title: "Structured post-laser care",
        text: "Every laser session is followed by a specific aftercare and sun-protection protocol, since post-laser skin is more vulnerable to pigmentation in Tamil Nadu's sun and humidity.",
      },
      {
        title: "3,500+ verified Google reviews",
        text: "The most-reviewed skin clinic in Karur district with a 4.9 average. Patients from Trichy, Namakkal, Erode and Dindigul attend this clinic specifically because word of mouth across Tamil Nadu is that strong.",
      },
    ],
    stats: [
      { value: "5", label: "Laser treatments" },
      { value: "100%", label: "Doctor-operated sessions" },
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
      "Laser treatments carry real risk when settings are not matched to skin type, and Dr. Kavitha treats this as a safety question first, a results question second.",
      "Before any laser session, she assesses Fitzpatrick skin type and the specific concern being treated — hair, pigmentation, tattoo ink or scarring — and calibrates wavelength, fluence and cooling accordingly. A patch test is used for new patients and higher-risk skin before a full session proceeds.",
      "Every laser procedure at this clinic, from hair removal through to fractional CO2 resurfacing, is performed by Dr. Kavitha personally.",
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
          "I was worried about pigmentation from laser hair removal given my skin tone. Dr. Kavitha explained the settings would be adjusted specifically for me, and I have had no marks after six sessions.",
        name: "Kavya R.",
        meta: "Google review · Karur",
      },
      {
        quote:
          "The Q-switched laser toning cleared pigmentation I had been trying to fade for years. She started conservatively and increased intensity only once she saw how my skin responded.",
        name: "Manikandan S.",
        meta: "Google review · Trichy",
      },
      {
        quote:
          "I had an old tattoo I wanted removed and was unsure if it would work on my skin tone. Dr. Kavitha assessed it properly and started a session plan that has shown real fading already.",
        name: "Deepika T.",
        meta: "Google review · Namakkal",
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
        question: "Is laser treatment safe for Indian or darker skin tones?",
        answer:
          "Yes, when the wavelength and settings are matched to your Fitzpatrick skin type. Using incorrect settings on darker skin raises the risk of post-inflammatory pigmentation. Dr. Kavitha calibrates every laser session to your specific skin tone rather than using one fixed setting for all patients.",
      },
      {
        question: "Does the doctor perform the laser sessions personally?",
        answer:
          "Yes. Every laser procedure at this clinic like hair removal, toning, carbon peel, tattoo removal and fractional resurfacing is administered by Dr. Kavitha.",
      },
      {
        question: "How many sessions of laser hair removal are needed?",
        answer:
          "Most patients need six to eight sessions spaced four to six weeks apart, since hair growth cycles mean not all follicles are active at the same time. The exact number depends on hair density, treatment area and hormonal factors, assessed at your first visit.",
      },
      {
        question: "Can laser toning fully remove pigmentation?",
        answer:
          "Laser toning reduces existing pigment and evens out tone gradually across sessions, but it does not prevent new pigmentation from sun exposure or hormonal changes. Most patients need six to eight sessions along with daily sunscreen to maintain results.",
      },
      {
        question: "Is tattoo removal possible on all skin tones?",
        answer:
          "Q-switched Nd:YAG technology can treat a range of skin tones, though settings, ink colour and depth all affect how many sessions are needed and how the skin responds. Dr. Kavitha assesses each tattoo individually before planning a session count.",
      },
      {
        question: "What is the downtime after Fractional CO2 resurfacing?",
        answer:
          "Downtime depends on the treatment depth. Superficial settings may cause redness for a few days, while deeper resurfacing can involve a week or more of visible healing. Dr. Kavitha plans the depth around your concern and discusses realistic downtime beforehand.",
      },
      {
        question: "What is a carbon laser peel used for?",
        answer:
          "It combines a carbon layer with laser energy to lift oil, dead skin and surface debris, refining pores and improving tone and texture with no downtime. It is often used as a maintenance treatment or ahead of an event.",
      },
      {
        question: "What aftercare is needed after a laser session?",
        answer:
          "Sun protection is essential after any laser treatment, particularly in Tamil Nadu's climate. Dr. Kavitha provides a specific aftercare and sunscreen protocol after every session to protect results and reduce pigmentation risk.",
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
    h2: "Start with skin that's properly assessed.",
    lede:
      "A first consultation covers your skin type, the concern being treated and a realistic session plan. No packages are sold at this visit.",
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
      { category: "Skin", label: "Skin Rejuvenation & Glow", href: `${BASE}/services/skin-rejuvenation-karur` },
      { category: "Aesthetics", label: "Anti-Ageing & Lifting", href: `${BASE}/services/anti-ageing-treatment-karur` },
      { category: "Surgery", label: "Dermato Surgery", href: `${BASE}/services/dermato-surgery-karur` },
    ],
  },
};