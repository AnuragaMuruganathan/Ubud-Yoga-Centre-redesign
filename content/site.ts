export const site = {
  name: "Ubud Yoga Centre",
  url: "https://ubudyogacentre.com",
  tagline: "Hot Yoga & Other Classes",
  area: "Nyuh Kuning · Ubud, Bali",
  address: ["Singakerta Raya No. 108, Nyuh Kuning,", "Ubud, Bali 80571, Indonesia"],
  phone: "+62 811 380 3266",
  whatsapp: "https://wa.me/628113803266",
  email: "ubudyogacentremanager@gmail.com",
  directions:
    "https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x2dd23da0cf4c73bd:0xd2e62b2fcca9f2b8!3e0",
  // Embedding by the Google place ID (cid) pins the studio itself instead of a search for “yoga”.
  mapEmbed: "https://www.google.com/maps?cid=15196881476905464504&output=embed",
  reviews: "https://www.google.com/maps?cid=15196881476905464504",
  instagram: "https://www.instagram.com/ubudyogacentre/",
  instagramHandle: "@ubudyogacentre",
  facebook: "https://www.facebook.com/ubudyogacentre/",
  studentStoriesVideo: "W9D9Lq_Or4w",
  insideVideo: "iu5w0Gd9G7w",
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  {
    label: "Classes",
    href: "/yoga-classes-pricing/",
    children: [
      { label: "Classes & Pricing", href: "/yoga-classes-pricing/" },
      { label: "First Visit Guide", href: "/yoga-beginners/" },
      { label: "Events & Training", href: "/events/" },
    ],
  },
  { label: "Schedule", href: "/ubud-yoga-centre-class-schedule/" },
  { label: "Café", href: "/cafe/" },
  { label: "Our Story", href: "/our-story/" },
  { label: "Find Us", href: "/our-location/" },
];

// Pages not already in the main nav (the footer lists both, so no duplicates here).
export const exploreLinks = [
  { label: "Space Rental", href: "/host-your-own-retreat/" },
  { label: "Host a Yoga Retreat", href: "/host-yoga-retreat-holidays/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Canggu Yoga Centre", href: "/welcome-to-canggu-yoga-centre/" },
];

export const reviews = [
  {
    quote:
      "My favorite place for heated yoga in Ubud! The heated studio is fantastic, and the café is an added bonus with great food and drinks.",
    name: "Karina Blackstone",
  },
  {
    quote:
      "A beautiful studio with a great atmosphere. The teachers are very professional — Jessica will really bring out the best in you.",
    name: "Nadav Smith",
  },
  {
    quote: "Beautiful place, the view is really insane and the aerial yoga was a lovely experience.",
    name: "Catherine Shaheen",
  },
];
