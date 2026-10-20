export type Session = { time: string; name: string; slug: string };
export type Day = { day: string; short: string; sessions: Session[] };

const S = {
  pilates: ["HIIT Inferno Hot Pilates", "inferno-hot-pilates"],
  hatha: ["Hatha Yoga", "hatha-yoga"],
  bikram: ["Bikram Yoga", "bikram-hot-yoga"],
  express: ["Bikram Yoga Express", "bikram-hot-yoga"],
  hotVinyasa: ["Hot Power Vinyasa", "hot-vinyasa"],
  ashtanga: ["Intro to Ashtanga Yoga", "intro-ashtanga-yoga"],
  kundalini: ["Kundalini Yoga", "kundalini-yoga"],
  yin: ["Yin Yoga", "yin-yoga"],
  nidra: ["Yoga Nidra with Sound Bath", "yoga-nidra-sound-healing"],
  trx: ["Hot TRX", "trx-hot"],
  barre: ["Hot Barre", "hot-barre"],
  aerial: ["Bali Aerial Yoga", "aerial-yoga"],
  vinyasa: ["Vinyasa Yoga", "vinyasa-yoga"],
} as const;

const s = (time: string, key: keyof typeof S): Session => ({ time, name: S[key][0], slug: S[key][1] });

const monWed = [
  s("07:30 – 08:30", "pilates"),
  s("08:00 – 09:00", "hatha"),
  s("09:00 – 10:00", "express"),
  s("09:30 – 10:30", "hotVinyasa"),
  s("10:15 – 11:15", "ashtanga"),
  s("11:00 – 12:30", "kundalini"),
  s("16:15 – 17:30", "yin"),
  s("17:00 – 18:00", "express"),
];

export const schedule: Day[] = [
  { day: "Monday", short: "Mon", sessions: monWed },
  {
    day: "Tuesday",
    short: "Tue",
    sessions: [
      s("07:30 – 09:00", "bikram"),
      s("08:00 – 09:00", "hatha"),
      s("09:00 – 10:00", "express"),
      s("09:30 – 10:30", "pilates"),
      s("11:00 – 12:15", "yin"),
      s("16:00 – 17:00", "nidra"),
      s("17:00 – 18:00", "express"),
    ],
  },
  { day: "Wednesday", short: "Wed", sessions: monWed },
  {
    day: "Thursday",
    short: "Thu",
    sessions: [
      s("07:30 – 09:00", "bikram"),
      s("08:00 – 09:00", "hatha"),
      s("09:00 – 10:00", "express"),
      s("09:30 – 10:30", "pilates"),
      s("11:00 – 12:15", "yin"),
      s("16:00 – 17:00", "trx"),
      s("17:00 – 18:00", "express"),
    ],
  },
  {
    day: "Friday",
    short: "Fri",
    sessions: [
      s("07:30 – 08:30", "pilates"),
      s("08:00 – 09:00", "hatha"),
      s("09:00 – 10:00", "express"),
      s("10:15 – 11:15", "ashtanga"),
      s("11:00 – 12:15", "yin"),
      s("16:00 – 17:00", "pilates"),
      s("17:00 – 18:00", "express"),
    ],
  },
  {
    day: "Saturday",
    short: "Sat",
    sessions: [
      s("08:00 – 09:00", "pilates"),
      s("09:00 – 10:00", "express"),
      s("10:00 – 11:00", "barre"),
      s("11:00 – 12:00", "nidra"),
      s("12:00 – 13:00", "aerial"),
    ],
  },
  {
    day: "Sunday",
    short: "Sun",
    sessions: [
      s("08:00 – 09:00", "pilates"),
      s("09:00 – 10:00", "express"),
      s("10:00 – 11:00", "vinyasa"),
      s("11:00 – 12:30", "kundalini"),
      s("12:00 – 13:00", "aerial"),
    ],
  },
];

export const sessionsFor = (slug: string) =>
  schedule
    .map((d) => ({ day: d.short, times: d.sessions.filter((x) => x.slug === slug).map((x) => x.time) }))
    .filter((d) => d.times.length);
