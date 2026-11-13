import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Flower2,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const BOOKING_URL =
  "https://www.fresha.com/book-now/tata-nails-u6h9ppwm/all-offer?share=true&pId=2702996";
const INSTAGRAM_URL = "https://www.instagram.com/tata_nailsnf/";
const MAPS_URL = "https://maps.app.goo.gl/z1713c3wigngkWpMA";
const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=12917+Sherman+Way%2C+North+Hollywood%2C+CA+91605";
const TAPLINK_URL = "https://taplink.cc/tatanails";
const TELEGRAM_URL = "https://t.me/tata_nailsnf";

const portfolio = [
  {
    src: "https://images.fresha.com/partner-portfolios/providers/2702996/3058bfcf-9c92-4622-8fa1-7ee4927bfc86.jpeg?class=square512&dpr=1&f_quality=75&f_width=1920&keyId=rl8WOyy9WOMLne9A&signature=hR4xWwtmBrC6MLOvICPHsoQVmOc",
    alt: "Tata Nails French manicure with a delicate white bow",
    label: "A little detail",
    className: "gallery-tall",
  },
  {
    src: "https://images.fresha.com/partner-portfolios/providers/2702996/687b8cc8-dbfd-458f-a5f4-5394bde45650.jpeg?class=square512&dpr=1&f_quality=75&f_width=1920&keyId=rl8WOyy9WOMLne9A&signature=wfhEfHTZKd3Sos84yVWPmO8DiLM",
    alt: "Elegant gel nail art by Tata Nails",
    label: "Soft elegance",
    className: "",
  },
  {
    src: "https://images.fresha.com/partner-portfolios/providers/2702996/c06037c9-af1b-4bed-a230-0bdebe960381.png?class=square512&dpr=1&f_quality=75&f_width=1920&keyId=rl8WOyy9WOMLne9A&signature=oyvCOyAPwZV4vJRz+qYsEcxhs8E",
    alt: "Pink stiletto nail design by Tata Nails",
    label: "Made to stand out",
    className: "",
  },
  {
    src: "https://images.fresha.com/partner-portfolios/providers/2702996/fbbce108-722e-4617-8bd5-278d9ae4b54d.jpeg?class=square512&dpr=1&f_quality=75&f_width=1920&keyId=rl8WOyy9WOMLne9A&signature=cRZu5eW65ynknOiPMt4rALUaz2w",
    alt: "Glossy red gel manicure with elegant nail art by Tata Nails",
    label: "A classic, reimagined",
    className: "",
  },
  {
    src: "https://images.fresha.com/partner-portfolios/providers/2702996/de279967-2409-4a81-9be3-1fda152f1602.jpeg?class=square512&dpr=1&f_quality=75&f_width=1920&keyId=rl8WOyy9WOMLne9A&signature=bIhTjEz6HVqbqwJScnlBOfT7d9o",
    alt: "Soft pink ombre gel nails by Tata Nails",
    label: "Blush tones",
    className: "gallery-wide",
  },
  {
    src: "https://images.fresha.com/partner-portfolios/providers/2702996/c09ea212-bc3d-40ab-9483-52e56b8f3517.jpeg?class=square512&dpr=1&f_quality=75&f_width=1920&keyId=rl8WOyy9WOMLne9A&signature=DuQul5KH%2FghP%2FkCeLZECPW3mRI8",
    alt: "French manicure with a ribbon bow on soft satin by Tata Nails",
    label: "The finishing touch",
    className: "",
  },
];

const services = [
  {
    number: "01",
    name: "Russian Gel Manicure",
    description:
      "A detailed manicure with refined cuticle care and a clean, lasting gel finish.",
    price: "From $80",
    duration: "1 hour",
    featured: true,
  },
  {
    number: "02",
    name: "Hard Gel · Natural Nails",
    description:
      "Strength, structure and a beautifully smooth finish while keeping your natural length.",
    price: "From $90",
    duration: "1 hour",
  },
  {
    number: "03",
    name: "Smart Pedicure",
    description:
      "Thoughtful foot care and a polished finish for a fresh, comfortable feel.",
    price: "$80",
    duration: "1 hour",
  },
  {
    number: "04",
    name: "Smart Gel Pedicure",
    description:
      "A carefully finished pedicure with long-lasting gel color.",
    price: "From $90",
    duration: "2 hours",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  accent,
  copy,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span />{eyebrow}</span>
      <h2>{title} {accent && <em>{accent}</em>}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeImage !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
        setMenuOpen(false);
      }
      if (event.key === "ArrowRight" && activeImage !== null) {
        setActiveImage((activeImage + 1) % portfolio.length);
      }
      if (event.key === "ArrowLeft" && activeImage !== null) {
        setActiveImage((activeImage - 1 + portfolio.length) % portfolio.length);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeImage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <Sparkles size={13} strokeWidth={1.7} />
        <span>YOUR MOMENT OF BEAUTY, RIGHT HERE IN NORTH HOLLYWOOD</span>
        <Sparkles size={13} strokeWidth={1.7} />
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Tata Nails home" onClick={closeMenu}>
          <span className="brand-mark"><Flower2 size={26} strokeWidth={1.15} /></span>
          <span className="brand-copy">
            <strong>TATA NAILS</strong>
            <small>NAIL ARTISTRY · NORTH HOLLYWOOD</small>
          </span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#gallery" onClick={closeMenu}>Our work</a>
          <a href="#about" onClick={closeMenu}>The experience</a>
          <a href="#visit" onClick={closeMenu}>Find us</a>
          <a className="nav-book" href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Book an appointment <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-marble" aria-hidden="true" />
          <div className="hero-copy">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow"><span />A NAIL STUDIO WITH A PERSONAL TOUCH</span>
              <h1>Beauty is in<br />the <em>details.</em></h1>
              <p className="hero-lede">
                Thoughtful nail care, beautiful artistry, and a little time that is entirely yours.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Reserve your moment <ArrowUpRight size={17} />
                </a>
                <a className="text-link" href="#gallery">
                  Discover our work <ArrowDown size={15} />
                </a>
              </div>
              <div className="hero-proof">
                <div className="rating-stars" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" strokeWidth={1} />)}
                </div>
                <div>
                  <strong>4.7 out of 5</strong>
                  <span>Google rating · 54 reviews</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-image-wrap">
              <img
                src={portfolio[0].src}
                alt={portfolio[0].alt}
                fetchPriority="high"
              />
              <div className="image-caption">
                <span>THE ART OF SELF-CARE</span>
                <span>01 / 06</span>
              </div>
            </div>
            <div className="floating-note">
              <span className="note-icon"><Flower2 size={22} strokeWidth={1.2} /></span>
              <span><strong>Made with care</strong><small>Finished with intention</small></span>
            </div>
            <span className="hero-orbit orbit-one" aria-hidden="true" />
            <span className="hero-orbit orbit-two" aria-hidden="true" />
          </motion.div>

          <div className="hero-side-note">BEAUTY · DETAIL · YOU</div>
          <a className="scroll-cue" href="#services"><span />SCROLL TO EXPLORE</a>
        </section>

        <section className="trust-strip" aria-label="Tata Nails highlights">
          <div><Star size={17} /><span><strong>4.7 / 5</strong><small>Google reviews</small></span></div>
          <i />
          <div><Sparkles size={17} /><span><strong>Russian manicure</strong><small>Detail-led nail care</small></span></div>
          <i />
          <div><MapPin size={17} /><span><strong>North Hollywood</strong><small>California</small></span></div>
          <i />
          <div><CalendarCheck size={17} /><span><strong>Easy online booking</strong><small>Choose your appointment</small></span></div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-topline">
            <SectionHeading
              eyebrow="THE MENU"
              title="A service for"
              accent="every detail."
              copy="From precise cuticle care to a fresh new set, find the treatment that feels like you."
            />
            <a className="round-link" href={BOOKING_URL} target="_blank" rel="noreferrer" aria-label="View all services and book">
              <ArrowUpRight size={22} />
            </a>
          </div>

          <div className="services-layout">
            <motion.div
              className="service-feature"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="service-feature-image">
                <img src={portfolio[4].src} alt={portfolio[4].alt} loading="lazy" />
                <span className="image-tag"><Sparkles size={13} /> CLIENT FAVOURITE</span>
              </div>
              <div className="feature-note">
                <span>01 — SIGNATURE CARE</span>
                <p>Beautifully considered, from the first detail to the final finish.</p>
              </div>
            </motion.div>

            <div className="service-list">
              {services.map((service, index) => (
                <motion.article
                  className={service.featured ? "service-row service-row-featured" : "service-row"}
                  key={service.number}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                >
                  <span className="service-number">{service.number}</span>
                  <div className="service-info">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <span className="service-duration"><Clock3 size={13} /> {service.duration}</span>
                  </div>
                  <div className="service-price">
                    <strong>{service.price}</strong>
                    <a href={BOOKING_URL} target="_blank" rel="noreferrer" aria-label={`Book ${service.name}`}>
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </motion.article>
              ))}
              <p className="price-note">Prices shown are starting prices where indicated. Final pricing may vary by length, design and service details.</p>
              <a className="button button-outline service-cta" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Explore all 28 services <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="quote-band">
          <div className="quote-flower" aria-hidden="true"><Flower2 /></div>
          <span className="eyebrow">THE TATA NAILS FEELING</span>
          <p>Not just a manicure.<br /><em>A moment to feel like yourself.</em></p>
          <span className="quote-bottom">A LITTLE PAUSE. A LOVELY FINISH.</span>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="gallery-heading">
            <SectionHeading
              eyebrow="A LOOK INSIDE OUR WORK"
              title="Little works"
              accent="of art."
              copy="A glimpse of the details, finishes and designs created at Tata Nails."
            />
            <a className="instagram-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram size={17} /> Follow along on Instagram <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="gallery-grid">
            {portfolio.map((image, index) => (
              <motion.button
                className={`gallery-item ${image.className}`}
                type="button"
                key={image.src}
                onClick={() => setActiveImage(index)}
                aria-label={`Open image: ${image.alt}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span className="gallery-overlay"><span>{image.label}</span><span className="gallery-open"><ArrowUpRight size={17} /></span></span>
              </motion.button>
            ))}
          </div>
          <div className="gallery-bottom">
            <span>REAL WORK · REAL DETAILS</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">See more on Instagram <ArrowUpRight size={14} /></a>
          </div>
        </section>

        <section className="experience-section" id="about">
          <div className="experience-image">
            <img
              src="https://images.fresha.com/locations/location-profile-images/2702996/5137372/9a64e515-b877-416e-a308-f9f514274efc-TataNails-US-California-LosAngeles-NorthHollywood-Fresha.jpg?class=venue-gallery-large&f_quality=75&f_width=1920"
              alt="Tata Nails studio in North Hollywood"
              loading="lazy"
            />
            <span className="experience-image-label">A PLACE TO UNWIND</span>
          </div>
          <div className="experience-copy">
            <span className="eyebrow"><span />THE EXPERIENCE</span>
            <h2>Considered care.<br /><em>Beautifully done.</em></h2>
            <p>
              We believe the best results come from taking the time to get the little things right.
              At Tata Nails, every appointment is personal — from the conversation about your
              inspiration to the finishing touches.
            </p>
            <div className="experience-points">
              <div><span><ShieldCheck size={18} /></span><p><strong>Detail-first approach</strong><small>Professional, personalized nail care.</small></p></div>
              <div><span><MessageCircle size={18} /></span><p><strong>Speak your language</strong><small>English · Русский · Հայերեն</small></p></div>
              <div><span><Sparkles size={18} /></span><p><strong>Your style, your way</strong><small>From timeless classics to custom designs.</small></p></div>
            </div>
            <a className="text-link experience-link" href={TAPLINK_URL} target="_blank" rel="noreferrer">
              Discover Tata Nails <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-inner">
            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" strokeWidth={1} />)}
            </div>
            <blockquote>
              “Tata did my Gel-X nails and they came out amazing. The whole experience was so relaxing and the staff was friendly, experienced, and very detail oriented.”
            </blockquote>
            <div className="review-credit"><span /> ATHENA J. <small>GOOGLE REVIEW</small></div>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="review-link">Read client reviews <ArrowUpRight size={14} /></a>
          </div>
          <span className="testimonial-side">KIND WORDS FROM OUR CLIENTS</span>
        </section>

        <section className="visit-section section-pad" id="visit">
          <div className="visit-heading">
            <SectionHeading
              eyebrow="COME SAY HELLO"
              title="Your next"
              accent="lovely moment."
              copy="We would love to welcome you. Find us in North Hollywood or book your visit online."
            />
          </div>
          <div className="visit-grid">
            <div className="visit-card visit-address">
              <span className="visit-icon"><MapPin size={19} /></span>
              <span className="eyebrow">FIND THE STUDIO</span>
              <h3>Come on in.</h3>
              <p>12917 Sherman Way<br />North Hollywood, CA 91605</p>
              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="visit-action">Get directions <ArrowUpRight size={15} /></a>
            </div>
            <div className="visit-card">
              <span className="visit-icon"><Clock3 size={19} /></span>
              <span className="eyebrow">OPENING HOURS</span>
              <h3>Here for you.</h3>
              <div className="hours-list">
                <p><span>Monday – Friday</span><strong>8:30 AM – 10 PM</strong></p>
                <p><span>Saturday – Sunday</span><strong>10 AM – 10 PM</strong></p>
              </div>
              <small className="card-footnote">Hours are listed in Pacific Time. Appointment availability is shown on Fresha.</small>
            </div>
            <div className="visit-card visit-contact">
              <span className="visit-icon"><Phone size={19} /></span>
              <span className="eyebrow">LET'S CONNECT</span>
              <h3>We are one call away.</h3>
              <a className="phone-number" href="tel:+18189611717">(818) 961-1717</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="social-row"><Instagram size={16} /> Instagram <ArrowUpRight size={14} /></a>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="social-row"><MessageCircle size={16} /> Telegram <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="booking-banner">
            <div className="booking-banner-flower"><Flower2 size={34} strokeWidth={1} /></div>
            <div><span className="eyebrow">A LITTLE TIME FOR YOURSELF</span><h3>Let's make it a beautiful appointment.</h3></div>
            <a className="button button-dark" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book online <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="faq-strip">
          <div><Check size={15} /> Online booking with instant confirmation</div>
          <div><Check size={15} /> Parking available</div>
          <div><Check size={15} /> Pet-friendly studio</div>
          <div><Check size={15} /> English · Russian · Armenian</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark"><Flower2 size={25} strokeWidth={1.15} /></span>
            <span className="brand-copy"><strong>TATA NAILS</strong><small>NAIL ARTISTRY · NORTH HOLLYWOOD</small></span>
          </a>
          <p>Beautiful details.<br /><em>Made with care.</em></p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#gallery">Our work</a>
            <a href="#about">The experience</a>
            <a href={TAPLINK_URL} target="_blank" rel="noreferrer">Courses & links</a>
          </div>
          <a className="footer-book" href={BOOKING_URL} target="_blank" rel="noreferrer">BOOK YOUR VISIT <ArrowUpRight size={15} /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TATA NAILS. ALL RIGHTS RESERVED.</span>
          <span>NORTH HOLLYWOOD, CALIFORNIA</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={15} /> INSTAGRAM</a>
        </div>
      </footer>

      <a className="mobile-booking-bar" href={BOOKING_URL} target="_blank" rel="noreferrer">
        <span>Ready for your appointment?</span><strong>Book now <ArrowUpRight size={16} /></strong>
      </a>

      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <button className="lightbox-close" type="button" aria-label="Close image" onClick={() => setActiveImage(null)}>
              <X size={23} />
            </button>
            <button
              className="lightbox-arrow lightbox-prev"
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                setActiveImage((activeImage - 1 + portfolio.length) % portfolio.length);
              }}
            ><ChevronRight size={23} /></button>
            <motion.div
              className="lightbox-content"
              key={activeImage}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={portfolio[activeImage].src} alt={portfolio[activeImage].alt} />
              <div className="lightbox-caption"><span>{portfolio[activeImage].label}</span><span>0{activeImage + 1} / 0{portfolio.length}</span></div>
            </motion.div>
            <button
              className="lightbox-arrow lightbox-next"
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                setActiveImage((activeImage + 1) % portfolio.length);
              }}
            ><ChevronRight size={23} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
