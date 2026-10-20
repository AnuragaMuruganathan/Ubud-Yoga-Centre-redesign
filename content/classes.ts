export type YogaClass = {
  slug: string;
  name: string;
  hot: boolean;
  card: string;
  hero: string;
  summary: string;
  duration: string;
  heat: string;
  level: string;
  ages: string;
  about: string[];
  expect: { title: string; text: string }[];
  bring: string[];
  notes?: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

const bringHot = ["Towel — or rent one for IDR 10,000", "Water — you will sweat", "No mat needed — ours are free"];
const bringRegular = ["Comfortable clothes you can move in", "Water", "No mat needed — ours are free"];

export const classes: YogaClass[] = [
  {
    slug: "bikram-hot-yoga",
    name: "Bikram Yoga",
    hot: true,
    card: "/images/p2_3.webp",
    hero: "/images/bikram-f1.webp",
    summary: "The original 26 postures and 2 breathing exercises at 40.6 °C.",
    duration: "90′ Classic · 60′ Express",
    heat: "40.6 °C / 105 °F",
    level: "All levels",
    ages: "18+ · Express 10+ with a parent",
    about: [
      "A fixed, unchanging sequence of 26 postures and 2 breathing exercises that works every muscle, joint and organ.",
      "We teach only the original sequence, led by certified instructors with 10–22+ years of experience.",
    ],
    expect: [
      { title: "The routine", text: "The same 26+2 sequence every class — Classic 90′ or Express 60′." },
      { title: "The heat", text: "40.6 °C with 40% humidity for deeper, safer stretching." },
      { title: "No inversions", text: "No headstands or shoulder stands — kind to neck and spine." },
      { title: "Mirrors", text: "Check and correct your alignment in real time." },
    ],
    bring: bringHot,
    faqs: [
      { q: "Is Bikram suitable for beginners?", a: "Yes. The sequence never changes, the teacher guides you, and Express 60′ is a softer entry point." },
      { q: "Classic 90 or Express 60?", a: "Same 26+2 sequence. Classic runs the full 90 minutes; Express condenses it to 60." },
      { q: "How hot is the room?", a: "40.6 °C (105 °F) with about 40% humidity. Drink water before and during class." },
    ],
    related: ["inferno-hot-pilates", "hot-vinyasa", "hatha-yoga"],
  },
  {
    slug: "inferno-hot-pilates",
    name: "HIIT Inferno Hot Pilates",
    hot: true,
    card: "/images/p4_8.webp",
    hero: "/images/inferno-hot-pilates-f1.webp",
    summary: "Low-impact Pilates with high-intensity intervals at ~37 °C.",
    duration: "60 min",
    heat: "~36–37 °C / 97–99 °F",
    level: "All levels — challenging",
    ages: "10+",
    about: [
      "A full-body, low-impact workout combining HIIT with Pilates principles in a heated room.",
      "Founder Gabi Walters returns every July to train our teachers to the authentic Inferno standard.",
    ],
    expect: [
      { title: "The heat", text: "A mat class at 36–37 °C — warm muscles and a heavy sweat." },
      { title: "The structure", text: "Timed Tabata-style intervals: bridge, core, back, legs, cardio, arms." },
      { title: "The movement", text: "Mostly bodyweight — no running, no jumping, easy on the joints." },
      { title: "The breath", text: "Pilates breathing that engages the pelvic floor and core." },
    ],
    bring: bringHot,
    faqs: [
      { q: "Am I fit enough?", a: "Every exercise scales. It is challenging — arrive hydrated and rest whenever you need." },
      { q: "Is it really low-impact?", a: "Yes. Bodyweight Pilates and cardio without running or jumping." },
      { q: "Do I need equipment?", a: "No. Bands and small weights are provided when used." },
    ],
    related: ["bikram-hot-yoga", "hot-barre", "hot-vinyasa"],
  },
  {
    slug: "trx-hot",
    name: "Hot TRX",
    hot: true,
    card: "/images/trx-page-1-top.webp",
    hero: "/images/trx-page-1-top.webp",
    summary: "Suspension-strap strength training in a heated room.",
    duration: "60 min",
    heat: "Warm, heated room",
    level: "All levels",
    ages: "18+",
    about: [
      "TRX — Total Body Resistance Exercise — uses two straps anchored overhead and your bodyweight as resistance.",
      "Change your body angle and the same move gets easier or harder. The heat does the rest.",
    ],
    expect: [
      { title: "The straps", text: "Two adjustable straps; your bodyweight is the resistance." },
      { title: "Your angle", text: "Lean further to level up — you set the intensity." },
      { title: "The heat", text: "Warm muscles, heavy sweat, faster endurance gains." },
      { title: "For everyone", text: "Push-ups, squats, rows and core — all scalable." },
    ],
    bring: bringHot,
    notes: ["High-intensity: come hydrated and take breaks whenever you need them."],
    faqs: [
      { q: "Do I need to be fit?", a: "No. It suits complete beginners and athletes — every move scales." },
      { q: "Do I need my own equipment?", a: "No. Straps are anchored in the studio and provided." },
    ],
    related: ["hot-vinyasa", "inferno-hot-pilates", "hot-barre"],
  },
  {
    slug: "hot-barre",
    name: "Hot Barre",
    hot: true,
    card: "/images/p10_photo_1.webp",
    hero: "/images/hot-barre-f3.webp",
    summary: "Yoga, ballet and barre work fused in a room at about 35 °C.",
    duration: "60 min",
    heat: "~35 °C / 95 °F",
    level: "All levels",
    ages: "18+",
    about: [
      "A fusion of yoga, body sculpting, ballet and barre work inspired by the Lotte Berk method.",
      "Isometric holds and stretches tone glutes, core, thighs and arms and improve posture.",
    ],
    expect: [
      { title: "The burn", text: "Small, precise holds at the barre that tone fast." },
      { title: "The mix", text: "Ballet, modern dance, sculpting and stretching in one flow." },
      { title: "The heat", text: "Around 35 °C adds a cardio response to every hold." },
      { title: "No jumping", text: "Non-impact cardio, gentle on the joints." },
    ],
    bring: bringHot,
    faqs: [
      { q: "Is barre only for dancers?", a: "Not at all — no dance experience needed, and every move scales." },
      { q: "How is it different from Pilates?", a: "Barre blends isometric holds and ballet positions; Pilates focuses on core control and mat work." },
    ],
    related: ["inferno-hot-pilates", "hot-vinyasa", "bikram-hot-yoga"],
  },
  {
    slug: "hot-vinyasa",
    name: "Hot Power Vinyasa",
    hot: true,
    card: "/images/p11_photo_1.webp",
    hero: "/images/p11_photo_1.webp",
    summary: "A dynamic, breath-linked power flow in a heated room.",
    duration: "60 min",
    heat: "29–40 °C / 85–105 °F",
    level: "Intermediate to advanced",
    ages: "18+",
    about: [
      "Power yoga strength meets breath-to-movement vinyasa, practised in a heated room.",
      "Sequences change with each instructor, so no two classes are the same.",
    ],
    expect: [
      { title: "The flow", text: "Continuous transitions that build heat and focus." },
      { title: "The heat", text: "Raises the heart rate and warms muscles for deeper work." },
      { title: "The variety", text: "A fresh sequence with every teacher." },
      { title: "The intensity", text: "Stamina-focused — come hydrated, pace yourself." },
    ],
    bring: bringHot,
    faqs: [
      { q: "Is it suitable for beginners?", a: "It is energetic. If you are new, start with Vinyasa, Hatha or Bikram." },
      { q: "Do I need experience?", a: "It helps to know the core poses — sequences are not repeated." },
    ],
    related: ["vinyasa-yoga", "inferno-hot-pilates", "bikram-hot-yoga"],
  },
  {
    slug: "intro-ashtanga-yoga",
    name: "Intro to Ashtanga Yoga",
    hot: false,
    card: "/images/p6_photo_1.webp",
    hero: "/images/p6_photo_1.webp",
    summary: "The Ashtanga Primary Series, slowed down and built from the foundation.",
    duration: "60 min",
    heat: "Regular room",
    level: "All levels",
    ages: "All ages",
    about: [
      "A 60-minute introduction to the Ashtanga Primary Series — the blueprint postures, one by one.",
      "Steady Ujjayi breathing, clear alignment cues and modifications for every body.",
    ],
    expect: [
      { title: "A fixed sequence", text: "Learn the same series until it becomes second nature." },
      { title: "Blueprint postures", text: "Alignment, breath and transitions — no rushing." },
      { title: "Ujjayi breath", text: "The ocean breath that links movement and attention." },
      { title: "Modifications", text: "Options for stiff joints and complete beginners." },
    ],
    bring: bringRegular,
    faqs: [
      { q: "Never done Ashtanga?", a: "That is exactly who this class is for. No experience needed." },
      { q: "What is Ujjayi breathing?", a: "A soft, audible breath through the nose that keeps breath, movement and focus connected." },
    ],
    related: ["vinyasa-yoga", "hatha-yoga", "yin-yoga"],
  },
  {
    slug: "yin-yoga",
    name: "Yin Yoga",
    hot: false,
    card: "/images/p8_photo_1.webp",
    hero: "/images/p8_photo_1.webp",
    summary: "Long, passive floor holds that release deep connective tissue.",
    duration: "60–75 min",
    heat: "Regular room",
    level: "All levels",
    ages: "18+",
    about: [
      "Seated and reclining postures held for three to ten minutes, targeting fascia, ligaments and joints.",
      "Muscles stay relaxed while props and gravity do the work.",
    ],
    expect: [
      { title: "Connective tissue", text: "Long holds reach the fascia, ligaments and joints." },
      { title: "Passive holds", text: "Blocks and bolsters support every shape." },
      { title: "Stillness", text: "Calm, deep breathing and quiet observation." },
      { title: "Beginner friendly", text: "No fast flows, minimal physical demand." },
    ],
    bring: ["Warm, comfortable layers", "Water", "No mat needed — ours are free"],
    faqs: [
      { q: "Is Yin just relaxing?", a: "It is deeply relaxing — and a real practice that builds lasting flexibility." },
      { q: "Do I need to be flexible?", a: "No. Flexibility is what Yin builds, not what it requires." },
    ],
    related: ["hatha-yoga", "yoga-nidra-sound-healing", "kundalini-yoga"],
  },
  {
    slug: "hatha-yoga",
    name: "Hatha Yoga",
    hot: false,
    card: "/images/p9_photo_1.webp",
    hero: "/images/p9_photo_1.webp",
    summary: "Slow, beginner-friendly poses with breathwork and relaxation.",
    duration: "60 min",
    heat: "Regular room",
    level: "All levels",
    ages: "18+",
    about: [
      "A slow-paced practice of postures (asana) and breathing (pranayama) that balances body and mind.",
      "Poses are held for several breaths, finishing with a short relaxation.",
    ],
    expect: [
      { title: "Slower pace", text: "Poses held for several breaths, no rapid transitions." },
      { title: "Foundations", text: "Steady speed and a focus on alignment." },
      { title: "Complete", text: "Stretching, controlled breathing and relaxation." },
    ],
    bring: bringRegular,
    faqs: [
      { q: "Never done yoga — is Hatha a good start?", a: "Yes. It is the classic beginner-friendly practice." },
      { q: "How is it different from Vinyasa?", a: "Vinyasa flows quickly with the breath; Hatha holds poses longer." },
    ],
    related: ["yin-yoga", "intro-ashtanga-yoga", "vinyasa-yoga"],
  },
  {
    slug: "vinyasa-yoga",
    name: "Vinyasa Yoga",
    hot: false,
    card: "/images/p12_photo_1.webp",
    hero: "/images/p12_photo_1.webp",
    summary: "A flowing, breath-linked practice that builds strength.",
    duration: "60 min",
    heat: "Regular room",
    level: "Intermediate to advanced",
    ages: "18+",
    about: [
      "A fast-paced flow linking every movement to the breath in one continuous sequence.",
      "A moving meditation that calms the mind and strengthens the body.",
    ],
    expect: [
      { title: "Variety", text: "Every teacher builds a unique sequence." },
      { title: "The vinyasa", text: "Plank, Chaturanga, up-dog and down-dog link the poses." },
      { title: "Moving meditation", text: "Pace and breath quiet the mind." },
    ],
    bring: bringRegular,
    faqs: [
      { q: "Am I ready for Vinyasa?", a: "If you know down-dog, plank and warriors, yes. Otherwise start with Hatha." },
      { q: "Is there a set sequence?", a: "No — sequences vary by teacher, so every class is fresh." },
    ],
    related: ["hot-vinyasa", "intro-ashtanga-yoga", "hatha-yoga"],
  },
  {
    slug: "kundalini-yoga",
    name: "Kundalini Yoga & Meditation",
    hot: false,
    card: "/images/p13_photo_1.webp",
    hero: "/images/kundalini-yoga-f2.webp",
    summary: "Postures, breathwork, mantra and meditation — the Yoga of Awareness.",
    duration: "75 min",
    heat: "Regular room",
    level: "All levels",
    ages: "10+ with a parent · 18+",
    about: [
      "Posture, breath, meditation, mantra and music for vitality, clarity and inner balance.",
      "Non-denominational and open to everyone, from first-timers to long-time meditators.",
    ],
    expect: [
      { title: "Tune in", text: "The mantra Ong Namo Guru Dev Namo opens the class." },
      { title: "Breath & kriya", text: "Pranayama, warm-ups and a set sequence with conscious breathing." },
      { title: "Deep relaxation", text: "Lying down to integrate the practice." },
      { title: "Meditation", text: "Mantra, mudra and focus — closing with 'May the Long Time Sun'." },
    ],
    bring: ["Comfortable clothing — mostly seated", "Water", "No mat needed — ours are free"],
    faqs: [
      { q: "Is it for complete beginners?", a: "Yes. No prior practice needed." },
      { q: "Do I have to chant?", a: "You are always welcome to simply listen." },
    ],
    related: ["yoga-nidra-sound-healing", "yin-yoga", "hatha-yoga"],
  },
  {
    slug: "aerial-yoga",
    name: "Aerial Yoga",
    hot: false,
    card: "/images/p15_photo_1.webp",
    hero: "/images/p15_photo_1.webp",
    summary: "Suspended hammock stretches rooted in Iyengar principles.",
    duration: "60 min",
    heat: "Regular room",
    level: "All levels — see health notes",
    ages: "18+",
    about: [
      "Bali Aerial Yoga uses a suspension belt so gravity assists alignment and decompresses the spine.",
      "Most beginners find it surprisingly approachable — the hammock does part of the work.",
    ],
    expect: [
      { title: "Spinal decompression", text: "Hanging and inverting lengthens the spine." },
      { title: "Joint relief", text: "Deep stretches without strain on wrists, knees or back." },
      { title: "Core strength", text: "Balancing in the air engages deep stabilisers." },
      { title: "Mental release", text: "A playful, floating practice that lifts the mood." },
    ],
    bring: ["Close-fitting clothing", "No jewellery", "Water"],
    notes: [
      "Not suitable during pregnancy, or with uncontrolled high blood pressure, heart disease, glaucoma, vertigo, spinal injury or recent surgery.",
      "Avoid within 24 hours of Botox or after a recent concussion.",
      "Classes host up to 15. Over 80 kg? Please arrange a private session.",
    ],
    faqs: [
      { q: "Never done aerial — will I manage?", a: "Yes. The hammock supports much of your weight and teachers guide every entry." },
      { q: "How many people per class?", a: "Up to 15, so everyone has space and supervision." },
    ],
    related: ["yin-yoga", "hatha-yoga", "hot-barre"],
  },
  {
    slug: "yoga-nidra-sound-healing",
    name: "Yoga Nidra & Sound Healing",
    hot: false,
    card: "/images/nidra-class-card.webp",
    hero: "/images/nidra-class-card.webp",
    summary: "Guided yogic sleep finished with a Tibetan singing-bowl sound bath.",
    duration: "60 min",
    heat: "Regular room",
    level: "All levels",
    ages: "All ages",
    about: [
      "'Yogic Sleep' — guided conscious relaxation into the deepest restorative state.",
      "The class closes with a sound bath of Tibetan singing bowls.",
    ],
    expect: [
      { title: "Guided relaxation", text: "Lie down and follow the voice — no poses, no effort." },
      { title: "The deep state", text: "Rest deeply while staying awake and aware." },
      { title: "The sound bath", text: "Singing bowls calm the nervous system." },
      { title: "For everyone", text: "Open to every level and ability." },
    ],
    bring: ["Mat, blankets and bolsters provided", "A warm layer"],
    faqs: [
      { q: "Do I need to know how to meditate?", a: "No. You simply follow the teacher's voice." },
      { q: "What if I fall asleep?", a: "Perfectly fine — deep rest is the point." },
    ],
    related: ["yin-yoga", "kundalini-yoga", "hatha-yoga"],
  },
];

export const getClass = (slug: string) => classes.find((c) => c.slug === slug);
