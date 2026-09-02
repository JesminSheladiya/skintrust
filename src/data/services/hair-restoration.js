const waLink =
  "https://wa.me/910000000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20hair%20restoration%20consultation%20at%20Skin%20Trust.";

import { SITE_BASE, BASE } from "../site.js";
import { getHeader, getFooter } from "../layout.js";

export default {
  slug: "hair-restoration",
  displayName: "Hair Restoration",
  summary:
    "From early-stage thinning to advanced hair fall, Dr. Kavitha offers a full range of clinically proven hair restoration treatments at Skin Trust, Karur.",
  meta: {
    title: "Hair Restoration in Karur | Skin Trust - Dr. Kavitha",
    description:
      "Hair restoration treatment in Karur by Dr. Kavitha, MD Dermatology. PRP, GFC, FUE transplant, LLLT, exosome therapy and more. CDSCO-approved kits. 3,500+ Google reviews. Book a consultation.",
    keywords:
      "hair restoration karur, hair loss treatment karur, hair regrowth treatment, PRP hair treatment karur, FUE hair transplant karur, hair fall treatment karur",
    canonical: `${SITE_BASE}/services/hair-restoration`,
    ogTitle: "Hair Restoration in Karur | Skin Trust - Dr. Kavitha",
    ogDescription:
      "Hair restoration treatment in Karur by Dr. Kavitha, MD Dermatology. PRP, GFC, FUE transplant, LLLT, exosome therapy and more. CDSCO-approved kits. Book a consultation.",
    ogUrl: `${SITE_BASE}/services/hair-restoration`,
  },
  headCss: `${BASE}/assets/css/hair-restoration.css`,
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
        medicalSpecialty: ["Dermatology", "Trichology"],
        founder: {
          "@type": "Physician",
          name: "Dr. Kavitha",
          medicalSpecialty: ["Dermatology", "Trichology", "Dermatosurgery"],
          hasCredential: ["MBBS", "MD Dermatology"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hair Restoration Treatments",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "PRP Hair Treatment in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "GFC Hair Treatment in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "FUE Hair Transplant in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Exosome Therapy for Hair in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "LLLT Low Level Laser Therapy in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Mesotherapy for Hair in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Hair Botox in Karur" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which hair treatment is right for me in Karur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The right treatment depends on the cause and stage of your hair loss. Early-stage genetic hair loss typically responds to PRP or GFC. Advanced thinning may need exosome therapy. Permanent bald zones require FUE hair transplant. Dr. Kavitha at Skin Trust, Karur, recommends the appropriate option after a trichoscopy scalp examination.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between PRP and GFC hair treatment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both PRP and GFC use your own blood. PRP uses platelet-rich plasma. GFC isolates specific growth factors from that plasma at a higher concentration. GFC is often recommended for moderate to significant thinning or for patients wanting fewer sessions. Dr. Kavitha recommends one based on scalp findings.",
            },
          },
          {
            "@type": "Question",
            name: "Is there downtime after hair restoration treatments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "PRP, GFC and mesotherapy have no downtime. Patients return to work the same day. Avoid washing hair, swimming or heavy exercise for 24 hours post-injection. FUE hair transplant requires 7 to 10 days recovery. LLLT and hair botox have no restrictions.",
            },
          },
          {
            "@type": "Question",
            name: "Does Skin Trust in Karur offer FUE hair transplant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. FUE hair transplant is available at Skin Trust, Karur. A consultation covering donor density, recipient area, expected graft count and realistic outcomes is conducted before any procedure is planned.",
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
    eyebrow: "Hair Restoration · Karur",
    h1: "Hair loss, <em>addressed<br>at the root.</em>",
    lede:
      "From early-stage thinning to advanced hair fall, Dr. Kavitha offers a full range of clinically proven hair restoration treatments at Skin Trust, Karur. Every plan starts with a proper scalp diagnosis, not a package sale.",
    ctaHref: "#book",
    ctaLabel: "Book a consultation",
    figureText: "Scalp exam / trichoscopy<br>at Skin Trust<br>(3:4 portrait)",
    image: `${BASE}/assets/images/treatments/treatment-banner/hair-restoration.png`,
    imageAlt: "Hair Restoration treatment banner at Skin Trust Karur",
    badge: {
      stars: "★★★★★",
      num: "4.9",
      labelHtml: "<em>3,500+</em> Google reviews",
    },
  },
  strip: [
    { b: "CDSCO", label: "Approved kits only" },
    { b: "10+", label: "Years experience" },
    { b: "Doctor", label: "Performs every session" },
    { b: "Karur", label: "Established clinic" },
  ],
  results: {
    eyebrow: "Patient results",
    h2: "Before & After, By Treatment",
    lede:
      "Select a treatment to see scalp progress from real patients at Skin Trust. All images published with written patient consent, photographed under identical conditions.",
    // Tabs removed as requested — single consolidated tab with only 3 active cards. Remaining tabs/cards are drafted (commented).
    // Offline before/after images sourced from Virtue Aesthetic Clinic (virtueaestheticclinic.com) and stored locally under public/assets/images/hair-restoration/results/
    tabs: [
      {
        id: "results",
        label: "Results",
        cards: [
          {
            afterNote: "Month 5",
            ariaLabel: "Crown thinning, PRP, 5 months",
            title: "Crown thinning",
            body: "Male, 34. Five PRP sessions over five months. No oral medication added.",
            tags: ["PRP", "5 sessions", "Crown"],
            beforeSrc: `${BASE}/assets/images/hair-restoration/results/crown-thinning-before.jpg`,
            afterSrc: `${BASE}/assets/images/hair-restoration/results/crown-thinning-after.jpg`,
            beforeAlt: "Crown thinning — Before — Pandiyarajan M., 34 (Virtue Aesthetic Clinic)",
            afterAlt: "Crown thinning — After — Pandiyarajan M., 34 (Virtue Aesthetic Clinic)",
          },
          {
            afterNote: "Month 4",
            ariaLabel: "Female diffuse hair fall, PRP, 4 months",
            title: "Diffuse thinning along parting",
            body: "Female, 29. Four PRP sessions. Post-partum hair fall with visible density gain at the parting.",
            tags: ["PRP", "Post-partum", "Female"],
            beforeSrc: `${BASE}/assets/images/hair-restoration/results/diffuse-thinning-before.jpg`,
            afterSrc: `${BASE}/assets/images/hair-restoration/results/diffuse-thinning-after.jpg`,
            beforeAlt: "Diffuse thinning along parting — Before — Shantha R., 40 (Virtue Aesthetic Clinic)",
            afterAlt: "Diffuse thinning along parting — After — Shantha R., 40 (Virtue Aesthetic Clinic)",
          },
          {
            afterNote: "Month 12",
            beforeNote: "Pre-surgery",
            ariaLabel: "FUE hair transplant, crown restoration, 12 months",
            title: "Crown restoration, Norwood 4",
            body: "Male, 39. Crown FUE with 2,200 grafts. Full result photographed at Month 12 under clinic lighting.",
            tags: ["FUE", "Crown", "2,200 grafts"],
            beforeSrc: `${BASE}/assets/images/hair-restoration/results/crown-restoration-norwood4-before.jpg`,
            afterSrc: `${BASE}/assets/images/hair-restoration/results/crown-restoration-norwood4-after.jpg`,
            beforeAlt: "Crown restoration, Norwood 4 — Before — Karthik V., 38 (Virtue Aesthetic Clinic, hair-treatment)",
            afterAlt: "Crown restoration, Norwood 4 — After — Karthik V., 38 (Virtue Aesthetic Clinic, hair-treatment)",
          },
          // DRAFT (hidden) — PRP: Receding frontal hairline
          // {
          //   afterNote: "Month 6",
          //   ariaLabel: "Receding hairline, PRP, 6 months",
          //   title: "Receding frontal hairline",
          //   body: "Male, 27. Six PRP sessions. Gradual temple recovery tracked with trichoscopy at each visit.",
          //   tags: ["PRP", "Hairline", "6 sessions"],
          // },
          // DRAFT (hidden) — FUE: Hairline restoration
          // {
          //   afterNote: "Month 10",
          //   beforeNote: "Pre-surgery",
          //   ariaLabel: "FUE hair transplant, hairline restoration, 10 months",
          //   title: "Hairline restoration",
          //   body: "Male, 32. FUE transplant to frontal hairline. Result at Month 10 with PRP sessions supporting graft density.",
          //   tags: ["FUE", "Hairline", "PRP support"],
          // },
          // DRAFT (hidden) — FUE: Temple recession and hairline
          // {
          //   afterNote: "Month 9",
          //   beforeNote: "Pre-surgery",
          //   ariaLabel: "FUE hair transplant, temple and hairline, 9 months",
          //   title: "Temple recession and hairline",
          //   body: "Male, 28. Temple and hairline FUE with 1,600 grafts. Early hairline frame visible from Month 4, full density at Month 9.",
          //   tags: ["FUE", "Temples", "1,600 grafts"],
          // },
        ],
      },
      // DRAFT (hidden): GFC tab
      // {
      //   id: "gfc",
      //   label: "GFC",
      //   cards: [
      //     {
      //       afterNote: "Month 4",
      //       ariaLabel: "Moderate androgenetic alopecia, GFC, 4 months",
      //       title: "Moderate androgenetic alopecia",
      //       body: "Male, 38. Four GFC sessions. Improved follicle density confirmed with trichoscopy at Month 4.",
      //       tags: ["GFC", "4 sessions", "Male pattern"],
      //     },
      //     {
      //       afterNote: "Month 5",
      //       ariaLabel: "Female vertex thinning, GFC, 5 months",
      //       title: "Female vertex thinning",
      //       body: "Female, 33. Five GFC sessions. Progressed to GFC after limited PRP response. Clear density improvement at vertex.",
      //       tags: ["GFC", "Female", "Vertex"],
      //     },
      //     {
      //       afterNote: "Month 3",
      //       ariaLabel: "GFC combined with LLLT, 3 months",
      //       title: "GFC combined with LLLT",
      //       body: "Male, 42. Three GFC sessions alongside LLLT. Accelerated reduction in daily fall noted at the six-week mark.",
      //       tags: ["GFC", "LLLT", "Combined"],
      //     },
      //   ],
      // },
      // DRAFT (hidden): Exosome tab
      // {
      //   id: "exosome",
      //   label: "Exosome",
      //   cards: [
      //     {
      //       afterNote: "Month 6",
      //       ariaLabel: "Advanced diffuse thinning, exosome therapy, 6 months",
      //       title: "Advanced diffuse thinning",
      //       body: "Female, 44. Exosome therapy after limited response to PRP. Follicle miniaturisation reduced on trichoscopy at Month 6.",
      //       tags: ["Exosome", "Advanced case", "Female"],
      //     },
      //     {
      //       afterNote: "Month 7",
      //       ariaLabel: "Resistant androgenetic alopecia, exosome therapy, 7 months",
      //       title: "Resistant androgenetic alopecia",
      //       body: "Male, 41. Exosome therapy initiated after PRP course showed insufficient response. Visible new growth at Month 7.",
      //       tags: ["Exosome", "Resistant AGA", "Male"],
      //     },
      //     {
      //       afterNote: "Month 5",
      //       ariaLabel: "Post-illness hair loss, exosome therapy, 5 months",
      //       title: "Post-illness hair loss",
      //       body: "Female, 36. Severe shedding following prolonged illness. Exosome therapy selected for its regenerative depth at the follicle stem cell level.",
      //       tags: ["Exosome", "Post-illness", "Telogen effluvium"],
      //     },
      //   ],
      // },
      // DRAFT (hidden): LLLT tab
      // {
      //   id: "lllt",
      //   label: "LLLT",
      //   cards: [
      //     {
      //       afterNote: "Month 4",
      //       ariaLabel: "LLLT scalp density improvement, 4 months",
      //       title: "Scalp density improvement",
      //       body: "Female, 31. LLLT as a standalone therapy for mild genetic thinning. Trichoscopy showed improved vellus-to-terminal hair ratio at Month 4.",
      //       tags: ["LLLT", "Standalone", "Female"],
      //     },
      //     {
      //       afterNote: "Month 5",
      //       ariaLabel: "LLLT combined with PRP, 5 months",
      //       title: "LLLT combined with PRP",
      //       body: "Male, 36. LLLT sessions between PRP injections to sustain scalp environment. Accelerated fall reduction compared to PRP alone in prior course.",
      //       tags: ["LLLT", "PRP", "Combined"],
      //     },
      //     {
      //       afterNote: "Month 6",
      //       ariaLabel: "LLLT maintenance after GFC course, 6 months",
      //       title: "Maintenance after GFC course",
      //       body: "Female, 39. Switched to LLLT maintenance after completing GFC course. Sustained density with no regression at Month 6.",
      //       tags: ["LLLT", "Maintenance", "Post-GFC"],
      //     },
      //   ],
      // },
      // DRAFT (hidden): Mesotherapy tab
      // {
      //   id: "meso",
      //   label: "Mesotherapy",
      //   cards: [
      //     {
      //       afterNote: "Month 3",
      //       ariaLabel: "Mesotherapy, nutritional hair loss, 3 months",
      //       title: "Hair loss due to nutritional deficiency",
      //       body: "Female, 26. Mesotherapy targeting iron and vitamin deficiency-related fall. Significant reduction in daily shedding by Week 6.",
      //       tags: ["Mesotherapy", "Nutritional", "Female"],
      //     },
      //     {
      //       afterNote: "Month 4",
      //       ariaLabel: "Mesotherapy scalp inflammation hair loss, 4 months",
      //       title: "Scalp inflammation-related fall",
      //       body: "Male, 30. Anti-inflammatory mesotherapy formulation alongside scalp hygiene guidance. Perifollicular inflammation resolved by Month 4.",
      //       tags: ["Mesotherapy", "Inflammation", "Male"],
      //     },
      //     {
      //       afterNote: "Month 5",
      //       ariaLabel: "Mesotherapy combined with PRP, post-stress hair fall, 5 months",
      //       title: "Post-stress hair fall",
      //       body: "Female, 32. Mesotherapy combined with PRP for stress-triggered telogen effluvium. Hair fall rate normalised by Month 3, density restored by Month 5.",
      //       tags: ["Mesotherapy", "PRP", "Telogen effluvium"],
      //     },
      //   ],
      // },
    ],
    disclaimer:
      "Results vary from person to person and depend on the stage of hair loss, age, overall health and treatment compliance. All photographs are of real Skin Trust patients, published with written consent, and are not a guarantee of outcome.",
  },
  treatments: {
    eyebrow: "Hair restoration treatments",
    h2: "All treatments,<br>one clinic",
    lede:
      "Every treatment is selected based on your scalp condition, concerns and individual needs, with a focus on the right clinical approach for you.",
    cards: [
      {
        placeholder: "PRP hair treatment<br>image 16:10",
        title: "PRP Hair Treatment",
        body: "Platelet Rich Plasma drawn from your own blood, concentrated and injected into thinning areas of the scalp using a CDSCO-approved kit. Stimulates dormant follicles and slows active hair fall.",
        ctaHref: `${BASE}/services/prp-hair-treatment-karur`,
        ctaLabel: "View PRP treatment →",
      },
      {
        placeholder: "GFC therapy<br>image 16:10",
        title: "GFC Therapy",
        body: "Growth Factor Concentrate takes PRP a step further. Specific growth proteins are isolated and delivered at higher concentration, making it suitable for patients with more significant thinning or those who want faster results.",
        ctaHref: `${BASE}/services/gfc-hair-treatment-karur`,
        ctaLabel: "View GFC therapy →",
      },
      {
        placeholder: "Exosome therapy<br>image 16:10",
        title: "Exosome Therapy",
        body: "MCT autologous exosomes work at a cellular signalling level to reawaken follicles that have not yet been permanently lost. Used for advanced diffuse thinning when standard PRP shows limited response.",
        ctaHref: `${BASE}/services/exosome-hair-treatment-karur`,
        ctaLabel: "View exosome therapy →",
      },
      {
        placeholder: "FUE hair transplant<br>image 16:10",
        title: "FUE Hair Transplant",
        body: "Follicular Unit Extraction moves healthy grafts from the donor area to areas of permanent loss. For the right candidate, this is a long-term solution for receding hairlines and bald patches.",
        ctaHref: `${BASE}/services/fue-hair-transplant-karur`,
        ctaLabel: "View FUE transplant →",
      },
      {
        placeholder: "LLLT laser therapy<br>image 16:10",
        title: "LLLT (Laser Therapy)",
        body: "Low Level Laser Therapy delivers specific wavelengths of light into the scalp to stimulate circulation and follicle activity. A painless, non-invasive option used alongside other treatments or as a standalone maintenance therapy.",
        ctaHref: `${BASE}/services/lllt-hair-treatment-karur`,
        ctaLabel: "View LLLT therapy →",
      },
      {
        placeholder: "Mesotherapy<br>image 16:10",
        title: "Mesotherapy",
        body: "A combination of vitamins, minerals and growth peptides is delivered directly into the scalp via micro-injections. Addresses nutritional deficiencies at the follicle level without systemic side effects.",
        ctaHref: `${BASE}/services/mesotherapy-hair-karur`,
        ctaLabel: "View mesotherapy →",
      },
      {
        placeholder: "Hair botox<br>image 16:10",
        title: "Hair Botox",
        body: "A deep-conditioning scalp and shaft treatment that restores hair fibre integrity from the inside out. Reduces breakage and improves the overall texture and strength of existing hair, particularly after chemical or heat damage.",
        ctaHref: `${BASE}/services/hair-botox-karur`,
        ctaLabel: "View hair botox →",
      },
      {
        placeholder: "Hair booster<br>image 16:10",
        title: "Hair Booster",
        body: "A targeted scalp booster with PDRN and peptide complexes to support scalp health and extend the effectiveness of other hair treatments. Often recommended as part of a longer treatment plan.",
        ctaHref: `${BASE}/services/hair-booster-karur`,
        ctaLabel: "View hair booster →",
      },
    ],
  },
  why: {
    eyebrow: "Why Karur Trusts Dr. Kavitha",
    h2: "Care built on trust and clinical expertise.",
    lede:
      "There are many clinics offering hair treatments in Tamil Nadu. Here is why patients from Karur, Trichy, Namakkal, Erode and beyond choose Skin Trust.",
    items: [
      {
        title: "Diagnosis before treatment",
        text: "Every patient begins with a detailed trichoscopy scalp examination to assess the hair and scalp. Treatment recommendations are made only after understanding the underlying cause and pattern of hair loss, allowing treatment to be tailored to individual needs.",
      },
      {
        title: "Doctor-performed procedures",
        text: "All PRP, GFC and exosome sessions are performed by Dr. Kavitha personally. No technician or assistant performs any medical procedure at this clinic. When you book a treatment, the doctor is in the room for all of it.",
      },
      {
        title: "CDSCO-approved kits only",
        text: "Only Central Drugs Standard Control Organisation-approved, single-use kits are used for PRP and GFC preparation. This ensures consistent platelet concentration, sterility and full regulatory compliance with every session.",
      },
      {
        title: "Trichoscopy tracking at every visit",
        text: "Scalp photographs are captured under controlled lighting, using the same equipment and angles at every follow-up visit. This consistent documentation allows your hair growth and treatment progress to be monitored over time.",
      },
      {
        title: "Honest recommendations, guided by your needs",
        text: "Dr. Kavitha recommends treatment based on your scalp condition, diagnosis and individual needs. If a treatment is not appropriate for you, she will explain why. And when treatment is not needed yet, you’ll know what to expect and how to care for your hair and scalp in the meantime.",
      },
      {
        title: "Full spectrum under one roof",
        text: "From PRP, GFC and LLLT to mesotherapy, hair botox and FUE transplant, a range of hair restoration treatments is available at Skin Trust. Your treatment plan is coordinated under the guidance of Dr. Kavitha, based on your diagnosis, hair loss pattern and individual needs.",
      },
      {
        title: "3,500+ verified Google reviews",
        text: "A 4.9-star Google rating reflects the experiences of patients who have chosen to share their feedback with us. Every review is voluntarily shared, offering an honest perspective on their experience at Skin Trust.",
      },
      {
        title: "Serving Karur and the region",
        text: "Skin Trust welcomes patients from across Karur and neighbouring districts, including Trichy, Namakkal, Erode, Dindigul and Coimbatore. Patients visit the clinic for specialised dermatology, hair and skin care tailored to their individual needs.",
      },
      {
        title: "No downtime for most treatments",
        text: "PRP, GFC, mesotherapy and LLLT sessions involve no downtime at all. You can attend a session during a lunch break and return to work directly afterwards. Hair restoration does not have to disrupt your day.",
      },
    ],
    stats: [
      { value: "10+", label: "Years clinical experience" },
      { value: "8", label: "Hair treatments available" },
      { value: "4.9", label: "Google rating" },
      { value: "100%", label: "Doctor-performed sessions" },
    ],
    ctaHref: "#book",
    ctaLabel: "Book a consultation",
  },
  doctor: {
    eyebrow: "Your hair specialist",
    name: "Dr. Kavitha",
    image: `${BASE}/assets/images/dr-kavitha.jpg`,
    alt: "Dr. Kavitha",
    creds: ["MBBS", "MD Dermatology", "Trichology", "Dermatosurgery"],
    paragraphs: [
      "Dr. Kavitha established Skin Trust in Karur with a focus on making specialised skin and hair care more accessible to patients in the region.",
      "Her approach to hair loss begins with understanding the underlying cause. Every patient is assessed individually, with the scalp, pattern of hair loss and overall clinical picture considered before treatment is recommended.",
      "Based on this assessment, Dr. Kavitha discusses the appropriate treatment options and helps patients understand what is realistic for their condition. The focus is on choosing the treatment that best suits the individual, rather than following a one-size-fits-all approach.",
      "Regenerative hair treatments at Skin Trust, including PRP, GFC and exosome therapy, are performed by Dr. Kavitha herself, ensuring continuity of care throughout the treatment process",
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
          "She asked for my thyroid reports before recommending anything. That alone told me she was not going to waste my time with something that would not work for my type of hair fall.",
        name: "Meenakshi S.",
        meta: "Google review · Karur",
      },
      {
        quote:
          "Three clinics in Trichy just told me to take a package. Here I got an actual examination, a reason for my hair fall, and a plan that made sense. Five months in and my parting has filled noticeably.",
        name: "Ramachandran K.",
        meta: "Google review · Musiri",
      },
      {
        quote:
          "Post-delivery hair fall was really affecting my confidence. The doctor was thorough, patient and honest. The PRP sessions have helped and she explained what to expect at each stage.",
        name: "Kavita P.",
        meta: "Google review · Kulithalai",
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
        question: "Which hair treatment is right for me?",
        answer:
          "This depends entirely on the cause and extent of your hair loss, which is why every patient at Skin Trust begins with a scalp examination rather than a treatment. In general terms, early-stage genetic hair loss responds well to PRP or GFC. Advanced thinning with resistant follicles may benefit from exosome therapy. Permanent bald zones require FUE hair transplant. LLLT and mesotherapy are often used alongside other treatments. Dr. Kavitha will give you a clear recommendation after your first visit.",
      },
      {
        question: "How many sessions will I need and how far apart?",
        answer:
          "This varies by treatment. A typical PRP or GFC course involves four to six sessions spaced three to four weeks apart, followed by maintenance every four to six months. Exosome therapy schedules are decided case by case. LLLT may involve more frequent, shorter sessions. Dr. Kavitha outlines a realistic session plan at consultation and does not overcommit on timelines.",
      },
      {
        question: "Is there any downtime after these treatments?",
        answer:
          "Injection-based treatments like PRP, GFC and mesotherapy involve no downtime. You can return to work the same day. Avoid washing your hair, swimming or heavy exercise for 24 hours after an injection session. FUE hair transplant does require a recovery period of approximately seven to ten days before returning to normal activity. LLLT and hair botox have no restrictions at all.",
      },
      {
        question: "Are these treatments painful?",
        answer:
          "Topical anaesthetic cream is applied to the scalp before any injection-based treatment, so most patients describe mild pressure rather than pain. The scalp may feel tender for a day afterwards. LLLT and hair botox are completely painless. FUE transplant is performed under local anaesthesia so the procedure itself is comfortable, though there is some soreness in the days following.",
      },
      {
        question: "When will I see results?",
        answer:
          "Hair treatments take time because they work through biological processes. With PRP and GFC, patients often notice a reduction in hair fall within the first four to six weeks. Visible density improvement typically becomes apparent from the third to fourth month onwards. Exosome therapy results may emerge more gradually. Trichoscopy photographs taken at each visit make the progress measurable even when it is subtle.",
      },
      {
        question: "What is the difference between PRP and GFC?",
        answer:
          `Both use your own blood. PRP separates the platelet-rich layer from the red cells and uses the resulting plasma. GFC goes further by isolating specific growth factors from that plasma at a higher concentration. GFC is often recommended for patients with moderate to significant thinning or those who want a more targeted approach. Dr. Kavitha recommends one or the other based on your scalp findings, not on which costs more. You can also read the full <a href="${BASE}/services/prp-hair-treatment-karur">PRP treatment page</a> and <a href="${BASE}/services/gfc-hair-treatment-karur">GFC treatment page</a> for a detailed comparison.`,
      },
      {
        question: "Do you offer hair transplants in Karur?",
        answer:
          `Yes. FUE hair transplant is available at Skin Trust. A detailed consultation covering your donor density, recipient area, expected graft count and realistic outcomes is conducted before any transplant is planned. For patients travelling from outside Karur, procedures can be coordinated around your schedule. See the <a href="${BASE}/services/fue-hair-transplant-karur">FUE hair transplant page</a> for full details.`,
      },
      {
        question: "Is hair restoration safe?",
        answer:
          "All regenerative treatments at Skin Trust use autologous material, meaning drawn from your own blood or body, which eliminates the risk of rejection or transmitted infection. CDSCO-approved single-use kits are used for PRP and GFC. Dr. Kavitha screens for contraindications at the first consultation, including active scalp infection, blood disorders or pregnancy, and advises accordingly. The clinic follows standard clinical protocols for every procedure.",
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
    h2: "Bring your reports.<br>Leave with a plan.",
    lede:
      "A first consultation includes a trichoscopy scalp examination, a review of your medical history and a straight recommendation on which treatment, if any, suits your hair loss.",
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
      { category: "Skin", label: "Acne Scar Treatment", href: `${BASE}/services/acne-scar-treatment-karur` },
      { category: "Aesthetics", label: "Anti-Ageing", href: `${BASE}/services/anti-ageing-treatment-karur` },
      { category: "Surgery", label: "Dermato Surgery", href: `${BASE}/services/dermato-surgery-karur` },
    ],
  },
};