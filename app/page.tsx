'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from '@formspree/react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Cloud,
  Code2,
  Cpu,
  GraduationCap,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MoveUpRight,
  Network,
  Play,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
  Zap,
} from 'lucide-react';

type Solution = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type CoreOneFeature = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type Stat = {
  num: string;
  label: string;
  value: string;
};

const solutions: Solution[] = [
  {
    icon: GraduationCap,
    title: 'Education Technology',
    text: 'Digital infrastructure that brings school operations, learning, communication and insight into one connected ecosystem.',
  },
  {
    icon: Code2,
    title: 'Software & Product Engineering',
    text: 'Purpose-built web and mobile products designed around real workflows, real users and measurable outcomes.',
  },
  {
    icon: Network,
    title: 'Digital Transformation',
    text: 'Modernise manual processes with connected systems, automation, data and practical technology strategy.',
  },
];

const coreOneFeatures: CoreOneFeature[] = [
  {
    title: 'School Administration',
    text: 'A central workspace for everyday school operations and records.',
    icon: Layers3,
  },
  {
    title: 'Student & Parent Experience',
    text: 'One connected digital experience for students, families and administrators.',
    icon: UsersRound,
  },
  {
    title: 'Learning & Assessment',
    text: 'Attendance, CBT, ebooks, results and learning tools in one ecosystem.',
    icon: BookOpen,
  },
  {
    title: 'Security & Access',
    text: 'Role-based access and school-aware controls designed for multi-tenant environments.',
    icon: ShieldCheck,
  },
];

const stats: Stat[] = [
  {
    num: '01',
    label: 'Flagship Product',
    value: 'CoreOne',
  },
  {
    num: '02',
    label: 'Experience Layers',
    value: 'Web + Mobile',
  },
  {
    num: '03',
    label: 'Core Focus',
    value: 'People + Process + Data',
  },
  {
    num: '04',
    label: 'Built For',
    value: 'Scale',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const formId =
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xrpggbar';

  const [formState, handleFormSubmit] = useForm(formId);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="site-header">
        <div className="container nav-wrap">
          <button
            type="button"
            className="brand"
            onClick={() => scrollTo('home')}
            aria-label="Go to home"
          >
            <span className="brand-logo">
              <Image
                src="/logo.png"
                alt="SkillForge Technologies & Solutions Ltd"
                width={180}
                height={58}
                priority
              />
            </span>

            <span className="brand-copy">
              <strong>SKILLFORGE</strong>
              <small>Technologies &amp; Solutions Ltd</small>
            </span>
          </button>

          <nav
            className={`main-nav ${menuOpen ? 'open' : ''}`}
            aria-label="Main navigation"
          >
            <button type="button" onClick={() => scrollTo('company')}>
              Company
            </button>

            <button type="button" onClick={() => scrollTo('coreone')}>
              CoreOne
            </button>

            <button type="button" onClick={() => scrollTo('solutions')}>
              Solutions
            </button>

            <button type="button" onClick={() => scrollTo('technology')}>
              Technology
            </button>

            <button type="button" onClick={() => scrollTo('team')}>
              Team
            </button>

            <button type="button" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </nav>

          <button
            type="button"
            className="nav-cta"
            onClick={() => scrollTo('contact')}
          >
            Talk to us
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse-dot" />
              Technology. Products. Possibility.
            </div>

            <h1>
              We build digital products that <em>move people forward.</em>
            </h1>

            <p>
              SkillForge Technologies &amp; Solutions Ltd is a product-driven
              technology company building modern software, digital platforms
              and practical solutions for organisations ready to operate
              smarter.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="primary-btn"
                onClick={() => scrollTo('coreone')}
              >
                Explore CoreOne
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="ghost-btn"
                onClick={() => scrollTo('company')}
              >
                <span className="play">
                  <Play size={13} fill="currentColor" />
                </span>
                Discover SkillForge
              </button>
            </div>

            <div className="hero-proof">
              <div>
                <span>01</span>
                <p>Company behind CoreOne</p>
              </div>

              <div>
                <span>∞</span>
                <p>Built to grow with you</p>
              </div>

              <div>
                <span>24/7</span>
                <p>Digital-first mindset</p>
              </div>
            </div>
          </div>

          <div className="hero-stage">
            <div className="stage-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="core-card">
              <div className="core-card-top">
                <span className="product-badge">
                  <Sparkles size={13} />
                  FLAGSHIP PRODUCT
                </span>

                <span className="status">LIVE ECOSYSTEM</span>
              </div>

              <div className="core-logo">
                C<span>O</span>RE<span className="mini-dot">•</span>ONE
              </div>

              <p>
                The connected operating layer for modern schools.
              </p>

              <div className="dashboard-window">
                <div className="window-bar">
                  <span />
                  <span />
                  <span />
                  <i>CoreOne Workspace</i>
                </div>

                <div className="dash-body">
                  <aside>
                    <b />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </aside>

                  <div className="dash-main">
                    <div className="dash-heading">
                      <span>School Overview</span>
                      <small>2026 / 2027</small>
                    </div>

                    <div className="metric-row">
                      <div />
                      <div />
                      <div />
                    </div>

                    <div className="chart-row">
                      <div className="chart">
                        <span />
                        <i />
                        <b />
                        <em />
                        <strong />
                      </div>

                      <div className="donut" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card card-users">
                <UsersRound size={16} />

                <div>
                  <b>Students</b>
                  <span>Connected</span>
                </div>

                <strong>↗</strong>
              </div>

              <div className="floating-card card-security">
                <ShieldCheck size={16} />

                <div>
                  <b>Access</b>
                  <span>Role-aware</span>
                </div>

                <strong>✓</strong>
              </div>
            </div>

            <div className="stage-note">
              <Zap size={15} />
              One platform. Many possibilities.
            </div>
          </div>
        </div>
      </section>

      <section className="ticker-section" aria-label="Our areas of focus">
        <div className="ticker-track">
          <span>PRODUCT DEVELOPMENT</span>
          <i />

          <span>EDTECH</span>
          <i />

          <span>DIGITAL TRANSFORMATION</span>
          <i />

          <span>SOFTWARE SOLUTIONS</span>
          <i />

          <span>PRODUCT TECHNICAL SUPPORT</span>
          <i />

          <span>PRODUCT DEVELOPMENT</span>
          <i />

          <span>EDTECH</span>
          <i />
        </div>
      </section>

      <section id="company" className="section company-section">
        <div className="container">
          <div className="section-intro split">
            <div>
              <span className="section-kicker">01 / THE COMPANY</span>

              <h2>
                Technology is only powerful when it{' '}
                <em>solves something real.</em>
              </h2>
            </div>

            <p>
              We combine product thinking, engineering and business
              understanding to build technology that is useful today and ready
              for tomorrow.
            </p>
          </div>

          <div className="company-grid">
            <article className="manifesto-card">
              <div className="manifesto-number">SF / 01</div>

              <h3>
                Built with purpose.
                <br />
                <em>Engineered for impact.</em>
              </h3>

              <p>
                SkillForge exists to design and deliver technology that
                improves how organisations work, how people interact with
                systems, and how decisions are made.
              </p>

              <button
                type="button"
                className="text-link"
                onClick={() => scrollTo('contact')}
              >
                Work with SkillForge
                <MoveUpRight size={15} />
              </button>
            </article>

            <div className="principles">
              <div className="principle">
                <span>01</span>

                <div>
                  <h4>Product-led</h4>

                  <p>
                    We build around outcomes, users and the full product
                    journey — not technology for technology&apos;s sake.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>02</span>

                <div>
                  <h4>Human-centred</h4>

                  <p>
                    Interfaces should feel clear. Systems should feel
                    understandable. Experiences should respect the people
                    using them.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>03</span>

                <div>
                  <h4>Built to scale</h4>

                  <p>
                    Our architecture and thinking are designed so products can
                    grow with the organisations they serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="coreone" className="section coreone-section">
        <div className="container">
          <div className="coreone-head">
            <div>
              <span className="section-kicker">02 / FLAGSHIP PRODUCT</span>

              <div className="coreone-wordmark">
                CORE<span>ONE</span>
              </div>
            </div>

            <div>
              <span className="live-pill">
                <span />
                In active development
              </span>

              <p>
                CoreOne is SkillForge&apos;s flagship education technology
                platform — connecting school administration, learning,
                communication and insight in one modern ecosystem.
              </p>
            </div>
          </div>

          <div className="coreone-showcase">
            <div className="showcase-copy">
              <span className="mini-label">
                ONE CORE. EVERY EXPERIENCE.
              </span>

              <h3>
                Run the school.
                <br />
                <em>Empower the people.</em>
              </h3>

              <p>
                From school administrators and teachers to students and
                parents, CoreOne is designed to give each person the tools,
                visibility and digital experience they need.
              </p>

              <div className="feature-list">
                {coreOneFeatures.map((feature) => {
                  const FeatureIcon = feature.icon;

                  return (
                    <div className="feature-item" key={feature.title}>
                      <span className="feature-icon">
                        <FeatureIcon size={18} />
                      </span>

                      <div>
                        <b>{feature.title}</b>
                        <p>{feature.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="coreone-ui">
              <div className="device-back" />

              <div className="core-dashboard">
                <div className="cd-top">
                  <span className="cd-brand">CoreOne</span>

                  <div className="cd-actions">
                    <span>Search</span>
                    <b>MT</b>
                  </div>
                </div>

                <div className="cd-content">
                  <div className="cd-side">
                    <div className="active">Overview</div>
                    <div>Students</div>
                    <div>Academics</div>
                    <div>Learning</div>
                    <div>Attendance</div>
                    <div>Communication</div>
                    <div>Reports</div>
                  </div>

                  <div className="cd-workspace">
                    <div className="welcome">
                      Good morning, School Admin <span>✦</span>
                    </div>

                    <div className="workspace-sub">
                      Everything important, in one place.
                    </div>

                    <div className="stat-cards">
                      <div>
                        <small>Students</small>
                        <strong>1,842</strong>
                        <span>+12.4%</span>
                      </div>

                      <div>
                        <small>Attendance</small>
                        <strong>94.8%</strong>
                        <span>+2.1%</span>
                      </div>

                      <div>
                        <small>Classes</small>
                        <strong>38</strong>
                        <span>+4.0%</span>
                      </div>
                    </div>

                    <div className="wide-panel">
                      <div className="panel-title">
                        <b>School activity</b>
                        <span>View report →</span>
                      </div>

                      <div className="bars">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="device-phone">
                <div className="phone-notch" />

                <div className="phone-screen">
                  <span className="tiny-brand">CoreOne</span>
                  <b>Good morning 👋</b>
                  <small>Here&apos;s your learning snapshot.</small>

                  <div className="phone-card" />
                  <div className="phone-card second" />

                  <div className="phone-nav">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.num} className="stat-box">
                <span>{stat.num}</span>

                <div>
                  <small>{stat.label}</small>
                  <strong>{stat.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="section solutions-section">
        <div className="container">
          <div className="section-intro centered">
            <span className="section-kicker">03 / WHAT WE DO</span>

            <h2>
              Solutions built around <em>real operations.</em>
            </h2>

            <p>
              From flagship products to tailored technology initiatives, we
              focus on practical systems that create clarity, speed and better
              experiences.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map((solution, index) => {
              const SolutionIcon = solution.icon;

              return (
                <article className="solution-card" key={solution.title}>
                  <div className="solution-index">
                    0{index + 1}
                  </div>

                  <div className="solution-icon">
                    <SolutionIcon />
                  </div>

                  <h3>{solution.title}</h3>

                  <p>{solution.text}</p>

                  <div className="solution-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="technology" className="section technology-section">
        <div className="container tech-grid">
          <div>
            <span className="section-kicker">04 / TECHNOLOGY</span>

            <h2>
              Modern architecture. <em>Practical engineering.</em>
            </h2>

            <p>
              We think beyond screens. Our products are shaped around secure
              architecture, reusable systems, clear interfaces, connected data
              and the ability to evolve.
            </p>

            <button
              type="button"
              className="outline-btn"
              onClick={() => scrollTo('contact')}
            >
              Start a conversation
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="tech-visual">
            <div className="tech-core">
              <Cpu size={28} />

              <strong>
                SKILLFORGE
                <br />
                <span>ENGINEERING LAYER</span>
              </strong>
            </div>

            <div className="tech-node n1">
              <Cloud size={17} />
              Cloud
            </div>

            <div className="tech-node n2">
              <MonitorSmartphone size={17} />
              Web + Mobile
            </div>

            <div className="tech-node n3">
              <ShieldCheck size={17} />
              Security
            </div>

            <div className="tech-node n4">
              <BarChart3 size={17} />
              Data
            </div>

            <div className="tech-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <div>
            <span className="section-kicker">LET&apos;S BUILD</span>

            <h2>
              Have a challenge worth <em>solving?</em>
            </h2>

            <p>
              Tell us what you&apos;re building, changing or trying to improve.
              Let&apos;s turn the idea into something useful.
            </p>
          </div>

          <button
            type="button"
            className="primary-btn large"
            onClick={() => scrollTo('contact')}
          >
            Start a conversation
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      
      {/* TEAM */}
      <section id="team" className="section team-section">
        <div className="container">
          <div className="section-intro centered team-heading">
            <span className="section-kicker">05 / OUR TEAM</span>

            <h2>
              Meet the people behind <em>SkillForge.</em>
            </h2>

            <p>
              A growing team focused on building meaningful products,
              supporting our customers and helping organisations get more
              value from technology.
            </p>
          </div>

          {/* FOUNDER */}
          <div className="team-profile founder-profile">
            <div className="team-photo-wrap">
              <div className="team-photo-frame">
                <Image
                  src="/mypix.jpeg"
                  alt="Engr. Martin Agoha"
                  width={620}
                  height={760}
                  className="team-photo"
                />
              </div>

              <div className="team-photo-label">
                <span>SKILLFORGE / 01</span>
                <strong>Founder &amp; Technology Lead</strong>
              </div>
            </div>

            <div className="team-bio">
              <span className="team-role">ENGR. MARTIN AGOHA</span>

              <h3>
                Building technology with
                <em> purpose.</em>
              </h3>

              <p>
                Engr. Martin Agoha is the driving force behind SkillForge
                Technologies &amp; Solutions Ltd, with a focus on technology,
                product development and practical digital solutions.
              </p>

              <p>
                Through SkillForge, he is building products that bring
                technology closer to everyday organisations and the people
                they serve. His flagship initiative is <strong>CoreOne</strong>,
                a connected education technology platform designed to simplify
                school operations, learning, communication and digital
                experiences.
              </p>

              <p>
                His approach combines engineering, product thinking and a
                commitment to building systems that are clear, useful,
                scalable and designed around real-world needs.
              </p>

              <div className="team-highlights">
                <div>
                  <span>01</span>
                  <strong>Product Development</strong>
                  <p>Turning ideas into practical digital products.</p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Technology</strong>
                  <p>Designing modern systems built for growth.</p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Innovation</strong>
                  <p>Using technology to solve meaningful problems.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SALES & SUPPORT TEAM */}
          <div className="team-members-grid">

            <article className="team-member-card">
              <div className="team-member-image">
                <Image
                  src="/Eli.png"
                  alt="Mr Etim Elijah Ime"
                  width={500}
                  height={600}
                  className="team-member-photo"
                />
              </div>

              <div className="team-member-content">
                <span className="team-member-number">02</span>
                <span className="team-member-role">SALES MANAGER</span>

                <h3>Mr Etim Elijah Ime</h3>

                <p>
                  Leads sales and business development, helping schools and
                  organisations discover the value of SkillForge solutions and
                  CoreOne while building strong customer relationships.
                </p>
              </div>
            </article>

            <article className="team-member-card">
              <div className="team-member-image">
                <Image
                  src="/ejike.jpeg"
                  alt="Mr Ejike"
                  width={500}
                  height={600}
                  className="team-member-photo"
                />
              </div>

              <div className="team-member-content">
                <span className="team-member-number">03</span>
                <span className="team-member-role">
                  PRODUCT TECHNICAL SUPPORT / SALES
                </span>

                <h3>Mr Ejike</h3>

                <p>
                  Supports customers with product-related technical needs while
                  helping prospective users understand CoreOne, its features
                  and how it can fit their operational requirements.
                </p>
              </div>
            </article>

            <article className="team-member-card">
              <div className="team-member-image">
                <Image
                  src="/favour.png"
                  alt="Mr Favour Ekezie"
                  width={500}
                  height={600}
                  className="team-member-photo"
                />
              </div>

              <div className="team-member-content">
                <span className="team-member-number">04</span>
                <span className="team-member-role">
                  PRODUCT TECHNICAL SUPPORT / SALES
                </span>

                <h3>Mr Favour Ekezie</h3>

                <p>
                  Combines technical product support with customer engagement,
                  helping users adopt CoreOne effectively while supporting
                  product demonstrations and sales conversations.
                </p>
              </div>
            </article>

          </div>

          <div className="team-bottom-note">
            <span>SKILLFORGE / TEAM</span>
            <p>
              Technology, product, support and business development working
              together to move great ideas forward.
            </p>
          </div>
        </div>
      </section>


<section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <span className="section-kicker">06 / CONTACT</span>

            <h2>
              Let&apos;s make <em>something meaningful.</em>
            </h2>

            <p>
              For CoreOne enquiries, partnerships, product support or
              technology projects, SkillForge is ready to hear from you.
            </p>

            <div className="contact-links">
              <a href="tel:080352699839">
                <span>01</span>

                <div>
                  <small>Calls</small>
                  <strong>080352699839</strong>
                </div>

                <ArrowRight />
              </a>

              <a
                href="https://wa.me/2349045531092"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>02</span>

                <div>
                  <small>WhatsApp</small>
                  <strong>09045531092</strong>
                </div>

                <ArrowRight />
              </a>

              <a href="mailto:skillforge82@gmail.com">
                <span>03</span>

                <div>
                  <small>Email</small>
                  <strong>skillforge82@gmail.com</strong>
                </div>

                <ArrowRight />
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleFormSubmit}
          >
            <div className="form-title">
              <MessageCircle size={19} />
              <span>Send an enquiry</span>
            </div>

            {formState.succeeded ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <ShieldCheck size={20} />
                </div>

                <h3>Thank you. Your enquiry has been received.</h3>

                <p>
                  Our team will review your message and get back to you as soon
                  as possible.
                </p>
              </div>
            ) : (
              <>
                <input
                  type="hidden"
                  name="_subject"
                  value="New SkillForge Website Enquiry"
                />

                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    placeholder="080352699839"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  What can we help with?
                  <select name="area" defaultValue="" required>
                    <option value="" disabled>
                      Select an area
                    </option>

                    <option value="CoreOne">CoreOne</option>
                    <option value="Technology solutions">
                      Technology solutions
                    </option>
                    <option value="Partnership">
                      Partnership
                    </option>
                    <option value="Product support">
                      Product support
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about what you need..."
                    required
                  />
                </label>

                {formState.errors && (
                  <p className="form-error">
                    Something went wrong while sending your enquiry. Please
                    try again.
                  </p>
                )}

                <button
                  className="primary-btn"
                  type="submit"
                  disabled={formState.submitting}
                >
                  {formState.submitting
                    ? 'Sending enquiry...'
                    : 'Send enquiry'}

                  <ArrowRight size={16} />
                </button>

                <p className="form-note">
                  Your enquiry will be securely submitted through Formspree.
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <span className="brand-logo footer-logo">
              <Image
                src="/logo.png"
                alt="SkillForge Technologies & Solutions Ltd"
                width={150}
                height={48}
              />
            </span>

            <div>
              <strong>SKILLFORGE</strong>
              <small>Technologies &amp; Solutions Ltd</small>
            </div>
          </div>

          <div className="footer-links">
            <button type="button" onClick={() => scrollTo('company')}>
              Company
            </button>

            <button type="button" onClick={() => scrollTo('coreone')}>
              CoreOne
            </button>

            <button type="button" onClick={() => scrollTo('solutions')}>
              Solutions
            </button>

            <button type="button" onClick={() => scrollTo('team')}>
              Team
            </button>

            <button type="button" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </div>

          <div className="contact-details">
            <a className="contact-detail" href="tel:080352699839">
              <span>Calls</span>
              <strong>080352699839</strong>
            </a>

            <a
              className="contact-detail"
              href="https://wa.me/2349045531092"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp</span>
              <strong>09045531092</strong>
            </a>

            <a
              className="contact-detail"
              href="mailto:skillforge82@gmail.com"
            >
              <span>Email</span>
              <strong>skillforge82@gmail.com</strong>
            </a>
          </div>

          <button
            type="button"
            className="back-top"
            onClick={() => scrollTo('home')}
          >
            Back to top ↑
          </button>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 SkillForge Technologies &amp; Solutions Ltd. All rights
            reserved.
          </span>

          <span>Building what moves tomorrow.</span>
        </div>
      </footer>
    </main>
  );
}
