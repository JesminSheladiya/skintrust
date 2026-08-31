const waLink =
  "https://wa.me/910000000000?text=Hi%2C%20I%27d%20like%20to%20book%20an%20anti-ageing%20consultation%20at%20Skin%20Trust.";

import { SITE_BASE, BASE } from "../site.js";
import { getHeader, getFooter } from "../layout.js";

export default {
  slug: "anti-ageing-treatment-karur",
  displayName: "Anti-Ageing & Lifting",
  summary:
    "From conservative-dose Botox and dermal fillers to thread lifts, HIFU, Apollo Quattro, MNRF tightening and PDRN therapy, Dr. Kavitha offers natural anti-ageing and lifting treatments at Skin Trust, Karur.",
  meta: {
    title: "Anti-Ageing & Lifting in Karur | Skin Trust - Dr. Kavitha",
    description:
      "Anti-ageing and lifting treatments in Karur by Dr. Kavitha, MD Dermatology. Botox, Dermal Fillers, Thread Lifts, HIFU, Apollo Quattro, MNRF Tightening, PDRN Therapy, Skin Boosters, Under-Eye Rejuvenation. 3,500+ reviews. Book today.",
    keywords:
      "anti ageing treatment karur, botox karur, dermal fillers karur, thread lift karur, hifu karur, apollo quattro karur, mnrf tightening karur, pdrn therapy karur, under eye treatment karur",
    canonical: `${SITE_BASE}/services/anti-ageing-treatment-karur`,
    ogTitle: "Anti-Ageing & Lifting in Karur | Skin Trust - Dr. Kavitha",
    ogDescription:
      "Anti-ageing and lifting treatments in Karur by Dr. Kavitha, MD Dermatology. Botox, Dermal Fillers, Thread Lifts, HIFU, Apollo Quattro, MNRF Tightening, PDRN Therapy, Skin Boosters, Under-Eye Rejuvenation. Book today.",
    ogUrl: `${SITE_BASE}/services/anti-ageing-treatment-karur`,
  },
  headCss: `${BASE}/assets/css/anti-ageing-lifting.css`,
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
          name: "Anti-Ageing & Lifting Treatments",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Botox (Wrinkle Relaxation) in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Dermal Fillers in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Thread Lifts in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "HIFU in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Apollo Quattro in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "MNRF Tightening in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "PDRN Therapy in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Skin Boosters in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Under-Eye Rejuvenation in Karur" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Will Botox make my face look frozen or unnatural?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not when dosed conservatively. Dr. Kavitha plans Botox around how your face naturally moves, softening dynamic lines like forehead creases and crow's feet while preserving expression. The goal is for people to notice you look rested, not that you have had a procedure.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between Botox and dermal fillers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Botox relaxes the muscle movement that causes dynamic wrinkles, such as forehead lines and crow's feet. Dermal fillers add volume to areas that have lost it with age, such as cheeks, temples and under-eyes. Many patients benefit from a combination, planned according to what your face specifically needs.",
            },
          },
          {
            "@type": "Question",
            name: "How long do thread lift and HIFU results last?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Thread lift results typically last twelve to eighteen months as the threads stimulate collagen before dissolving. HIFU results build over two to three months and can last up to a year, depending on skin quality and ageing rate. Dr. Kavitha discusses a realistic timeline for your skin at consultation.",
            },
          },
          {
            "@type": "Question",
            name: "Is HIFU or Apollo Quattro painful? What is the downtime?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most patients feel warmth or mild discomfort during treatment, manageable with topical numbing where needed. There is little to no downtime, and most people resume normal activity the same day, with results developing gradually over the following weeks and months.",
            },
          },
          {
            "@type": "Question",
            name: "At what age should I start anti-ageing treatment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There is no fixed age. Some patients begin conservative, preventive treatment in their late twenties or early thirties to maintain skin quality, while others start later to address established volume loss or laxity. Dr. Kavitha assesses your skin's specific signs of ageing rather than recommending treatment by age alone.",
            },
          },
          {
            "@type": "Question",
            name: "What is MNRF tightening used for in anti-ageing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MNRF (Microneedling Radiofrequency) delivers fractional RF energy into the deeper dermis to stimulate collagen remodelling. In an anti-ageing context, it is used for mild sagging, texture and early laxity, often alongside other lifting treatments.",
            },
          },
          {
            "@type": "Question",
            name: "Are PDRN therapy and skin boosters the same thing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. PDRN (polynucleotide) injections support tissue repair and collagen activity, while skin boosters are hyaluronic acid-based treatments focused on deep hydration. Both improve skin quality, and Dr. Kavitha may recommend one or a combination depending on your skin's needs.",
            },
          },
          {
            "@type": "Question",
            name: "How do you treat under-eye ageing specifically?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The under-eye area often shows fine lines, dullness and mild hollowing earlier than the rest of the face. Dr. Kavitha combines PDRN injections, targeted peels and Dermapen microneedling as needed, chosen based on which concern, volume, tone or texture, is most prominent for you.",
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
    eyebrow: "Anti-Ageing & Lifting · Karur",
    h1: "Look rested, <em>not visibly treated.</em>",
    lede:
      "Dr. Kavitha's approach to anti-ageing favours conservative dosing, natural facial movement and energy-based lifting technologies that tighten and refresh without surgery or downtime. Every plan is built around how your face moves and ages individually, not a fixed formula.",
    ctaHref: "#book",
    ctaLabel: "Book a consultation",
    figureText: "Facial assessment<br>at Skin Trust<br>(3:4 portrait)",
    image: `${BASE}/assets/images/treatments/treatment-banner/anti-ageing-treatment-karur.png`,
    imageAlt: "Anti-Ageing & Lifting treatment banner at Skin Trust Karur",
    badge: {
      stars: "★★★★★",
      num: "4.9",
      labelHtml: "<em>3,500+</em> Google reviews",
    },
  },
  strip: [
    { b: "7+", label: "Treatments available" },
    { b: "Conservative", label: "Dosing philosophy" },
    { b: "Doctor", label: "Performs every session" },
    { b: "Karur", label: "Established clinic" },
  ],
  results: {
    eyebrow: "Patient results",
    h2: "Before &amp; after, by treatment",
    lede:
      "Real patient skin progress from two key treatments at Skin Trust. All images published with written patient consent, photographed under identical clinic lighting.",
    // Tabs removed as requested (same as hair-restoration) — single consolidated tab with only 3 image-updated cards. Content as provided (RF card as given), only beforeSrc/afterSrc added.
    tabs: [
      {
        id: "results",
        label: "Results",
        cards: [
          {
            afterNote: "Month 2",
            ariaLabel: "Early jawline laxity, thread lift and HIFU, 2 months",
            title: "Early jawline laxity",
            body: "Female, 44. Early jawline laxity and mid-face volume loss addressed with a non-surgical thread lift and focused ultrasound lifting. Visible contour lift by month two.",
            tags: ["Thread Lift", "HIFU", "Jawline Contour"],
            beforeSrc: `${BASE}/assets/images/anti-ageing-lifting/results/early-jawline-laxity-before.jpg`,
            afterSrc: `${BASE}/assets/images/anti-ageing-lifting/results/early-jawline-laxity-after.jpg`,
            beforeAlt: "Early jawline laxity — Before — Rajasekar N., 52 (Virtue Aesthetic Clinic, Anti-Aging)",
            afterAlt: "Early jawline laxity — After — Rajasekar N., 52 (Virtue Aesthetic Clinic, Anti-Aging)",
          },
          {
            afterNote: "Month 3",
            ariaLabel: "Skin laxity and textural ageing, MNRF tightening and PDRN therapy, 3 months",
            title: "Skin laxity and textural ageing",
            body: "Male, 47. Skin laxity and textural ageing improved with microneedling radiofrequency tightening combined with PDRN regenerative therapy. Firmer, more even skin quality by month three.",
            tags: ["MNRF Tightening", "PDRN Therapy", "Skin Quality"],
            beforeSrc: `${BASE}/assets/images/anti-ageing-lifting/results/skin-laxity-textural-ageing-before.jpg`,
            afterSrc: `${BASE}/assets/images/anti-ageing-lifting/results/skin-laxity-textural-ageing-after.jpg`,
            beforeAlt: "Skin laxity and textural ageing — Before — Chitra P., 48 (Virtue Aesthetic Clinic, HIFU RF MNRF)",
            afterAlt: "Skin laxity and textural ageing — After — Chitra P., 48 (Virtue Aesthetic Clinic, HIFU RF MNRF)",
          },
          {
            afterNote: "4 Sessions",
            ariaLabel: "RF Skin Tightening Face Neck Umamaheswari T 46 before after",
            title: "RF Skin Tightening",
            body: "Female, 46. Moderate skin laxity across the cheeks and neck improved after four RF skin-tightening sessions. Firmer skin and better jawline definition achieved while maintaining a natural appearance.",
            tags: ["RF Skin Tightening", "Face + Neck"],
            beforeSrc: `${BASE}/assets/images/anti-ageing-lifting/results/rf-skin-tightening-before.jpg`,
            afterSrc: `${BASE}/assets/images/anti-ageing-lifting/results/rf-skin-tightening-after.jpg`,
            beforeAlt: "RF Skin Tightening — Before — Umamaheswari T., 46 (Virtue Aesthetic Clinic, Skin Tightening)",
            afterAlt: "RF Skin Tightening — After — Umamaheswari T., 46 (Virtue Aesthetic Clinic, Skin Tightening)",
          },
          // DRAFT (hidden) — Botox (no offline image, skipped as per tabs-removed rule)
          // {
          //   afterNote: "Week 2",
          //   ariaLabel: "Dynamic forehead lines and crow's feet, Botox, 2 weeks",
          //   title: "Dynamic lines softened",
          //   body: "Female, 38. Dynamic forehead lines and crow's feet softened with conservative-dose botulinum toxin. Natural expression preserved, with visible smoothing by week two.",
          //   tags: ["Botox", "Wrinkle Relaxation", "Natural Movement"],
          // },
        ],
      },
      // DRAFT (hidden) — previous tab structure (now consolidated into single tab above)
      // {
      //   id: "botox",
      //   label: "Botox (Wrinkle Relaxation)",
      //   cards: [{ afterNote: "Week 2", title: "Dynamic lines softened", body: "Female, 38..." }],
      // },
      // {
      //   id: "thread-lift-hifu",
      //   label: "Thread Lift & HIFU",
      //   cards: [{ afterNote: "Month 2", title: "Early jawline laxity", body: "Female, 44..." }],
      // },
      // {
      //   id: "mnrf-pdrn",
      //   label: "MNRF Tightening & PDRN",
      //   cards: [{ afterNote: "Month 3", title: "Skin laxity and textural ageing", body: "Male, 47..." }],
      // },
    ],
    disclaimer:
      "Results vary by individual and depend on skin type, baseline laxity, volume loss and treatment compliance. All photographs are of real Skin Trust patients, published with written consent. These are not a guarantee of outcome.",
  },
  treatments: {
    eyebrow: "Anti-ageing treatments",
    h2: "All treatments,<br>one clinic",
    lede:
      "Every treatment is selected based on your individual pattern of ageing, volume loss, pigmentation, texture and skin laxity, allowing the protocol to be tailored to your specific needs.",
    cards: [
      {
        placeholder: "Botox<br>image 16:10",
        title: "Botox (Wrinkle Relaxation)",
        body: "Botulinum toxin treatment targets dynamic lines, including forehead lines, frown lines and crow's feet. Dosage and injection sites are determined by assessing facial muscle movement and anatomy, with the aim of achieving a balanced, natural-looking result.",
        ctaHref: `${BASE}/services/botox-karur`,
        ctaLabel: "View Botox →",
      },
      {
        placeholder: "Dermal fillers<br>image 16:10",
        title: "Dermal Fillers (Volume Restoration)",
        body: "Hyaluronic acid-based fillers used to restore volume lost with age in the cheeks, temples, under-eyes and lips. Placement is planned to maintain facial proportion and natural contour.",
        ctaHref: `${BASE}/services/dermal-fillers-karur`,
        ctaLabel: "View dermal fillers →",
      },
      {
        placeholder: "Thread lift<br>image 16:10",
        title: "Thread Lifts (Non-Surgical Face Lift)",
        body: "Absorbable threads inserted beneath the skin to lift sagging tissue along the jawline, cheeks and brows, and to stimulate collagen production as they dissolve. A non-surgical option for mild to moderate laxity with minimal downtime.",
        ctaHref: `${BASE}/services/thread-lift-karur`,
        ctaLabel: "View thread lifts →",
      },
      {
        placeholder: "HIFU<br>image 16:10",
        title: "HIFU (Focused Ultrasound Lifting)",
        body: "High-intensity focused ultrasound delivers energy to the deeper support layers of the skin, triggering a natural lifting and tightening response over the following months without cuts or injections.",
        ctaHref: `${BASE}/services/hifu-karur`,
        ctaLabel: "View HIFU →",
      },
      {
        placeholder: "Apollo Quattro<br>image 16:10",
        title: "Apollo Quattro",
        body: "A multi-technology energy-based platform combining radiofrequency and ultrasound modalities to firm, tighten and refine skin texture and contour, tailored to the treatment area and degree of laxity.",
        ctaHref: `${BASE}/services/apollo-quattro-karur`,
        ctaLabel: "View Apollo Quattro →",
      },
      {
        placeholder: "MNRF tightening<br>image 16:10",
        title: "MNRF Tightening",
        body: "Microneedling Radiofrequency delivers fractional RF energy into the deeper dermis to stimulate collagen remodelling, improving skin firmness and mild sagging alongside texture and pore concerns.",
        ctaHref: `${BASE}/services/mnrf-tightening-karur`,
        ctaLabel: "View MNRF →",
      },
      {
        placeholder: "PDRN therapy<br>image 16:10",
        title: "PDRN Therapy",
        body: "Polynucleotide injections that support tissue repair and collagen activity, used to improve skin quality, elasticity and resilience as part of a broader anti-ageing and lifting plan.",
        ctaHref: `${BASE}/services/pdrn-therapy-karur`,
        ctaLabel: "View PDRN therapy →",
      },
      {
        placeholder: "Skin boosters<br>image 16:10",
        title: "Skin Boosters",
        body: "Injectable hyaluronic acid treatments that hydrate the deeper layers of the skin, improving elasticity and softness in skin that has started to lose its bounce with age.",
        ctaHref: `${BASE}/services/skin-boosters-karur`,
        ctaLabel: "View skin boosters →",
      },
      {
        placeholder: "Under-eye rejuvenation<br>image 16:10",
        title: "Under-Eye Rejuvenation (PDRN, Peels, Dermapen)",
        body: "A combination protocol using PDRN injections, targeted peels and Dermapen microneedling to address under-eye dullness, fine lines and early hollowing, one of the first areas to show visible ageing.",
        ctaHref: `${BASE}/services/under-eye-treatment-karur`,
        ctaLabel: "View under-eye treatment →",
      },
    ],
  },
  why: {
    eyebrow: "Why Karur Trusts Dr. Kavitha",
    h2: "Designed to soften signs of ageing while preserving natural expression.",
    lede:
      "Anti-ageing treatment works best when it is planned around your face specifically. Here is how that assessment and planning happens at Skin Trust.",
    items: [
      {
        title: "Facial movement assessed first",
        text: "Dr. Kavitha studies how your face moves, where lines form dynamically versus at rest, before planning any injectable or energy-based treatment. Dosing and technique are matched to your natural expression.",
      },
      {
        title: "Conservative dosing philosophy",
        text: "Anti-ageing treatments are planned to soften visible signs of ageing while preserving natural facial expression and proportions. Dr. Kavitha takes a measured approach, beginning conservatively and reviewing the response before determining whether any further treatment is appropriate.",
      },
      {
        title: "Non-surgical lifting technologies",
        text: "Thread lifts, HIFU, Apollo Quattro and MNRF tightening offer genuine lifting and firming effects without surgery or significant downtime, suited to early and moderate signs of laxity.",
      },
      {
        title: "Doctor performs every procedure",
        text: "Every Botox injection, filler placement, thread lift, energy-based session and PDRN therapy at this clinic is administered by Dr. Kavitha personally.",
      },
      {
        title: "Treatment sequencing that respects your face",
        text: "Volume, tone, texture and laxity are each assessed separately, and treatments are sequenced so each one supports the next rather than being layered on all at once.",
      },
      {
        title: "Standardised photography at every visit",
        text: "Standardised progress photographs are taken at each follow-up using consistent lighting, angles and positioning. These images help objectively document changes in skin tone, texture and overall appearance over time.",
      },
      {
        title: "Full anti-ageing spectrum available",
        text: "From injectables and non-surgical lifting through to regenerative therapies and under-eye rejuvenation, the complete anti-ageing pathway is available at this one clinic in Karur.",
      },
      {
        title: "Fitzpatrick-aware energy settings",
        text: "Energy-based devices such as HIFU, Apollo Quattro and MNRF require careful calibration for darker Fitzpatrick skin types. Dr. Kavitha adjusts energy and depth settings specifically for South Indian skin.",
      },
      {
        title: "3,500+ verified Google reviews",
        text: "The most-reviewed skin clinic in Karur district with a 4.9 average. Patients from Trichy, Namakkal, Erode and Dindigul attend this clinic specifically because word of mouth across Tamil Nadu is that strong.",
      },
    ],
    stats: [
      { value: "7+", label: "Treatments available" },
      { value: "9", label: "Anti-ageing treatments" },
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
      "Anti-ageing treatment is often associated with dramatic change, but Dr. Kavitha's approach favours subtlety, treatments planned to leave patients looking rested and refreshed rather than visibly altered.",
      "Her assessment begins with how a face moves and ages individually: where volume has been lost, where skin has begun to lose firmness, and where fine lines have set in. From there she sequences a plan combining conservative-dose injectables, non-surgical lifting technologies and regenerative therapies suited to that specific pattern of ageing.",
      "All in-clinic procedures, Botox and filler injections, thread lifts, HIFU, Apollo Quattro and MNRF sessions, and PDRN therapy are performed by Dr. Kavitha personally.",
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
          "I was nervous Botox would leave me looking frozen. Dr. Kavitha explained her approach is to keep expression natural, and that is exactly what happened. People just say I look well-rested.",
        name: "Meenakshi V.",
        meta: "Google review · Karur",
      },
      {
        quote:
          "The thread lift and HIFU combination she recommended gave my jawline a visible lift without any surgery or real downtime. She was clear about what to expect at each stage.",
        name: "Ashwin K.",
        meta: "Google review · Trichy",
      },
      {
        quote:
          "My under-eye area was the first thing I noticed ageing. The PDRN and Dermapen combination she suggested made a real difference to the dullness and fine lines over a few months.",
        name: "Revathi N.",
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
        question: "Will Botox make my face look frozen or unnatural?",
        answer:
          "Not when dosed conservatively. Dr. Kavitha plans Botox around how your face naturally moves, softening dynamic lines like forehead creases and crow's feet while preserving expression. The goal is for people to notice you look rested, not that you have had a procedure.",
      },
      {
        question: "What is the difference between Botox and dermal fillers?",
        answer:
          "Botox relaxes the muscle movement that causes dynamic wrinkles, such as forehead lines and crow's feet. Dermal fillers add volume to areas that have lost it with age, such as cheeks, temples and under-eyes. Many patients benefit from a combination, planned according to what your face specifically needs.",
      },
      {
        question: "How long do thread lift and HIFU results last?",
        answer:
          "Thread lift results typically last twelve to eighteen months as the threads stimulate collagen before dissolving. HIFU results build over two to three months and can last up to a year, depending on skin quality and ageing rate. Dr. Kavitha discusses a realistic timeline for your skin at consultation.",
      },
      {
        question: "Is HIFU or Apollo Quattro painful? What is the downtime?",
        answer:
          "Most patients feel warmth or mild discomfort during treatment, manageable with topical numbing where needed. There is little to no downtime, and most people resume normal activity the same day, with results developing gradually over the following weeks and months.",
      },
      {
        question: "At what age should I start anti-ageing treatment?",
        answer:
          "There is no fixed age. Some patients begin conservative, preventive treatment in their late twenties or early thirties to maintain skin quality, while others start later to address established volume loss or laxity. Dr. Kavitha assesses your skin's specific signs of ageing rather than recommending treatment by age alone.",
      },
      {
        question: "What is MNRF tightening used for in anti-ageing?",
        answer:
          "MNRF (Microneedling Radiofrequency) delivers fractional RF energy into the deeper dermis to stimulate collagen remodelling. In an anti-ageing context, it is used for mild sagging, texture and early laxity, often alongside other lifting treatments.",
      },
      {
        question: "Are PDRN therapy and skin boosters the same thing?",
        answer:
          "No. PDRN (polynucleotide) injections support tissue repair and collagen activity, while skin boosters are hyaluronic acid-based treatments focused on deep hydration. Both improve skin quality, and Dr. Kavitha may recommend one or a combination depending on your skin's needs.",
      },
      {
        question: "How do you treat under-eye ageing specifically?",
        answer:
          "The under-eye area often shows fine lines, dullness and mild hollowing earlier than the rest of the face. Dr. Kavitha combines PDRN injections, targeted peels and Dermapen microneedling as needed, chosen based on which concern, volume, tone or texture, is most prominent for you.",
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
    h2: "Start with a face that's assessed,<br>not guessed.",
    lede:
      "A first consultation covers your areas of concern, how your face moves and ages, and a sequenced plan matched to that. No packages are sold at this visit.",
    buttons: [
      { label: "Call +91 00000 00000", href: "tel:+910000000000", class: "btn btn-gold" },
      { label: "WhatsApp to book", href: waLink, target: "_blank", class: "btn btn-ghost-light" },
    ],
  },
  internalLinks: {
    eyebrow: "Explore the clinic",
    h2: "Other treatments at Skin Trust",
    cards: [
      { category: "Skin", label: "Acne Treatment", href: `${BASE}/services/acne-treatment-karur` },
      { category: "Hair", label: "Hair Restoration", href: `${BASE}/services/hair-restoration` },
      { category: "Skin", label: "Skin Rejuvenation & Glow", href: `${BASE}/services/skin-rejuvenation-karur` },
      { category: "Surgery", label: "Dermato Surgery", href: `${BASE}/services/dermato-surgery-karur` },
    ],
  },
};
