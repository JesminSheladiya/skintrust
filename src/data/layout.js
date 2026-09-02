// Single source of truth for Header & Footer — matches home page (src/pages/index.astro)
// All pages should import from here so topbar, header and footer stay identical.
import { BASE } from "./site.js";

export function getHeader(base = BASE, pathname = "") {
  // Use `base` with hash anchors so the same header works on every page.
  // On home `base + "#treatments"` behaves identically to "#treatments" but also
  // navigates correctly when clicked from /about, /services/*, etc.
  // `BASE` has no trailing slash ("" or "/skintrust"), so we add slashes explicitly.
  const b = base || "";
  const norm = (p) => (p || "").replace(/\/+$/, "") || "/";
  const current = norm(pathname);
  // helpers to compare paths ignoring trailing slash
  const isActive = (href) => {
    const h = norm(href.split("#")[0].split("?")[0]);
    if (!h || h === "/") return current === "/" || current === b || current === `${b}/`;
    return current === h || current === `${h}/`;
  };
  const dropdown = [
    { label: "Hair Restoration", href: `${b}/services/hair-restoration` },
    {
      label: "Acne & Scar Correction",
      href: `${b}/services/acne-scar-treatment-karur`,
    },
    {
      label: "Anti-Ageing & Lifting",
      href: `${b}/services/anti-ageing-treatment-karur`,
    },
    {
      label: "Laser Treatments",
      href: `${b}/services/laser-treatments-karur`,
    },
    {
      label: "Skin Rejuvenation & Glow",
      href: `${b}/services/skin-rejuvenation-karur`,
    },
    {
      label: "Dermatology & Surgery",
      href: `${b}/services/dermato-surgery-karur`,
    },
  ].map((item) => ({
    ...item,
    active: isActive(item.href),
  }));

  const treatmentsActive = dropdown.some((d) => d.active);

  return {
    topbarAddress:
      "No. 28, Chairman Ramanujan Street, Karur — opp. Kamaatchi Amman Temple",
    topbarPhone: "+91 96269 23299",
    topbarPhoneHref: "tel:+919626923299",
    topbarHours: "Mon–Sat 9:30 AM–7:30 PM",
    navLinks: [
      {
        label: "TREATMENTS",
        // No services index page — dropdown only, so no href
        href: "",
        active: treatmentsActive,
        dropdown,
      },
      { label: "ABOUT", href: `${b}/about`, active: isActive(`${b}/about`) },
      { label: "CONTACT", href: `${b}/#book` },
    ],
    ctaLabel: "BOOK APPOINTMENT",
    ctaHref: `${b}/#book`,
  };
}

export function getFooter(base = BASE) {
  const b = base || "";
  return {
    address: "No. 28, Chairman Ramanujan Street, Karur — 639001, Tamil Nadu.",
    phone: "+91 96269 23299",
    phoneHref: "tel:+919626923299",
    whatsapp: "WhatsApp: +91 90922 32991",
    whatsappHref: "https://wa.me/919092232991",
    columns: [
      {
        heading: "Hair & Skin",
        links: [
          {
            label: "Hair Restoration",
            href: `${b}/services/hair-restoration`,
          },
          {
            label: "Acne & Scar Correction",
            href: `${b}/services/acne-scar-treatment-karur`,
          },
          {
            label: "Dermatology & Surgery",
            href: `${b}/services/dermato-surgery-karur`,
          },
        ],
      },
      {
        heading: "Laser & Anti-Ageing",
        links: [
          {
            label: "Laser Treatments",
            href: `${b}/services/laser-treatments-karur`,
          },
          {
            label: "Anti-Ageing & Lifting",
            href: `${b}/services/anti-ageing-treatment-karur`,
          },
          {
            label: "Skin Rejuvenation & Glow",
            href: `${b}/services/skin-rejuvenation-karur`,
          },
        ],
      },
      {
        heading: "Clinic",
        links: [
          { label: "About Dr. Kavitha", href: `${b}/about` },
          { label: "All Services", href: `${b}/#treatments` },
          { label: "Book Appointment", href: `${b}/#book` },
        ],
      },
    ],
  };
}

// Convenience default exports for callers that don't need dynamic base
export const header = getHeader(BASE);
export const footer = getFooter(BASE);
