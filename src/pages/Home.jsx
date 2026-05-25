import React from 'react';
import { IMG } from '../constants';
import CTABanner from '../components/CTABanner';
import ServicesAccordion from '../components/ServicesAccordion';

const heroVideo = new URL(
  '../../Cinematic product video of wrapped gift boxes on rustic wooden background. Very slow, smooth push-in (subtle zoom) toward the center gift box. No rotation or camera shake.Warm, soft ambient lighting with gentle highli.mp4',
  import.meta.url,
).href;


const TESTIMONIALS = [
  {
    name: 'Amara Joy',
    role: 'Corporate Client',
    avatar: IMG.a1,
    text: 'Working with Doris Gifting Co was such a beautiful experience from start to finish. The attention to detail, creativity, and professionalism truly stood out.',
  },
  {
    name: 'Preye Alaere',
    role: 'Client',
    avatar: IMG.a2,
    text: 'Every gift was thoughtfully arranged and delivered with so much elegance and care. You can tell there’s genuine passion behind the brand. If you’re looking for luxury gifting with a personal touch, Doris Gifting Co is definitely the perfect choice. Highly recommend!',
  },
  {
    name: 'Temi Ore',
    role: 'Small Business Owner',
    avatar: IMG.a3,
    text: 'Our welcome kits finally matched our brand. Doris handled the sourcing, wrapping, and details with so much care.',
  },
  {
    name: 'Anna Okeke',
    role: 'HR Manager',
    avatar: IMG.a4,
    text: 'The employee appreciation boxes were thoughtful and consistent across the whole order. We received wonderful feedback.',
  },
  {
    name: 'Chioma Soysal',
    role: 'Founder, EffiDeli',
    avatar: IMG.a5,
    text: "Thank you to Doris Gifting Co for the beautiful personalized gift boxes for Ozan's 2nd birthday. His friends absolutely loved them and honestly, their mothers did too.",
  },
  {
    name: 'Bukky Ore',
    role: '',
    avatar: IMG.a6,
    text: 'The personalized motivational cards were such a thoughtful touch and made the gifts even more special. Seeing the surprise and excitement from everyone was priceless. We are definitely coming back for my daughter\'s 3rd birthday celebration.',
  },
];

const GALLERY_PREVIEW = [
  { src: IMG.g3, className: 'home-gallery-main', alt: 'Huxley wrapped gift boxes' },
  { src: IMG.g2, className: 'home-gallery-side home-gallery-packaging', alt: 'Gift packaging process' },
  { src: IMG.g4, className: 'home-gallery-side', alt: 'Arhaus gift bags' },
  { src: IMG.g5, className: 'home-gallery-tile', alt: 'Refy gift bags' },
  { src: IMG.g6, className: 'home-gallery-tile', alt: 'Casa Naiha boxed gifts' },
  { src: IMG.g7, className: 'home-gallery-tile', alt: 'Birthday gift box' },
];

export default function Home({ mobile, go }) {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <h1 className="serif">Thoughtful Gifting<br />Elevated</h1>
          <p>
            Every gift should be intentional and memorable. We curate bespoke experiences that articulate gratitude and celebrate connections with quiet sophistication.
          </p>
          <button onClick={() => go('contact')} className="btn-link">Send us a message</button>
        </div>
        <div className="home-hero-media">
          <video src={heroVideo} autoPlay muted loop playsInline aria-label="Wrapped gifts on a rustic table" />
        </div>
      </section>

      <section className="home-about">
        <h2 className="serif">About Doris</h2>
        <p>
          At Doris Gifting Co., we believe that every gift should be intentional, meaningful, and memorable.
          <br />
          We specialize in creating premium, curated gift boxes designed to elevate both personal and professional experiences. Whether you are appreciating clients, welcoming employees, or celebrating special moments, our goal is to help you leave a lasting impression.
        </p>
        <button onClick={() => go('about')} className="btn-link">Learn More</button>
        <div className="home-about-image">
          <video src={`${import.meta.env.BASE_URL}img/about-bg.mp4`} autoPlay muted loop playsInline aria-label="Doris Gifting Co. studio interior" />
        </div>
      </section>

      <section className="home-gallery-section">
        <div className="section-kicker">Gallery</div>
        <h2 className="serif">A Study in Thoughtful Details</h2>
        <button onClick={() => go('gallery')} className="btn-link">View Gallery</button>

        <div className="home-gallery-grid">
          {GALLERY_PREVIEW.map((item) => (
            <button
              key={`${item.alt}-${item.className}`}
              className={`home-gallery-card ${item.className}`}
              onClick={() => go('gallery')}
              aria-label={item.alt}
            >
              <img src={item.src} alt="" />
            </button>
          ))}
        </div>
      </section>

      <section className="home-services">
        <div>
          <div className="section-kicker section-kicker-left">Services</div>
          <h2 className="serif">How we craft meaningful gifting experiences</h2>
        </div>
        <div className="home-services-body">
          <ServicesAccordion mobile={mobile} />
          <img src={IMG.g1} alt="Corporate gift boxes with branded items" />
        </div>
      </section>

      <section className="home-testimonials">
        <h2 className="serif">What Our Clients Say</h2>
        <div className="home-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <article className="home-testimonial" key={`${t.name}-${i}`}>
              <p>{t.text}</p>
              <div className="home-person">
                <img src={t.avatar} alt="" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner mobile={mobile} go={go} />
    </div>
  );
}
