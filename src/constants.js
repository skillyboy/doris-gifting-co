const B = import.meta.env.BASE_URL; // '/' in dev, '/doris-gifting-co/' in build

export const IMG = {
  // hero / banners
  storeInterior: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1600&q=80&auto=format&fit=crop',
  giftWall:    `${B}img/cta-wall.png`,
  contactHand: `${B}img/contact-hand.jpg`,
  founder:     `${B}img/founder.jpg`,
  workshop:    `${B}img/cta-wall.png`,
  // gallery — real Doris product photography
  g1: `${B}img/g-vmo.jpg`,
  g2: `${B}img/g-packaging.jpg`,
  g3: `${B}img/g-huxley.jpg`,
  g4: `${B}img/g-arhaus.jpg`,
  g5: `${B}img/g-refy.jpg`,
  g6: `${B}img/g-casa.jpg`,
  g7: `${B}img/g-happybday.jpg`,
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
  { src: `${B}img/g-huxley.jpg`,    cat: 'Custom Gift Boxes',      ratio: '4 / 3', span: 2 },
  { src: `${B}img/g-packaging.jpg`, cat: 'Corporate Gifting',      ratio: '4 / 3' },
  { src: `${B}img/g-arhaus.jpg`,    cat: 'Bulk Orders',            ratio: '4 / 3' },
  { src: `${B}img/g-refy.jpg`,      cat: 'Custom Gift Boxes',      ratio: '1 / 1' },
  { src: `${B}img/g-casa.jpg`,      cat: 'Bulk Orders',            ratio: '1 / 1' },
  { src: `${B}img/g-happybday.jpg`, cat: 'Special Occasion Gifts', ratio: '1 / 1' },
];
