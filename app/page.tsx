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

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  number: string;
  bio: string[];
  highlights?: { number: string; title: string; desc: string }[];
};

const solutions: Solution[] = [
  {
    icon: GraduationCap,
    title: 'EdTech Solutions',
    text: 'Digital infrastructure bringing school operations, learning, and communication into one unified platform.',
  },
  {
    icon: Code2,
    title: 'Software & Product Engineering',
    text: 'Purpose-built web and mobile products engineered for real workflows and measurable outcomes.',
  },
  {
    icon: Network,
    title: 'Digital Transformation',
    text: 'Modernize manual processes with connected systems, automation, and practical technology strategy.',
  },
];

const coreOneFeatures: CoreOneFeature[] = [
  {
    title: 'School Administration',
    text: 'A central workspace for day-to-day school operations and records.',
    icon: Layers3,
  },
  {
    title: 'Student & Parent Portals',
    text: 'One connected digital experience for students, families, and administrators.',
    icon: UsersRound,
  },
  {
    title: 'Learning & Assessment',
    text: 'Attendance, CBT, gradebooks, results, and learning tools in one place.',
    icon: BookOpen,
  },
  {
    title: 'Security & Access',
    text: 'Role-based access control built for multi-tenant educational institutions.',
    icon: ShieldCheck,
  },
];

const stats: Stat[] = [
  { num: '01', label: 'Flagship Product', value: 'CoreOne' },
  { num: '02', label: 'Experience Layers', value: 'Web + Mobile' },
  { num: '03', label: 'Core Focus', value: 'People + Data' },
  { num: '04', label: 'Built For', value: 'Scale' },
];

const executiveMember: TeamMember = {
  id: 'martin',
  name: 'Engr. Martin Agoha',
  role: 'Founder & Technology Lead',
  image: '/mypix.jpeg',
  number: '01',
  bio: [
    'Engr. Martin Agoha is the driving force behind SkillForge Technologies & Solutions Ltd, with a focus on technology, product development, and practical digital solutions.',
    'Through SkillForge, he builds products that bring technology closer to everyday organizations and the people they serve. His flagship initiative is CoreOne, a connected education technology platform designed to simplify school operations, learning, and communication.',
    'His approach combines engineering, product thinking, and a commitment to building systems that are clear, useful, scalable, and designed around real-world needs.',
  ],
  highlights: [
    { number: '01', title: 'Product Development', desc: 'Turning ideas into practical digital products.' },
    { number: '02', title: 'Technology', desc: 'Designing modern systems built for growth.' },
    { number: '03', title: 'Innovation', desc: 'Using technology to solve meaningful problems.' },
  ],
};

const subTeamMembers: TeamMember[] = [
  {
    id: 'elime',
    name: 'Mr Etim Elijah Ime',
    role: 'Sales Manager',
    image: '/Eli.png',
    number: '02',
    bio: [
      'Leads sales and business development, helping schools and organizations discover the value of SkillForge solutions and CoreOne while building strong customer relationships.',
    ],
  },

   {
    id: 'joshua',
    name: 'Joshua Okpechi',
    role: 'Sales Manager',
    image: '/joshua.png',
    number: '02',
    bio: [
      'Leads sales and business development, helping schools and organizations discover the value of SkillForge solutions and CoreOne while building strong customer relationships.',
    ],
  },
  

  {
    id: 'victor',
    name: 'Mr Victor',
    role: 'Product Technical Support / Sales',
    image: '/victor.png',
    number: '03',
    bio: [
      'Supports customers with product-related technical needs while helping prospective users understand CoreOne, its features, and operational setup.',
    ],
  },
  {
    id: 'ejike',
    name: 'Mr Ejike',
    role: 'Product Technical Support / Sales',
    image: '/ejike.jpeg',
    number: '04',
    bio: [
      'Supports customers with product-related technical needs while helping prospective users understand CoreOne, its features, and operational setup.',
    ],
  },

  {
    id: 'favour',
    name: 'Mr Favour Ekezie',
    role: 'Product Technical Support / Sales',
    image: '/favour.png',
    number: '05',
    bio: [
      'Combines technical product support with customer engagement, helping users adopt CoreOne effectively while supporting product demonstrations.',
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xrpggbar';
  const [formState, handleFormSubmit] = useForm(formId);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell" style={{ color: '#090d16', fontSize: '1.05rem', lineHeight: '1.6' }}>
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
              <strong style={{ color: '#020617', fontSize: '1.15rem' }}>SKILLFORGE</strong>
              <small style={{ color: '#0f172a', fontSize: '0.85rem', fontWeight: 600 }}>Technologies &amp; Solutions Ltd</small>
            </span>
          </button>

          <nav
            className={`main-nav ${menuOpen ? 'open' : ''}`}
            aria-label="Main navigation"
            style={{ color: '#020617', fontSize: '1rem', fontWeight: 600 }}
          >
            <button type="button" onClick={() => scrollTo('company')}>Company</button>
            <button type="button" onClick={() => scrollTo('coreone')}>CoreOne</button>
            <button type="button" onClick={() => scrollTo('solutions')}>Solutions</button>
            <button type="button" onClick={() => scrollTo('technology')}>Technology</button>
            <button type="button" onClick={() => scrollTo('team')}>Team</button>
            <button type="button" onClick={() => scrollTo('contact')}>Contact</button>
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
            <div className="eyebrow" style={{ color: '#020617', fontWeight: 700, fontSize: '0.95rem' }}>
              <span className="pulse-dot" />
              Technology. Products. Possibility.
            </div>

            <h1 style={{ color: '#020617', fontSize: '3rem', lineHeight: '1.15', fontWeight: 800 }}>
              We build digital products that <em>move people forward.</em>
            </h1>

            <p style={{ color: '#0f172a', fontSize: '1.25rem', lineHeight: '1.7', fontWeight: 500 }}>
              SkillForge Technologies &amp; Solutions Ltd is a product-driven company building modern software, digital platforms, and practical solutions for forward-thinking organizations.
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
                style={{ color: '#020617', fontWeight: 700 }}
              >
                <span className="play">
                  <Play size={13} fill="currentColor" />
                </span>
                Discover SkillForge
              </button>
            </div>

            <div className="hero-proof">
              <div>
                <span style={{ color: '#020617', fontSize: '1.5rem', fontWeight: 800 }}>01</span>
                <p style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 600 }}>Company behind CoreOne</p>
              </div>

              <div>
                <span style={{ color: '#020617', fontSize: '1.5rem', fontWeight: 800 }}>∞</span>
                <p style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 600 }}>Built to grow with you</p>
              </div>

              <div>
                <span style={{ color: '#020617', fontSize: '1.5rem', fontWeight: 800 }}>24/7</span>
                <p style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 600 }}>Digital-first mindset</p>
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

              <p style={{ fontSize: '1rem' }}>
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
        </div>
      </section>

      <section id="company" className="section company-section">
        <div className="container">
          <div className="section-intro split">
            <div>
              <span className="section-kicker" style={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.85rem' }}>01 / THE COMPANY</span>

              <h2 style={{ color: '#020617', fontSize: '2.5rem', lineHeight: '1.2' }}>
                Technology is only powerful when it{' '}
                <em>solves something real.</em>
              </h2>
            </div>

            <p style={{ color: '#0f172a', fontSize: '1.15rem', lineHeight: '1.65' }}>
              We combine product thinking, engineering, and business understanding to build technology that is useful today and ready for tomorrow.
            </p>
          </div>

          <div className="company-grid">
            <article className="manifesto-card">
              <div className="manifesto-number">SF / 01</div>

              <h3 style={{ fontSize: '1.75rem', lineHeight: '1.3' }}>
                Built with purpose.
                <br />
                <em>Engineered for impact.</em>
              </h3>

              <p style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                SkillForge exists to design and deliver technology that improves how organizations work, how people interact with systems, and how decisions are made.
              </p>

              <button
                type="button"
                className="text-link"
                onClick={() => scrollTo('contact')}
                style={{ fontSize: '1rem', fontWeight: 700 }}
              >
                Work with SkillForge
                <MoveUpRight size={15} />
              </button>
            </article>

            <div className="principles">
              <div className="principle">
                <span style={{ color: '#4f46e5', fontSize: '1.25rem', fontWeight: 800 }}>01</span>

                <div>
                  <h4 style={{ color: '#020617', fontSize: '1.2rem', fontWeight: 700 }}>Product-led</h4>

                  <p style={{ color: '#0f172a', fontSize: '1.05rem' }}>
                    We build around outcomes and the user journey—not technology for technology&apos;s sake.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span style={{ color: '#4f46e5', fontSize: '1.25rem', fontWeight: 800 }}>02</span>

                <div>
                  <h4 style={{ color: '#020617', fontSize: '1.2rem', fontWeight: 700 }}>Human-centred</h4>

                  <p style={{ color: '#0f172a', fontSize: '1.05rem' }}>
                    Interfaces should feel clear, systems understandable, and user experiences respectful.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span style={{ color: '#4f46e5', fontSize: '1.25rem', fontWeight: 800 }}>03</span>

                <div>
                  <h4 style={{ color: '#020617', fontSize: '1.2rem', fontWeight: 700 }}>Built to scale</h4>

                  <p style={{ color: '#0f172a', fontSize: '1.05rem' }}>
                    Architected so products grow seamlessly alongside the organizations they serve.
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
              <span className="section-kicker" style={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.85rem' }}>02 / FLAGSHIP PRODUCT</span>

              <div className="coreone-wordmark" style={{ color: '#020617', fontSize: '3rem', fontWeight: 900 }}>
                CORE<span>ONE</span>
              </div>
            </div>

            <div>
              <span className="live-pill">
                <span />
                In active development
              </span>

              <p style={{ color: '#0f172a', fontSize: '1.15rem', lineHeight: '1.6' }}>
                CoreOne is SkillForge&apos;s flagship EdTech platform—connecting school administration, learning, communication, and analytics in one modern ecosystem.
              </p>
            </div>
          </div>

          <div className="coreone-showcase">
            <div className="showcase-copy">
              <span className="mini-label" style={{ color: '#020617', fontWeight: 700, fontSize: '0.85rem' }}>
                ONE CORE. EVERY EXPERIENCE.
              </span>

              <h3 style={{ color: '#020617', fontSize: '2.25rem', lineHeight: '1.2' }}>
                Run the school.
                <br />
                <em>Empower the people.</em>
              </h3>

              <p style={{ color: '#0f172a', fontSize: '1.1rem' }}>
                Designed to give administrators, teachers, students, and parents the visibility and tools they need.
              </p>

              <div className="feature-list">
                {coreOneFeatures.map((feature) => {
                  const FeatureIcon = feature.icon;

                  return (
                    <div className="feature-item" key={feature.title} style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
                      <span className="feature-icon" style={{ color: '#4f46e5' }}>
                        <FeatureIcon size={20} />
                      </span>

                      <div>
                        <b style={{ color: '#020617', fontSize: '1.05rem' }}>{feature.title}</b>
                        <p style={{ color: '#0f172a', fontSize: '0.95rem' }}>{feature.text}</p>
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
              <div key={stat.num} className="stat-box" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
                <span style={{ color: '#4f46e5', fontSize: '1.25rem', fontWeight: 800 }}>{stat.num}</span>

                <div>
                  <small style={{ color: '#0f172a', fontSize: '0.85rem', fontWeight: 700 }}>{stat.label}</small>
                  <strong style={{ color: '#020617', fontSize: '1.15rem' }}>{stat.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            
      <section id="solutions" className="section solutions-section">
        <div className="container">
          <div className="section-intro centered">
            <span
              className="section-kicker"
              style={{
                color: '#4f46e5',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              03 / WHAT WE DO
            </span>

            <h2 style={{ color: '#020617', fontSize: '2.5rem' }}>
              Solutions built around <em>real operations.</em>
            </h2>

            <p style={{ color: '#0f172a', fontSize: '1.15rem' }}>
              We focus on practical systems that create clarity, speed, and better experiences.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map((solution, index) => {
              const SolutionIcon = solution.icon;

              return (
                <article
                  className="solution-card"
                  key={solution.title}
                  style={{
                    background: '#ffffff',
                    borderColor: '#cbd5e1',
                  }}
                >
                  <div
                    className="solution-index"
                    style={{
                      color: '#64748b',
                      fontWeight: 700,
                    }}
                  >
                    0{index + 1}
                  </div>

                  <div
                    className="solution-icon"
                    style={{ color: '#4f46e5' }}
                  >
                    <SolutionIcon size={32} />
                  </div>

                  <h3
                    style={{
                      color: '#020617',
                      fontSize: '1.35rem',
                    }}
                  >
                    {solution.title}
                  </h3>

                  <p
                    style={{
                      color: '#0f172a',
                      fontSize: '1.05rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {solution.text}
                  </p>

                  <div className="solution-line" />
                </article>
              );
            })}
          </div>

          {/* Product Solutions CTA */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '3rem',
            }}
          >
            <a
              href="https://skillforgetech-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.9rem 1.6rem',
                background: '#4f46e5',
                color: '#ffffff',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 8px 20px rgba(79, 70, 229, 0.18)',
              }}
            >
              Click to Visit Our Product Solutions
            </a>
          </div>
        </div>
      </section>



      <section id="technology" className="section technology-section">
        <div className="container tech-grid">
          <div>
            <span className="section-kicker" style={{ color: '#a5b4fc', fontWeight: 700 }}>04 / TECHNOLOGY</span>

            <h2 style={{ fontSize: '2.5rem' }}>
              Modern architecture. <em>Practical engineering.</em>
            </h2>

            <p style={{ fontSize: '1.15rem', color: '#e2e8f0', lineHeight: '1.6' }}>
              We think beyond screens. Our products are shaped around secure architecture, reusable systems, clear interfaces, and connected data.
            </p>

            <button
              type="button"
              className="outline-btn"
              onClick={() => scrollTo('contact')}
              style={{ fontSize: '1rem' }}
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

            <h2 style={{ fontSize: '2.5rem' }}>
              Have a challenge worth <em>solving?</em>
            </h2>

            <p style={{ fontSize: '1.15rem' }}>
              Tell us what you&apos;re building, changing, or trying to improve. Let&apos;s turn the idea into something useful.
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

      {/* ORGANOGRAM TEAM SECTION */}
      <section id="team" className="section team-section">
        <div className="container">
          <div className="section-intro centered team-heading">
            <span className="section-kicker" style={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.85rem' }}>05 / ORGANOGRAM</span>

            <h2 style={{ color: '#020617', fontSize: '2.5rem' }}>
              Organizational <em>Structure.</em>
            </h2>

            <p style={{ color: '#0f172a', fontSize: '1.15rem' }}>
              Click any node in the organogram to view complete profile details.
            </p>
          </div>

          <div style={{ maxWidth: '1000px', margin: '2rem auto 0 auto', position: 'relative' }}>
            {/* Executive Level (Top Node) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setSelectedMember(executiveMember)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: '#ffffff',
                  border: '2px solid #4f46e5',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '280px',
                  boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.15)',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid #4f46e5',
                  marginBottom: '0.85rem',
                }}>
                  <Image
                    src={executiveMember.image}
                    alt={executiveMember.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <strong style={{ color: '#020617', fontSize: '1.1rem', fontWeight: 800 }}>{executiveMember.name}</strong>
                <span style={{ color: '#4f46e5', fontSize: '0.85rem', marginTop: '0.2rem', fontWeight: 700 }}>{executiveMember.role}</span>
                <span style={{
                  marginTop: '0.85rem',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  background: '#4f46e5',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                }}>
                  Executive Lead
                </span>
              </button>
            </div>

            {/* Connecting Vertical Line from Executive */}
            <div style={{
              width: '2px',
              height: '40px',
              backgroundColor: '#cbd5e1',
              margin: '0 auto',
            }} />

            {/* Horizontal Branching Bar */}
            <div style={{
              position: 'relative',
              maxWidth: '780px',
              margin: '0 auto',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '12.5%',
                right: '12.5%',
                height: '2px',
                backgroundColor: '#cbd5e1',
              }} />

              {/* Subordinate Grid Nodes */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1.5rem',
                paddingTop: '20px',
              }}>
                {subTeamMembers.map((member) => (
                  <div key={member.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Vertical Drop Line to Node */}
                    <div style={{
                      width: '2px',
                      height: '20px',
                      backgroundColor: '#cbd5e1',
                      marginTop: '-20px',
                    }} />

                    <button
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '12px',
                        padding: '1.25rem 0.75rem',
                        cursor: 'pointer',
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      <div style={{
                        position: 'relative',
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid #64748b',
                        marginBottom: '0.75rem',
                      }}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <strong style={{ color: '#020617', fontSize: '0.95rem', lineHeight: '1.3', fontWeight: 700 }}>{member.name}</strong>
                      <span style={{ color: '#0f172a', fontSize: '0.8rem', marginTop: '0.25rem', fontWeight: 600 }}>{member.role}</span>
                      <span style={{
                        marginTop: 'auto',
                        paddingTop: '0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: '#4f46e5',
                      }}>
                        View profile →
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM DETAILS MODAL */}
      {selectedMember && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(2, 6, 23, 0.8)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              overflow: 'hidden',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid #cbd5e1',
              backgroundColor: '#f8fafc',
            }}>
              <div>
                <span style={{ color: '#4f46e5', fontSize: '0.8rem', fontWeight: 800 }}>SKILLFORGE / {selectedMember.number}</span>
                <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#020617', fontWeight: 800 }}>{selectedMember.name}</h3>
                <small style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.85rem' }}>{selectedMember.role}</small>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#020617',
                  padding: '0.5rem',
                }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{
                  position: 'relative',
                  width: '130px',
                  height: '150px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}>
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: '240px' }}>
                  {selectedMember.bio.map((para, idx) => (
                    <p key={idx} style={{ color: '#0f172a', fontSize: '1rem', lineHeight: '1.65', marginTop: idx === 0 ? 0 : '0.85rem' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {selectedMember.highlights && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '0.85rem',
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid #cbd5e1',
                }}>
                  {selectedMember.highlights.map((h) => (
                    <div key={h.number} style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                      <span style={{ color: '#4f46e5', fontSize: '0.8rem', fontWeight: 800 }}>{h.number}</span>
                      <strong style={{ display: 'block', color: '#020617', fontSize: '0.9rem', margin: '0.2rem 0', fontWeight: 700 }}>{h.title}</strong>
                      <p style={{ color: '#0f172a', fontSize: '0.8rem', margin: 0 }}>{h.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <span className="section-kicker" style={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.85rem' }}>06 / CONTACT</span>

            <h2 style={{ color: '#020617', fontSize: '2.5rem' }}>
              Let&apos;s make <em>something meaningful.</em>
            </h2>

            <p style={{ color: '#0f172a', fontSize: '1.15rem' }}>
              For CoreOne enquiries, partnerships, product support, or technology projects, SkillForge is ready to hear from you.
            </p>

            <div className="contact-links">
              <a href="tel:08035269983" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
                <span style={{ color: '#4f46e5', fontWeight: 800 }}>01</span>

                <div>
                  <small style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.85rem' }}>Calls</small>
                  <strong style={{ color: '#020617', fontSize: '1.1rem' }}>08035269983</strong>
                </div>

                <ArrowRight />
              </a>

              <a
                href="https://wa.me/2349045531092"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#ffffff', borderColor: '#cbd5e1' }}
              >
                <span style={{ color: '#4f46e5', fontWeight: 800 }}>02</span>

                <div>
                  <small style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.85rem' }}>WhatsApp</small>
                  <strong style={{ color: '#020617', fontSize: '1.1rem' }}>09045531092</strong>
                </div>

                <ArrowRight />
              </a>

              <a href="mailto:skillforge82@gmail.com" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
                <span style={{ color: '#4f46e5', fontWeight: 800 }}>03</span>

                <div>
                  <small style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.85rem' }}>Email</small>
                  <strong style={{ color: '#020617', fontSize: '1.1rem' }}>skillforge82@gmail.com</strong>
                </div>

                <ArrowRight />
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleFormSubmit}
            style={{ background: '#ffffff', borderColor: '#cbd5e1' }}
          >
            <div className="form-title" style={{ color: '#020617', fontSize: '1.2rem', fontWeight: 700 }}>
              <MessageCircle size={20} />
              <span>Send an enquiry</span>
            </div>

            {formState.succeeded ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <ShieldCheck size={20} />
                </div>

                <h3 style={{ color: '#020617', fontSize: '1.2rem' }}>Thank you. Your enquiry has been received.</h3>

                <p style={{ color: '#0f172a', fontSize: '1rem' }}>
                  Our team will review your message and get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <>
                <input
                  type="hidden"
                  name="_subject"
                  value="New SkillForge Website Enquiry"
                />

                <label style={{ color: '#020617', fontWeight: 700, fontSize: '0.95rem' }}>
                  Name
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    style={{ color: '#020617', borderColor: '#94a3b8', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ color: '#020617', fontWeight: 700, fontSize: '0.95rem' }}>
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                    style={{ color: '#020617', borderColor: '#94a3b8', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ color: '#020617', fontWeight: 700, fontSize: '0.95rem' }}>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    placeholder="08035269983"
                    autoComplete="tel"
                    style={{ color: '#020617', borderColor: '#94a3b8', fontSize: '1rem' }}
                  />
                </label>

                <label style={{ color: '#020617', fontWeight: 700, fontSize: '0.95rem' }}>
                  What can we help with?
                  <select name="area" defaultValue="" required style={{ color: '#020617', borderColor: '#94a3b8', fontSize: '1rem' }}>
                    <option value="" disabled>
                      Select an area
                    </option>
                    <option value="CoreOne">CoreOne</option>
                    <option value="Technology solutions">Technology solutions</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Product support">Product support</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label style={{ color: '#020617', fontWeight: 700, fontSize: '0.95rem' }}>
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about what you need..."
                    required
                    style={{ color: '#020617', borderColor: '#94a3b8', fontSize: '1rem' }}
                  />
                </label>

                {formState.errors && (
                  <p className="form-error" style={{ color: '#dc2626', fontWeight: 600 }}>
                    Something went wrong while sending your enquiry. Please try again.
                  </p>
                )}

                <button
                  className="primary-btn"
                  type="submit"
                  disabled={formState.submitting}
                  style={{ fontSize: '1rem' }}
                >
                  {formState.submitting
                    ? 'Sending enquiry...'
                    : 'Send enquiry'}

                  <ArrowRight size={16} />
                </button>

                <p className="form-note" style={{ color: '#0f172a', fontWeight: 500 }}>
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
              <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>SKILLFORGE</strong>
              <small style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>Technologies &amp; Solutions Ltd</small>
            </div>
          </div>

          <div className="footer-links" style={{ fontSize: '0.95rem' }}>
            <button type="button" onClick={() => scrollTo('company')}>Company</button>
            <button type="button" onClick={() => scrollTo('coreone')}>CoreOne</button>
            <button type="button" onClick={() => scrollTo('solutions')}>Solutions</button>
            <button type="button" onClick={() => scrollTo('team')}>Team</button>
            <button type="button" onClick={() => scrollTo('contact')}>Contact</button>
          </div>

          <div className="contact-details">
            <a className="contact-detail" href="tel:08035269983">
              <span style={{ color: '#cbd5e1' }}>Calls</span>
              <strong style={{ color: '#ffffff', fontSize: '1rem' }}>08035269983</strong>
            </a>

            <a
              className="contact-detail"
              href="https://wa.me/2349045531092"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: '#cbd5e1' }}>WhatsApp</span>
              <strong style={{ color: '#ffffff', fontSize: '1rem' }}>09045531092</strong>
            </a>

            <a className="contact-detail" href="mailto:skillforge82@gmail.com">
              <span style={{ color: '#cbd5e1' }}>Email</span>
              <strong style={{ color: '#ffffff', fontSize: '1rem' }}>skillforge82@gmail.com</strong>
            </a>
          </div>

          <button
            type="button"
            className="back-top"
            onClick={() => scrollTo('home')}
            style={{ fontSize: '0.9rem' }}
          >
            Back to top ↑
          </button>
        </div>

        <div className="container footer-bottom" style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
          <span>
            © 2026 SkillForge Technologies &amp; Solutions Ltd. All rights reserved.
          </span>

          <span>Building what moves tomorrow.</span>
        </div>
      </footer>
    </main>
  );
}