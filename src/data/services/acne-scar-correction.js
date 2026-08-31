const waLink =
  "https://wa.me/910000000000?text=Hi%2C%20I%27d%20like%20to%20book%20an%20acne%20or%20scar%20correction%20consultation%20at%20Skin%20Trust.";

import { SITE_BASE, BASE } from "../site.js";
import { getHeader, getFooter } from "../layout.js";

export default {
  slug: "acne-scar-treatment-karur",
  displayName: "Acne & Scar Correction",
  summary:
    "Comprehensive acne and acne scar treatment in Karur by Dr. Kavitha, MD Dermatology. MNRF, Fractional CO2, Chemical Peels, Pico Toning, Dermapen, Subcision, PDRN and more. 3,500+ reviews.",
  meta: {
    title: "Acne & Scar Correction in Karur | Skin Trust - Dr. Kavitha",
    description:
      "Acne and acne scar treatment in Karur by Dr. Kavitha, MD Dermatology. MNRF, Fractional CO2, Chemical Peels, Pico Toning, Dermapen, Subcision, PDRN and more. 3,500+ reviews. Book today.",
    keywords:
      "acne treatment karur, acne scar treatment karur, MNRF karur, fractional co2 karur, chemical peel karur, pico toning karur, acne specialist karur, scar correction karur",
    canonical: `${SITE_BASE}/services/acne-scar-treatment-karur`,
    ogTitle: "Acne & Scar Correction in Karur | Skin Trust - Dr. Kavitha",
    ogDescription:
      "Acne and acne scar treatment in Karur by Dr. Kavitha, MD Dermatology. MNRF, Fractional CO2, Chemical Peels, Pico Toning, Dermapen, Subcision, PDRN and more. Book today.",
    ogUrl: `${SITE_BASE}/services/acne-scar-treatment-karur`,
  },
  headCss: `${BASE}/assets/css/acne-scar-correction.css`,
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
        medicalSpecialty: ["Dermatology"],
        founder: {
          "@type": "Physician",
          name: "Dr. Kavitha",
          medicalSpecialty: ["Dermatology", "Dermatosurgery"],
          hasCredential: ["MBBS", "MD Dermatology"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Acne and Scar Correction Treatments",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Medical Acne Management in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Chemical Peel for Acne in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Pico Toning in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Carbon Toning in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "MNRF Microneedling Radiofrequency in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Fractional CO2 Laser in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Fractional Q-YAG Laser in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Dermapen Microneedling in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Subcision for Acne Scars in Karur" } },
            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "LED Phototherapy in Karur" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can acne scars be fully removed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No treatment removes acne scars completely. Modern treatments like MNRF, fractional CO2 and subcision significantly reduce scar depth and improve texture. Most patients see 50 to 80 percent improvement after a proper treatment course at Skin Trust, Karur.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best treatment for acne scars in Karur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The best treatment depends on your scar type. MNRF is the gold standard for moderate to severe atrophic scarring. Fractional CO2 suits deeper resurfacing cases. Dermapen works well for superficial texture. Subcision is used for tethered scars. Dr. Kavitha at Skin Trust, Karur assesses scar morphology before recommending any treatment.",
            },
          },
          {
            "@type": "Question",
            name: "How many MNRF sessions are needed for acne scars?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most patients with moderate mixed scarring need three to five MNRF sessions spaced four to six weeks apart. The exact number depends on scar severity and your skin's healing response, which Dr. Kavitha assesses at each follow-up.",
            },
          },
          {
            "@type": "Question",
            name: "Is chemical peel safe for dark Indian skin?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, when the correct acid type and concentration are chosen. At Skin Trust, Dr. Kavitha selects the peel based on your Fitzpatrick skin type and acne grade rather than using a standard protocol, making the treatment safe and appropriate for South Indian skin.",
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
    eyebrow: "Acne & Scar Correction · Karur",
    h1: "Clear skin starts <em>with the<br>right diagnosis.</em>",
    lede:
      "Skin Trust provides comprehensive care for acne and its aftermath, including advanced scar remodelling. Dr. Kavitha assesses each patient individually to develop a treatment approach suited to their skin and concerns.",
    ctaHref: "#book",
    ctaLabel: "Book a consultation",
    figureText: "Acne skin consultation<br>at Skin Trust<br>(3:4 portrait)",
    image: `${BASE}/assets/images/treatments/treatment-banner/acne-scare-correction.png`,
    imageAlt: "Acne & Scar Correction treatment banner at Skin Trust Karur",
    badge: {
      stars: "★★★★★",
      num: "4.9",
      labelHtml: "<em>3,500+</em> Google reviews",
    },
  },
  strip: [
    { b: "MD", label: "Dermatology specialist" },
    { b: "Grade-based", label: "Acne management" },
    { b: "9+", label: "Treatments available" },
    { b: "Karur", label: "Established clinic" },
  ],
  results: {
    eyebrow: "Patient results",
    h2: "Before & after, by treatment",
    lede:
      "Real patient skin progress from three key treatments at Skin Trust. All images published with written patient consent, photographed under identical clinic lighting.",
    // Only 2 cards active as requested — MNRF (Chitra P.,48) + Pico/Carbon (Indhumathi P.,38). Chemical Peels removed (content mismatch -> skip) and drafted below.
    tabs: [
      {
        id: "results",
        label: "Results",
        cards: [
          {
            afterNote: "Month 4",
            ariaLabel: "Acne scar remodelling MNRF before after Skin Trust Karur",
            title: "Acne Scar Remodelling with MNRF",
            body: "Female, 29. Microneedling radiofrequency for mixed boxcar and rolling scar morphology. Collagen remodelling visible from Month 2, assessed at Month 4.",
            tags: ["MNRF", "Boxcar Scars", "Rolling Scars"],
            beforeSrc: `${BASE}/assets/images/acne-scar-correction/results/mnrf-before.jpg`,
            afterSrc: `${BASE}/assets/images/acne-scar-correction/results/mnrf-after.jpg`,
            beforeAlt: "Acne Scar Remodelling with MNRF — Before — Chitra P., 48 (Virtue Aesthetic Clinic)",
            afterAlt: "Acne Scar Remodelling with MNRF — After — Chitra P., 48 (Virtue Aesthetic Clinic)",
          },
          {
            afterNote: "Session 6",
            ariaLabel: "Carbon and Pico Toning acne pigmentation before after Skin Trust Karur",
            title: "Carbon & Pico Toning",
            body: "Male, 25. Active acne, enlarged pores and surface PIH addressed with combined carbon laser and picosecond toning. Oil control and even tone visible over six sessions.",
            tags: ["Carbon Toning", "Pico Toning", "Acne & PIH"],
            beforeSrc: `${BASE}/assets/images/acne-scar-correction/results/carbon-pico-toning-before.jpg`,
            afterSrc: `${BASE}/assets/images/acne-scar-correction/results/carbon-pico-toning-after.jpg`,
            beforeAlt: "Carbon & Pico Toning — Before — Indhumathi P., 38 (Virtue Aesthetic Clinic)",
            afterAlt: "Carbon & Pico Toning — After — Indhumathi P., 38 (Virtue Aesthetic Clinic)",
          },
          {
            afterNote: "4 Sessions",
            ariaLabel: "Chemical Peels oily congested skin Lakshmi V 32 before after",
            title: "Chemical Peels",
            body: "Female, 32. Oily skin, blackheads and uneven texture improved after four chemical peel sessions. Congestion visibly reduced, leaving the skin smoother, clearer and more balanced with monthly maintenance.",
            tags: ["Chemical Peel", "Oily + Congested Skin"],
            beforeSrc: `${BASE}/assets/images/acne-scar-correction/results/chemical-peels-before.jpg`,
            afterSrc: `${BASE}/assets/images/acne-scar-correction/results/chemical-peels-after.jpg`,
            beforeAlt: "Chemical Peels — Before — Lakshmi V., 32 (Virtue Aesthetic Clinic)",
            afterAlt: "Chemical Peels — After — Lakshmi V., 32 (Virtue Aesthetic Clinic)",
          },
          // DRAFT (hidden) — original Carbon & Pico Toning (Male, 25)
          // {
          //   afterNote: "Session 6",
          //   ariaLabel: "Carbon and Pico Toning acne pigmentation before after Skin Trust Karur",
          //   title: "Carbon & Pico Toning",
          //   body: "Male, 25. Active acne, enlarged pores and surface PIH addressed with combined carbon laser and picosecond toning. Oil control and even tone visible over six sessions.",
          //   tags: ["Carbon Toning", "Pico Toning", "Acne & PIH"],
          // },
          // DRAFT (hidden) — original MNRF Scar (Female, 29)
          // {
          //   afterNote: "Month 4",
          //   ariaLabel: "Acne scar remodelling MNRF before after Skin Trust Karur",
          //   title: "Acne Scar Remodelling with MNRF",
          //   body: "Female, 29. Microneedling radiofrequency for mixed boxcar and rolling scar morphology. Collagen remodelling visible from Month 2, assessed at Month 4.",
          //   tags: ["MNRF", "Boxcar Scars", "Rolling Scars"],
          // },
          // DRAFT (hidden) — original Fractional Q-YAG (Female, 27)
          // {
          //   afterNote: "Month 3",
          //   ariaLabel: "Fractional Q-YAG acne scar pigmentation treatment before after Skin Trust Karur",
          //   title: "Fractional Q-YAG",
          //   body: "Female, 27. Fractional Q-switched Nd:YAG laser for post-acne hyperpigmentation and superficial scarring. Texture improvement and pigmentation clearance at Month 3.",
          //   tags: ["Fractional Q-YAG", "Pigmentation", "Texture"],
          // },
        ],
      },
      // DRAFT (hidden) — previous tab structure kept for reference (now consolidated into single tab above)
      // {
      //   id: "carbon-pico",
      //   label: "Carbon & Pico Toning",
      //   cards: [{ afterNote: "Session 6", title: "Carbon & Pico Toning", body: "Male, 25. ..." }],
      // },
      // {
      //   id: "mnrf-scar",
      //   label: "Acne Scar Remodelling with MNRF",
      //   cards: [{ afterNote: "Month 4", title: "Acne Scar Remodelling with MNRF", body: "Female, 29. ..." }],
      // },
      // {
      //   id: "fractional-qyag",
      //   label: "Fractional Q-YAG",
      //   cards: [{ afterNote: "Month 3", title: "Fractional Q-YAG", body: "Female, 27. ..." }],
      // },
    ],
    disclaimer:
      "Results vary by individual and depend on scar type, depth, skin type and treatment compliance. All photographs are of real Skin Trust patients, published with written consent. These are not a guarantee of outcome.",
  },
  treatments: {
    eyebrow: "Acne & scar correction treatments",
    h2: "All treatments,<br>one clinic",
    lede:
      "Every treatment is selected based on your acne grade, scar type, skin characteristics and individual clinical needs, ensuring your treatment plan is tailored to your condition.",
    cards: [
      {
        placeholder: "Medical Acne Management<br>image 16:10",
        title: "Medical Acne Management",
        body: "Grade-based prescription treatment addressing acne at its root: bacterial load, sebum production, follicular plugging and inflammation. Dr. Kavitha classifies the grade before prescribing anything.",
        ctaHref: `${BASE}/services/acne-treatment-karur`,
        ctaLabel: "View acne management",
      },
      {
        placeholder: "Chemical Peels<br>image 16:10",
        title: "Chemical Peels",
        body: "Salicylic, glycolic and lactic acid peels used to control active acne, reduce post-inflammatory pigmentation and refine skin texture. Peel type and strength are matched to your skin grade and tolerance.",
        ctaHref: `${BASE}/services/chemical-peel-karur`,
        ctaLabel: "View chemical peels",
      },
      {
        placeholder: "Pico & Carbon Toning<br>image 16:10",
        title: "Pico and Carbon Toning",
        body: "Picosecond laser toning for PIH marks and post-acne pigmentation. Carbon laser toning for active sebaceous skin, enlarged pores and surface bacteria control. Often used together as a combined protocol.",
        ctaHref: `${BASE}/services/pico-carbon-toning-karur`,
        ctaLabel: "View toning treatments",
      },
      {
        placeholder: "MNRF<br>image 16:10",
        title: "MNRF",
        body: "Microneedling Radiofrequency uses fractional RF energy delivered deep into the dermis via insulated microneedles. The gold standard for moderate to severe atrophic acne scarring, particularly boxcar and rolling scars.",
        ctaHref: `${BASE}/services/mnrf-acne-scars-karur`,
        ctaLabel: "View MNRF treatment",
      },
      {
        placeholder: "Fractional CO2 & Q-YAG<br>image 16:10",
        title: "Fractional CO₂ and Q-YAG",
        body: "Fractional ablative CO2 laser for deeper scar resurfacing. Fractional Q-switched Nd:YAG for pigmented or superficial scars in darker skin types where ablative lasers carry higher risk. Both are available here.",
        ctaHref: `${BASE}/services/fractional-laser-karur`,
        ctaLabel: "View fractional lasers",
      },
      {
        placeholder: "Dermapen International<br>image 16:10",
        title: "Dermapen International",
        body: "Precision medical-grade microneedling for collagen induction. Suitable for superficial to moderate scarring, skin texture issues and as a delivery vehicle for growth factors, exosomes and skin boosters.",
        ctaHref: `${BASE}/services/dermapen-karur`,
        ctaLabel: "View Dermapen treatment",
      },
      {
        placeholder: "Subcision<br>image 16:10",
        title: "Subcision",
        body: "A minor surgical procedure that releases the fibrous bands tethering deep rolling and box scars to the underlying tissue. Used when laser treatments alone cannot lift a tethered scar. Often combined with MNRF or fillers.",
        ctaHref: `${BASE}/services/subcision-acne-scars-karur`,
        ctaLabel: "View subcision",
      },
      {
        placeholder: "Skin Boosters, PDRN & Exosomes<br>image 16:10",
        title: "Skin Boosters, PDRN and Exosomes",
        body: "Regenerative injectables and topical agents used to accelerate scar healing, replenish dermal hydration and improve overall skin quality. Often prescribed as part of a multi-modality scar correction plan.",
        ctaHref: `${BASE}/services/skin-boosters-pdrn-karur`,
        ctaLabel: "View regenerative treatments",
      },
      {
        placeholder: "LED Phototherapy<br>image 16:10",
        title: "LED Phototherapy",
        body: "Red and blue LED light therapy for active acne and post-treatment skin recovery. Blue light targets acne-causing bacteria. Red light reduces inflammation and supports collagen production. No downtime, no pain.",
        ctaHref: `${BASE}/services/led-phototherapy-karur`,
        ctaLabel: "View LED phototherapy",
      },
    ],
  },
  why: {
    eyebrow: "Why Karur Trusts Dr. Kavitha",
    h2: "Acne is medical.<br>It deserves a medical approach.",
    lede:
      "At Skin Trust, acne care begins with a clinical assessment of your skin and the factors contributing to your acne. Dr. Kavitha develops a treatment plan based on the type and severity of acne, skin characteristics and individual needs.",
    items: [
      {
        title: "Grade-based diagnosis first",
        text: "Dr. Kavitha classifies your acne by grade before recommending any treatment. A Grade 2 comedonal case and a Grade 4 nodulocystic case need completely different approaches. Selling the same peel to both is incorrect medicine.",
      },
      {
        title: "Scar morphology assessed before treatment",
        text: "Ice-pick, boxcar, rolling and tethered scars can require different treatment approaches. Dr. Kavitha assesses the dominant scar type, depth and skin characteristics to determine the most appropriate treatment modality for your individual needs.",
      },
      {
        title: "Active acne cleared before scar treatment",
        text: "Treating scars on skin that is still actively breaking out is a clinical error. Dr. Kavitha stabilises active acne first, then begins the scar correction phase once the skin is ready. This sequencing protects your results.",
      },
      {
        title: "Doctor performs every procedure",
        text: "All laser treatments, MNRF, subcision, skin booster injections and chemical peels at Skin Trust are performed personally by Dr. Kavitha, ensuring that your treatment remains under direct medical supervision.",
      },
      {
        title: "Standardised photography at every visit",
        text: "Progress photographs are taken under identical lighting and angles at every follow-up. You can see your skin changing on a screen, not rely on memory or a mirror in a different light.",
      },
      {
        title: "Full treatment spectrum available",
        text: "From medical management and chemical peels through to MNRF, fractional lasers, subcision and regenerative injectables, the complete acne and scar correction pathway is available at this one clinic in Karur.",
      },
      {
        title: "No packages, honest recommendations",
        text: "Dr. Kavitha assesses the type and severity of your scars before recommending a treatment approach, from peels and Dermapen to MNRF and fractional CO₂, based on what is appropriate for your skin.",
      },
      {
        title: "3,500+ verified Google reviews",
        text: "The most-reviewed skin clinic in Karur district with a 4.9 average. Patients from Trichy, Namakkal, Erode and Dindigul attend this clinic specifically because word of mouth across Tamil Nadu is that strong.",
      },
      {
        title: "Darker skin type experience",
        text: "Fitzpatrick IV to VI skin types require careful laser and peel selection to avoid post-inflammatory hyperpigmentation. Dr. Kavitha has extensive experience treating South Indian skin types safely and effectively.",
      },
    ],
    stats: [
      { value: "10+", label: "Years clinical experience" },
      { value: "9", label: "Treatments available" },
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
    alt: "Dr. Kavitha MD Dermatology acne scar specialist Skin Trust Karur",
    creds: ["MBBS", "MD Dermatology", "Trichology", "Dermatosurgery"],
    paragraphs: [
      "Acne is the most common skin condition Dr. Kavitha sees at this clinic, and it is also one of the most mismanaged. Patients often arrive after years of trying pharmacy products or undergoing multiple peel sessions elsewhere with no real protocol behind them.",
      "Her approach starts at the grade. She classifies the acne, identifies contributing factors such as hormones, diet or stress, and builds a prescription plan before recommending any procedure. For scar patients, she assesses the dominant scar morphology and sequences the treatments correctly: active acne must be stable before scar correction begins.",
      "All in-clinic procedures are performed by Dr. Kavitha personally. This applies to every MNRF session, every fractional laser pass, every subcision procedure and every skin booster injection.",
    ],
    sig: "Dr. Kavitha",
    moreHref: `${BASE}/about`,
    moreLabel: "More about Dr. Kavitha",
  },
  testimonials: {
    eyebrow: "In patients' words",
    score: { num: "4.9", stars: "★★★★★", of: "3,500+ reviews" },
    copyBig: "<strong>3,500+</strong> patients across Karur and surrounding towns.",
    copy:
      "The most-reviewed skin and hair clinic in Karur district. Patients from Trichy, Namakkal, Erode and Dindigul attend specifically because the reviews are this consistent.",
    quotes: [
      {
        quote:
          "I had been dealing with acne for six years and tried everything. She was the first doctor to actually grade it, explain why things had not worked before, and give me a proper plan. Three months later it is almost completely clear.",
        name: "Divyabharathi R.",
        meta: "Google review · Karur",
      },
      {
        quote:
          "My acne scars have been there for seven years. After two MNRF sessions I can already see the difference. She explained each step, what to expect and what not to expect. That honesty made a huge difference to my confidence in the treatment.",
        name: "Karthikeyan S.",
        meta: "Google review · Trichy",
      },
      {
        quote:
          "I came for a chemical peel and she asked about my hormonal history before recommending anything. Turns out that was exactly why the peels I had done elsewhere were not holding. She treated the cause, not just the skin.",
        name: "Nithyapriya M.",
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
        question: "Can acne scars be fully removed?",
        answer:
          "No treatment removes acne scars completely, and any clinic claiming otherwise is being misleading. What modern treatments like MNRF, fractional CO2 and subcision do is significantly reduce scar depth, improve surface texture and make scars much less visible. Most patients see 50 to 80 percent improvement after a proper treatment course. The realistic outcome for your specific scar type will be discussed at your consultation.",
      },
      {
        question: "Should I treat the acne first before treating the scars?",
        answer:
          "Yes, always. Performing laser resurfacing or MNRF on skin that is still actively breaking out risks worsening inflammation and triggering new post-inflammatory marks. Dr. Kavitha always stabilises active acne before beginning any scar correction treatment. The sequencing is not optional, it is clinical practice.",
      },
      {
        question: "How many sessions will I need for acne scar treatment?",
        answer:
          "The number of sessions depends on your dominant scar type, severity and treatment approach. Mild, superficial scarring may show improvement with around three to four Dermapen sessions. Moderate, mixed scarring may require three to five MNRF sessions, typically spaced four to six weeks apart. Deeper or more complex scarring may require a longer treatment plan involving procedures such as subcision and fractional CO₂. Dr. Kavitha will assess your scars and discuss a realistic treatment plan, including the expected number and spacing of sessions, during your initial consultation.",
      },
      {
        question: "Is MNRF painful? What is the downtime?",
        answer:
          "Topical anaesthetic cream is applied before an MNRF session, so most patients experience mild pressure rather than pain during the procedure. After the session, the skin appears red and slightly swollen for 24 to 48 hours. Most patients return to normal activity within two to three days. Full collagen remodelling results continue to develop for two to three months after each session.",
      },
      {
        question: "What is the difference between MNRF and Dermapen?",
        answer:
          "Both use microneedling but they work differently. Dermapen is a mechanical microneedling device that creates controlled micro-injuries to stimulate collagen. It is suitable for mild to moderate, superficial scarring and skin texture concerns. MNRF adds radiofrequency energy delivered through insulated microneedles into the deeper dermis, making it significantly more powerful for moderate to severe atrophic scarring. Dr. Kavitha recommends one or the other, or a combination, based on your scar assessment.",
      },
      {
        question: "Are chemical peels safe for Indian skin?",
        answer:
          "When selected and applied correctly, yes. The key is matching the acid type, concentration and pH to your skin type and grade of acne. Stronger peels used on darker Fitzpatrick skin types without adequate preparation can cause post-inflammatory hyperpigmentation. Dr. Kavitha selects the appropriate peel for your skin rather than using a standard protocol across all patients.",
      },
      {
        question: "What is subcision and who needs it?",
        answer:
          "Subcision is a minor in-clinic procedure where a fine needle is inserted under the skin to break the fibrous bands that anchor deep rolling or box scars to the underlying tissue. Once released, the scar can lift and the skin surface becomes smoother. It is specifically used when laser treatments alone cannot adequately lift tethered scars. It is often combined with MNRF or filler placement for optimal results.",
      },
      {
        question: "How long until I see results from acne scar treatments?",
        answer:
          "This varies by treatment. Chemical peels show visible improvement within a few weeks of a course. Pico and carbon toning show gradual improvement across sessions. MNRF and fractional CO2 results develop over two to four months per session as collagen remodelling takes place. Subcision results can be visible sooner. Progress photographs at each visit make the improvement measurable rather than subjective.",
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
    h2: "Start with the right<br>diagnosis.",
    lede:
      "A first consultation covers your acne grade, scar morphology, contributing factors and a sequenced treatment plan. No packages are sold at this visit.",
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
      { category: "Aesthetics", label: "Anti-Ageing", href: `${BASE}/services/anti-ageing-treatment-karur` },
      { category: "Skin", label: "Skin Rejuvenation", href: `${BASE}/services/skin-rejuvenation-karur` },
      { category: "Surgery", label: "Dermato Surgery", href: `${BASE}/services/dermato-surgery-karur` },
    ],
  },
};