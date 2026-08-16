// Small set of consistent line icons used across the site (feature cards,
// admissions info cards, etc). Keeping them in one place makes the visual
// language easy to keep consistent.

const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };

export const IconBook = (p) => (
  <svg {...common} {...p}>
    <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 014 18.5v-13z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M20 5.5C20 4.7 19.3 4 18.5 4H12v16h6.5a1.5 1.5 0 001.5-1.5v-13z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

export const IconTeacher = (p) => (
  <svg {...common} {...p}>
    <circle cx="12" cy="7" r="3.4" stroke="currentColor" strokeWidth="1.7" />
    <path d="M4.5 20c0-4.1 3.4-6.5 7.5-6.5s7.5 2.4 7.5 6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const IconBuilding = (p) => (
  <svg {...common} {...p}>
    <rect x="4" y="3.5" width="16" height="17" rx="1.4" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const IconHeart = (p) => (
  <svg {...common} {...p}>
    <path d="M12 20.5s-7.5-4.6-9.3-9.5C1.7 7.7 3.6 5 6.6 5c1.9 0 3.4 1.1 4.4 2.6a1.2 1.2 0 002 0C14 6.1 15.5 5 17.4 5c3 0 4.9 2.7 3.9 6-1.8 4.9-9.3 9.5-9.3 9.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

export const IconTarget = (p) => (
  <svg {...common} {...p}>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const IconShield = (p) => (
  <svg {...common} {...p}>
    <path d="M12 3l7 3v6c0 4.6-3 8.2-7 9-4-.8-7-4.4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconUser = (p) => (
  <svg {...common} {...p}>
    <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.7" />
    <path d="M4.5 20c0-4.1 3.4-6.5 7.5-6.5s7.5 2.4 7.5 6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const IconRocket = (p) => (
  <svg {...common} {...p}>
    <path d="M12 3c3 1 5 4 5 8 0 2-1 4-2.5 5.5L12 19l-2.5-2.5C8 15 7 13 7 11c0-4 2-7 5-8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.7" />
    <path d="M9 17l-1.5 3M15 17l1.5 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const IconLeaf = (p) => (
  <svg {...common} {...p}>
    <path d="M20 4c0 9-6.5 15-16 15C4 10 10 4 20 4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M20 4C13 8 8 13 4 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const IconDoc = (p) => (
  <svg {...common} {...p}>
    <path d="M6 3.5h8l4 4V20a.7.7 0 01-.7.7H6.7A.7.7 0 016 20V3.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M14 3.5V8h4" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M9 12h6M9 15.5h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const IconCalendar = (p) => (
  <svg {...common} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const IconCheck = (p) => (
  <svg {...common} {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 12.3l2.6 2.6L16 9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconCompassAlt = (p) => (
  <svg {...common} {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path d="M15 9l-2 6-4 2 2-6 4-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const IconChat = (p) => (
  <svg {...common} {...p}>
    <path d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v9a1.5 1.5 0 01-1.5 1.5H10l-4.5 4v-4H5.5A1.5 1.5 0 014 14.5v-9z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);
