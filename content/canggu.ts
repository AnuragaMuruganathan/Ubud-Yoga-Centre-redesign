// Canggu Yoga Centre — transcribed from the studio's printed schedule and price list.
export const canggu = {
  address: "Jl. Dalem Penataran No. 8, Pererenan, Kec. Mengwi, Badung, Bali 80351",
  phone: "+62 812 1020 389",
  whatsapp: "https://wa.me/628121020389",
  email: "cangguyogacentre@gmail.com",
  scheduleNote: "From the August 2026 timetable — message the Canggu team to confirm current times.",
};

const pilates = { time: "09:00 – 10:00", name: "HIIT Inferno Hot Pilates" };
const express = { time: "10:30 – 11:30", name: "Bikram Yoga Express" };

export const cangguSchedule = [
  { day: "Monday", sessions: [pilates, express] },
  { day: "Tuesday", sessions: [pilates, express] },
  { day: "Wednesday", sessions: [pilates, { time: "10:30 – 12:00", name: "Bikram Yoga Classic 90" }] },
  { day: "Thursday", sessions: [pilates, express] },
  { day: "Friday", sessions: [pilates, express] },
  { day: "Saturday", sessions: [pilates] },
  { day: "Sunday", sessions: [pilates] },
];

export const cangguPasses = [
  { name: "Single Drop-In", price: "160,000", note: "One class" },
  { name: "5 Classes", price: "640,000", note: "Valid 30 days" },
  { name: "10 Classes", price: "1,200,000", note: "Valid 30 days" },
  { name: "Monthly Unlimited", price: "2,500,000", note: "30 consecutive days — no freezes or extensions" },
];

export const cangguTerms = [
  "Towels are not included in packages.",
  "Class cards are non-refundable, non-extendable and non-transferable — including after you leave Bali.",
  "Choose the card that suits how long you'll be in Bali.",
];
