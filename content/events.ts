export type YogaEvent = {
  slug: string;
  title: string;
  short: string;
  dates: string;
  start: { day: string; month: string; weekday: string };
  image: string;
  summary: string;
  learn: string[];
  about: string;
  whatsapp: string;
  sibling: string;
};

const learn = [
  "How to construct a Hot Pilates class",
  "Pilates principles",
  "An overview of signature movements",
  "How to be an effective instructor",
];
const about =
  "Inferno Hot Pilates combines Pilates-based exercise with high-intensity intervals — taught at 35 °C and 40% humidity on a yoga mat.";
const wa = (level: string, dates: string) =>
  `https://api.whatsapp.com/send/?phone=628113803266&text=${encodeURIComponent(
    `Hi! I'd like to know more about Hot Pilates Teacher Training with Gabi Walters, ${level}, ${dates}. Could you share the fees, participation requirements and registration details?`,
  )}`;

export const events: YogaEvent[] = [
  {
    slug: "hot-pilates-teacher-training-with-gabi-walters-level-1",
    title: "Hot Pilates Teacher Training with Gabi Walters: Level 1",
    short: "Hot Pilates Teacher Training · Level 1",
    dates: "July 12–14, 2027",
    start: { day: "12", month: "Jul", weekday: "Mon" },
    image: "/images/hot-pilates-level-1-july-2027-v6.webp",
    summary: "Learn to teach Hot Pilates with Gabi Walters, founder of Inferno Hot Pilates in Las Vegas.",
    learn,
    about,
    whatsapp: wa("Level 1", "July 12-14, 2027"),
    sibling: "hot-pilates-teacher-training-with-gabi-walters-level-2",
  },
  {
    slug: "hot-pilates-teacher-training-with-gabi-walters-level-2",
    title: "Hot Pilates Teacher Training with Gabi Walters: Level 2",
    short: "Hot Pilates Teacher Training · Level 2",
    dates: "July 16–18, 2027",
    start: { day: "16", month: "Jul", weekday: "Fri" },
    image: "/images/hot-pilates-level-2-july-2027-v6.webp",
    summary: "Learn to teach Hot Pilates with Gabi Walters, founder of Inferno Hot Pilates in Las Vegas.",
    learn,
    about,
    whatsapp: wa("Level 2", "July 16-18, 2027"),
    sibling: "hot-pilates-teacher-training-with-gabi-walters-level-1",
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
