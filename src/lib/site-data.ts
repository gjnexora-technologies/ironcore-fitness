import hero from "@/assets/hero.jpg";
import personal from "@/assets/personal.jpg";
import hiit from "@/assets/hiit.jpg";
import group from "@/assets/group.jpg";
import interior from "@/assets/interior.jpg";
import mobility from "@/assets/mobility.jpg";
import strength from "@/assets/strength.jpg";
import beginner from "@/assets/beginner.jpg";
import t1 from "@/assets/trainer1.jpg";
import t2 from "@/assets/trainer2.jpg";
import t3 from "@/assets/trainer3.jpg";
import t4 from "@/assets/trainer4.jpg";

export const images = { hero, personal, hiit, group, interior, mobility, strength, beginner };

// Edit contact details here
export const contact = {
  phone: "+91 98765 43210",
  email: "hello@ironcorefitness.com",
  address: "24 Race Course Road, Gopalapuram, Coimbatore, Tamil Nadu 641018",
  hours: [
    { day: "Mon – Fri", time: "5:00 AM – 11:00 PM" },
    { day: "Saturday", time: "6:00 AM – 9:00 PM" },
    { day: "Sunday", time: "7:00 AM – 7:00 PM" },
  ],
  instagram: "https://instagram.com/ironcorefitness",
  instagramHandle: "@ironcorefitness",
  mapEmbed: "https://www.google.com/maps?q=Race+Course+Road%2C+Coimbatore%2C+Tamil+Nadu&output=embed",
};

export const stats = [
  { value: 500, suffix: "+", label: "Members" },
  { value: 20, suffix: "+", label: "Weekly Classes" },
  { value: 10, suffix: "+", label: "Expert Trainers" },
  { value: 7, suffix: " Days", label: "Open" },
];

export const programs = [
  { slug: "strength", name: "Strength Training", image: strength, desc: "Build raw power with structured barbell and free-weight programming." },
  { slug: "personal", name: "Personal Training", image: personal, desc: "One-to-one coaching built entirely around your goals." },
  { slug: "functional", name: "Functional Training", image: mobility, desc: "Move better in real life with athletic, multi-joint training." },
  { slug: "hiit", name: "HIIT", image: hiit, desc: "Short, intense intervals that push conditioning to the next level." },
  { slug: "weight", name: "Weight Management", image: group, desc: "Sustainable training and habits for healthy body composition." },
  { slug: "group", name: "Group Fitness", image: group, desc: "High-energy coached classes that keep you accountable." },
  { slug: "mobility", name: "Mobility & Conditioning", image: mobility, desc: "Improve range, recovery and resilience for long-term training." },
  { slug: "beginner", name: "Beginner Fitness", image: beginner, desc: "A guided, confidence-building start for brand-new lifters." },
];

export const reasons = [
  { title: "Expert Coaching", desc: "Guidance from experienced fitness professionals." },
  { title: "Modern Equipment", desc: "A professional training environment with quality equipment." },
  { title: "Personalized Programs", desc: "Training designed around individual goals." },
  { title: "Supportive Community", desc: "A motivating environment for consistent progress." },
  { title: "Flexible Training", desc: "Programs suitable for different fitness levels." },
  { title: "Results Focused", desc: "Structured training built around measurable progress." },
];

// Placeholder profiles — replace with your real team
export const trainers = [
  { name: "Arjun Mehta", specialty: "Strength & Conditioning", years: "8 yrs experience", image: t1, bio: "Focused on technique-first lifting and progressive strength for every level." },
  { name: "Sofia Reyes", specialty: "Personal Training", years: "6 yrs experience", image: t2, bio: "Builds tailored plans that balance performance, aesthetics and consistency." },
  { name: "Marcus Hale", specialty: "Functional Fitness", years: "12 yrs experience", image: t3, bio: "Trains athletic movement, conditioning and durable, pain-free bodies." },
  { name: "Claire Dawson", specialty: "Nutrition & Wellness", years: "9 yrs experience", image: t4, bio: "Supports healthy habits, recovery and sustainable lifestyle change." },
];

// Edit prices here
export const plans = [
  { name: "Starter", price: "₹1,999", period: "/month", desc: "Access to essential gym facilities.", features: ["Full gym floor access", "Locker room & showers", "Free induction session", "Member app access"], featured: false },
  { name: "Performance", price: "₹3,499", period: "/month", desc: "Gym access + group classes.", features: ["Everything in Starter", "Unlimited group classes", "Monthly progress check-in", "Guest pass each month"], featured: true },
  { name: "Elite", price: "₹6,999", period: "/month", desc: "Gym access + classes + personal training benefits.", features: ["Everything in Performance", "4 personal training sessions", "Personalized program", "Priority class booking"], featured: false },
];

export const testimonials = [
  { name: "Priya S.", quote: "The coaches actually care. I've never been this consistent with training in my life.", rating: 5 },
  { name: "Daniel K.", quote: "Best equipment in the city and a community that pushes you every single session.", rating: 5 },
  { name: "Ananya R.", quote: "I started as a total beginner. The program made lifting feel achievable and fun.", rating: 5 },
  { name: "Rahul V.", quote: "Group classes are intense but welcoming. It's the highlight of my week.", rating: 4 },
];

export type GalleryCat = "Training" | "Classes" | "Coaches" | "Gym" | "Lifestyle";
export const galleryCats: GalleryCat[] = ["Training", "Classes", "Coaches", "Gym", "Lifestyle"];
export const gallery: { src: string; alt: string; cat: GalleryCat; span?: string }[] = [
  { src: hero, alt: "Athlete performing a heavy barbell squat", cat: "Training", span: "md:col-span-2 md:row-span-2" },
  { src: interior, alt: "IronCore gym floor with squat racks", cat: "Gym", span: "md:col-span-2" },
  { src: group, alt: "Group kettlebell class", cat: "Classes" },
  { src: personal, alt: "Coach guiding a dumbbell row", cat: "Coaches", span: "md:row-span-2" },
  { src: hiit, alt: "Battle ropes HIIT session", cat: "Training" },
  { src: strength, alt: "Lifter chalking hands before a deadlift", cat: "Lifestyle" },
  { src: mobility, alt: "Mobility and box jump training", cat: "Lifestyle", span: "md:row-span-2" },
  { src: beginner, alt: "Coach teaching a goblet squat", cat: "Coaches" },
  { src: t1, alt: "IronCore strength coach portrait", cat: "Coaches" },
];
