const B = import.meta.env.BASE_URL; // '/' in dev, '/doris-gifting-co/' in build

export const IMG = {
  // hero / banners
  storeInterior: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1600&q=80&auto=format&fit=crop',
  giftWall:    `${B}img/cta-wall.png`,
  contactHand: `${B}img/contact-hand.jpg`,
  founder:     `${B}img/founder.png`,
  workshop:    `${B}img/cta-wall.png`,
  // testimonial avatars
  a1: 'https://i.pravatar.cc/120?img=47',
  a2: 'https://i.pravatar.cc/120?img=32',
  a3: 'https://i.pravatar.cc/120?img=12',
  a4: 'https://i.pravatar.cc/120?img=5',
  a5: 'https://i.pravatar.cc/120?img=20',
  a6: 'https://i.pravatar.cc/120?img=49',
};

export const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about',    label: 'About Us' },
  { id: 'contact',  label: 'Contact Us' },
];

export const SERVICES = [
  {
    title: 'Corporate Gifting',
    intro: 'Professional gift solutions for:',
    bullets: ['Employee appreciation', 'Client gifts', 'Welcome kits', 'Business branding'],
  },
  {
    title: 'Custom Gift Boxes',
    intro: 'Bespoke compositions designed around the recipient:',
    bullets: ['Personal milestones', 'Weddings & anniversaries', 'Holiday curations', 'One-of-one keepsakes'],
  },
  {
    title: 'Special Occasion Gifts',
    intro: 'Curated for the moments that matter:',
    bullets: ['Birthdays & celebrations', 'Welcome & thank you', 'Get well & sympathy', 'New baby & housewarming'],
  },
  {
    title: 'Bulk Orders',
    intro: 'Volume gifting without losing the handmade touch:',
    bullets: ['Conferences & events', 'Team milestones', 'Holiday programs', 'Custom branding at scale'],
  },
];

export const GALLERY_FILTERS = [
  'All',
  'Corporate Gifting',
  'Custom Gift Boxes',
  'Special Occasion Gifts',
  'Bulk Orders',
];

export const GALLERY_ITEMS = [
  { src: `${B}img/IMG_2254.jpeg`,                                        cat: 'Special Occasion Gifts', ratio: '4 / 3' },
  { src: `${B}img/IMG_2363.jpeg`,                                        cat: 'Custom Gift Boxes',      ratio: '4 / 3' },
  { src: `${B}img/499A7578_Original.jpeg`,                               cat: 'Corporate Gifting',      ratio: '1 / 1' },
  { src: `${B}img/37017450-8AA9-4317-A256-7676D4E7B97B.jpeg`,           cat: 'Special Occasion Gifts', ratio: '1 / 1' },
  { src: `${B}img/b56a08df-1f6f-4aaa-93c9-277a603c99f6.jpeg`,                     cat: 'Bulk Orders',            ratio: '4 / 3' },
  { src: `${B}img/WhatsApp Image 2026-06-03 at 6.26.59 PM.jpeg`,               cat: 'Custom Gift Boxes',      ratio: '4 / 3', span: 2 },
  { src: `${B}img/WhatsApp Image 2026-06-03 at 6.27.02 PM.jpeg`,               cat: 'Special Occasion Gifts', ratio: '1 / 1' },
  { src: `${B}img/WhatsApp Image 2026-06-03 at 6.27.06 PM.jpeg`,               cat: 'Corporate Gifting',      ratio: '4 / 3' },
  { src: `${B}img/WhatsApp Image 2026-06-03 at 6.27.08 PM.jpeg`,               cat: 'Bulk Orders',            ratio: '1 / 1' },
  { src: `${B}img/WhatsApp Image 2026-06-03 at 6.27.09 PM.jpeg`,               cat: 'Special Occasion Gifts', ratio: '4 / 3' },
  { src: `${B}img/IMG_1635.HEIC`,                                               cat: 'Custom Gift Boxes',      ratio: '4 / 3', span: 2 },
  { src: `${B}img/IMG_1648.HEIC`,                                               cat: 'Special Occasion Gifts', ratio: '1 / 1' },
  { src: `${B}img/IMG_1649.HEIC`,                                               cat: 'Corporate Gifting',      ratio: '4 / 3' },
  { src: `${B}img/IMG_1652.HEIC`,                                               cat: 'Bulk Orders',            ratio: '1 / 1' },
  { src: `${B}img/IMG_1669.HEIC`,                                               cat: 'Custom Gift Boxes',      ratio: '4 / 3' },
  { src: `${B}img/IMG_1673.HEIC`,                                               cat: 'Special Occasion Gifts', ratio: '4 / 3' },
];
