export type MenuItem = { name: string; price?: string; tag?: string; desc?: string };
export type MenuSection = { title: string; price?: string; items: MenuItem[] };

export const menuNote = "Prices in thousand IDR, excl. 10% tax & 5% service · VG vegan · V vegetarian";

// The studio's printed menu marks vegan "V" and vegetarian "VV" — the reverse of the usual
// convention — so the data keeps their codes and the site shows the familiar labels.
export const menuTags: Record<string, { label: string; title: string }> = {
  V: { label: "VG", title: "Vegan" },
  VV: { label: "V", title: "Vegetarian" },
};

export const menu: MenuSection[] = [
  {
    title: "All-Day Breakfast",
    items: [
      { name: "Banana Pancakes", tag: "VV", price: "66", desc: "Strawberries, caramelised banana, Balinese honey, coconut yogurt" },
      { name: "Big Breakfast", tag: "VV", price: "77", desc: "Eggs, mushrooms, spinach, potatoes, tomatoes, sourdough" },
      { name: "Rustic Breakfast", tag: "VV", price: "66", desc: "Roasted pumpkin, quinoa, pineapple salsa, tzatziki" },
      { name: "Wholegrain Porridge", price: "61", desc: "Brown rice, quinoa & oats in soya or coconut milk" },
    ],
  },
  {
    title: "Bowls",
    price: "77",
    items: [
      { name: "The Protein Bowl", tag: "V", desc: "Avocado, sweet potato, corn, beans, tzatziki" },
      { name: "The Tempe Bowl", tag: "V", desc: "Soy tempe, brown rice, avocado, soy-ginger dressing" },
      { name: "The Veggie Bowl", tag: "V", desc: "Curried chickpeas, tofu, mushrooms, tahini-hummus" },
    ],
  },
  {
    title: "Greens & Salads",
    price: "66",
    items: [
      { name: "Beetroot Almonds", tag: "V" },
      { name: "Caramelised Roasted Pumpkin", tag: "VV" },
      { name: "Moroccan Couscous", tag: "V" },
      { name: "Quinoa Pineapple", tag: "V" },
      { name: "Rainbow Detox", tag: "V" },
    ],
  },
  {
    title: "Smoothie Bowls",
    price: "66",
    items: [
      { name: "Tropical Passion Fruit", tag: "V" },
      { name: "Mango Magic", tag: "V" },
      { name: "Avocado Shake", tag: "V" },
      { name: "Berry Blessed", tag: "V" },
      { name: "Nalu Bowl + Seasonal Fruits", tag: "V" },
    ],
  },
  {
    title: "Mains",
    items: [
      { name: "Green Curry", price: "66 / 60", desc: "Chicken or tempe-tofu, red rice" },
      { name: "Yellow Curry", price: "66 / 60", desc: "Chicken or tempe-tofu, red rice" },
      { name: "Zucchini Pasta", tag: "VV", price: "66" },
      { name: "Rustic Sweet Potato Skin", tag: "VV", price: "77" },
      { name: "Green Smashed Avocado", tag: "VV", price: "66" },
      { name: "Slice Avocado Toast", tag: "VV", price: "66" },
      { name: "Fried White Omelette", tag: "VV", price: "66" },
      { name: "Pumpkin Soup", tag: "V", price: "60" },
    ],
  },
  {
    title: "Juices & Smoothies",
    price: "50",
    items: [
      { name: "Cleanse", desc: "Kale, celery, cucumber, apple, pineapple" },
      { name: "Flush", desc: "Pineapple, mint, cucumber, parsley, ginger" },
      { name: "Stamina", desc: "Beetroot, lime, apple, carrot" },
      { name: "Spice it up!", desc: "Apple, pineapple, lime, ginger" },
      { name: "Smoothie", desc: "Banana, strawberry, coconut water" },
    ],
  },
  {
    title: "Coffee",
    items: [
      { name: "Espresso", price: "20" },
      { name: "Black Coffee", price: "25" },
      { name: "Latte · Cappuccino · Flat White", price: "33" },
      { name: "Piccolo · Turmeric Latte", price: "33" },
      { name: "Iced Coffee", price: "44" },
      { name: "Oat / coconut / extra shot", price: "+10" },
    ],
  },
  {
    title: "Drinks & Snacks",
    items: [
      { name: "Young Coconut", price: "24" },
      { name: "Hot / Iced Lime", price: "22 / 33" },
      { name: "Tea or Ginger, hot / iced", price: "28 / 33" },
      { name: "Sweet Potato or French Fries", price: "28" },
      { name: "Fruit Cocktail", price: "35" },
      { name: "Brownies, energy balls & raw treats" },
    ],
  },
];

export const cafePhotos = [
  { src: "/images/image_2026-09-12_17-06-35.webp", alt: "The Protein Bowl" },
  { src: "/images/image_2026-09-12_17-16-57.webp", alt: "Smoothie bowl topped with fresh fruit" },
  { src: "/images/image_2026-09-12_17-22-25.webp", alt: "Fresh green juices with a jungle view" },
  { src: "/images/image_2026-09-13_09-10-14.webp", alt: "Zucchini pasta with fresh basil" },
];
