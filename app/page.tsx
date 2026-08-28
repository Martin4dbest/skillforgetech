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
    text: 'Unified digital platforms connecting school management, learning, and communication.',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    text: 'Purpose-built web and mobile apps engineered for real-world business outcomes.',
  },
  {
    icon: Network,
    title: 'Digital Transformation',
    text: 'Automating manual processes with modern architecture and smart data workflows.',
  },
];

const coreOneFeatures: CoreOneFeature[] = [
  {
    title: 'School Administration',
    text: 'Centralized workspace for day-to-day operations and student records.',
    icon: Layers3,
  },
  {
    title: 'Student & Parent Portal',
    text: 'Seamless interaction and real-time updates for families and staff.',
    icon: UsersRound,
  },
  {
    title: 'Learning & Assessment',
    text: 'CBT, attendance tracking, report cards, and interactive tools.',
    icon: BookOpen,
  },
  {
    title: 'Enterprise Security',
    text: 'Role-based access controls for multi-tenant educational institutions.',
    icon: ShieldCheck,
  },
];

const stats: Stat[] = [
  { num: '01', label: 'Flagship Product', value: 'CoreOne' },
  { num: '02', label: 'Platforms', value: 'Web + Mobile' },
  { num: '03', label: 'Core Focus', value: 'People & Data' },
  { num: '04', label: 'Architecture', value: 'Built to Scale' },
];

const teamMembers: TeamMember[] = [
  {
    id: 'martin',
    name: 'Engr. Martin Agoha',
    role: 'Founder & Technology Lead',
    image: '/mypix.jpeg',
    number: '01',
    bio: [
      'Engr. Martin Agoha is the driving force behind SkillForge Technologies & Solutions Ltd, with a focus on technology, product development and practical digital solutions.',
      'Through SkillForge, he is building products that bring technology closer to everyday organisations and the people they serve. His flagship initiative is CoreOne, a connected education technology platform designed to simplify school operations, learning, communication and digital experiences.',
      'His approach combines engineering, product thinking and a commitment to building systems that are clear, useful, scalable and designed around real-world needs.',
    ],
    highlights: [
      { number: '01', title: 'Product Development', desc: 'Turning ideas into practical digital products.' },
      { number: '02', title: 'Technology', desc: 'Designing modern systems built for growth.' },
      { number: '03', title: 'Innovation', desc: 'Using technology to solve meaningful problems.' },
    ],
  },
  {
    id: 'elime',
    name: 'Mr Etim Elijah Ime',
    role: 'Sales Manager',
    image: '/Eli.png',
    number: '02',
    bio: [
      'Leads sales and business development, helping schools and organisations discover the value of SkillForge solutions and CoreOne while building strong customer relationships.',
    ],
  },
  {
    id: 'victor',
    name: 'Mr Victor',
    role: 'Product Technical Support / Sales',
    image: '/victor.png',
    number: '03',
    bio: [
      'Supports customers with product-related technical needs while helping prospective users understand CoreOne, its features and how it can fit their operational requirements.',
    ],
  },
  {
    id: 'ejike',
    name: 'Mr Ejike',
    role: 'Product Technical Support / Sales',
    image: '/ejike.jpeg',
    number: '04',
    bio: [
      'Supports customers with product-related technical needs while helping prospective users understand CoreOne, its features and how it can fit their operational requirements.',
    ],
  },
  {
    id: 'favour',
    name: 'Mr Favour Ekezie',
    role: 'Product Technical Support / Sales',
    image: '/favour.png',
    number: '05',
    bio: [
      'Combines technical product support with customer engagement, helping users adopt CoreOne effectively while supporting product demonstrations and sales conversations.',
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
    <main className="site-shell bg-slate-50 text-slate-900 font-sans antialiased">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      {/* HEADER */}
      <header className="site-header sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container nav-wrap flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
          <button
            type="button"
            className="brand flex items-center gap-3 text-left"
            onClick={() => scrollTo('home')}
            aria-label="Go to home"
          >
            <span className="brand-logo">
              <Image
                src="/logo.png"
                alt="SkillForge Technologies & Solutions Ltd"
                width={160}
                height={50}
                priority
              />
            </span>
            <span className="brand-copy flex flex-col">
              <strong className="text-slate-950 font-bold text-lg tracking-wide">SKILLFORGE</strong>
              <small className="text-slate-600 text-xs font-medium">Technologies &amp; Solutions Ltd</small>
            </span>
          </button>

          <nav
            className={`main-nav text-slate-800 font-semibold ${menuOpen ? 'open' : ''}`}
            aria-label="Main navigation"
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
            className="nav-cta bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            onClick={() => scrollTo('contact')}
          >
            Talk to us
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            className="menu-toggle text-slate-900"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero py-20 px-6">
        <div className="container hero-grid max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-copy space-y-6">
            <div className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-900 font-semibold text-sm">
              <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Technology. Products. Possibility.
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 leading-tight">
              We build software that <em className="italic text-indigo-600">moves businesses forward.</em>
            </h1>

            <p className="text-slate-700 text-lg leading-relaxed font-normal">
              SkillForge crafts high-performance software, modern digital platforms, and scalable technology solutions tailored for forward-thinking organizations.
            </p>

            <div className="hero-actions flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                className="primary-btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-2"
                onClick={() => scrollTo('coreone')}
              >
                Explore CoreOne
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="ghost-btn border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold px-6 py-3 rounded-lg transition-all flex items-center gap-2"
                onClick={() => scrollTo('company')}
              >
                <span className="play text-indigo-600">
                  <Play size={13} fill="currentColor" />
                </span>
                Discover SkillForge
              </button>
            </div>

            <div className="hero-proof flex items-center gap-8 pt-6 border-t border-slate-200">
              <div>
                <span className="text-xl font-bold text-slate-900">01</span>
                <p className="text-sm font-medium text-slate-600">Creators of CoreOne</p>
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">∞</span>
                <p className="text-sm font-medium text-slate-600">Built for scale</p>
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">24/7</span>
                <p className="text-sm font-medium text-slate-600">Digital Reliability</p>
              </div>
            </div>
          </div>

          {/* CoreOne Display */}
          <div className="hero-stage relative bg-slate-900 text-white p-8 rounded-2xl shadow-xl border border-slate-800">
            <div className="core-card space-y-4">
              <div className="core-card-top flex justify-between items-center">
                <span className="product-badge bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
                  <Sparkles size={13} />
                  FLAGSHIP PRODUCT
                </span>
                <span className="status text-xs text-emerald-400 font-bold tracking-wider">LIVE ECOSYSTEM</span>
              </div>

              <div className="core-logo text-3xl font-black text-white tracking-wider">
                CORE<span className="text-indigo-400">ONE</span>
              </div>

              <p className="text-slate-300 text-sm font-medium">
                The connected operating system for modern school management.
              </p>

              <div className="dashboard-window bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="window-bar flex items-center gap-2 text-xs text-slate-400 mb-3 pb-2 border-b border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <i className="not-italic text-slate-400 ml-2">CoreOne Dashboard Workspace</i>
                </div>

                <div className="dash-body space-y-3">
                  <div className="dash-heading flex justify-between text-xs font-semibold text-slate-300">
                    <span>School Overview</span>
                    <small className="text-indigo-400">2026 / 2027</small>
                  </div>
                  <div className="metric-row grid grid-cols-3 gap-2">
                    <div className="h-8 bg-slate-800 rounded-md" />
                    <div className="h-8 bg-slate-800 rounded-md" />
                    <div className="h-8 bg-slate-800 rounded-md" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-2 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">
                  <UsersRound size={16} className="text-indigo-400" />
                  <span>Integrated Portals</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Role-Based Access</span>
                </div>
              </div>
            </div>

            <div className="stage-note mt-6 text-xs text-slate-400 flex items-center gap-2">
              <Zap size={15} className="text-yellow-400" />
              Unified infrastructure. Endless capability.
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="ticker-section bg-slate-900 text-white py-4 overflow-hidden border-y border-slate-800" aria-label="Our areas of focus">
        <div className="ticker-track flex justify-around font-bold tracking-widest text-xs uppercase text-slate-300">
          <span>Software Engineering</span> •
          <span>EdTech Platforms</span> •
          <span>Digital Transformation</span> •
          <span>Technical Support</span> •
          <span>Cloud Solutions</span>
        </div>
      </section>

      {/* COMPANY SECTION */}
      <section id="company" className="section py-20 px-6 bg-white border-b border-slate-200">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="section-intro split grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <span className="section-kicker font-bold text-indigo-600 text-xs tracking-widest uppercase">01 / ABOUT US</span>
              <h2 className="text-3xl font-extrabold text-slate-950 mt-2">
                Technology engineered to solve <em className="italic text-indigo-600">real challenges.</em>
              </h2>
            </div>
            <p className="text-slate-700 text-base leading-relaxed font-normal">
              We integrate product design, engineering, and digital strategy to build fast, scalable tools that drive actual operational success.
            </p>
          </div>

          <div className="company-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="manifesto-card bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="manifesto-number text-indigo-400 font-mono text-sm mb-4">SF / 01</div>
                <h3 className="text-2xl font-bold leading-tight mb-4">
                  Purpose-built design. <br />
                  <em className="italic text-indigo-300">Measurable impact.</em>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  SkillForge delivers software solutions designed to simplify workflows, enhance productivity, and improve organizational decision-making.
                </p>
              </div>

              <button
                type="button"
                className="text-link inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 text-sm"
                onClick={() => scrollTo('contact')}
              >
                Work with SkillForge
                <MoveUpRight size={15} />
              </button>
            </article>

            <div className="principles space-y-4">
              <div className="principle p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <span className="font-mono text-indigo-600 font-bold">01</span>
                <div>
                  <h4 className="font-bold text-slate-950">Product-Led</h4>
                  <p className="text-slate-700 text-sm mt-1">Focused strictly on real user outcomes, efficiency, and continuous usability.</p>
                </div>
              </div>

              <div className="principle p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <span className="font-mono text-indigo-600 font-bold">02</span>
                <div>
                  <h4 className="font-bold text-slate-950">Human-Centered</h4>
                  <p className="text-slate-700 text-sm mt-1">Intuitive interfaces designed to keep complex tasks simple and understandable.</p>
                </div>
              </div>

              <div className="principle p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <span className="font-mono text-indigo-600 font-bold">03</span>
                <div>
                  <h4 className="font-bold text-slate-950">Scalable Systems</h4>
                  <p className="text-slate-700 text-sm mt-1">Built with modular technologies that expand effortlessly alongside your organization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COREONE SECTION */}
      <section id="coreone" className="section py-20 px-6 bg-slate-50">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="coreone-head flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8">
            <div>
              <span className="section-kicker font-bold text-indigo-600 text-xs tracking-widest uppercase">02 / FLAGSHIP PRODUCT</span>
              <div className="coreone-wordmark text-4xl font-black text-slate-950 tracking-wider mt-1">
                CORE<span className="text-indigo-600">ONE</span>
              </div>
            </div>

            <div className="max-w-xl">
              <span className="live-pill inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                In Active Deployment
              </span>
              <p className="text-slate-700 font-medium">
                CoreOne is our all-in-one EdTech platform connecting administration, academics, automated reporting, and parent communication into one secure environment.
              </p>
            </div>
          </div>

          <div className="coreone-showcase grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="showcase-copy space-y-6">
              <span className="mini-label text-xs font-bold tracking-wider text-slate-500 uppercase">ONE ECOSYSTEM. COMPLETE CONTROL.</span>
              <h3 className="text-3xl font-extrabold text-slate-950 leading-snug">
                Streamline administration. <br />
                <em className="italic text-indigo-600">Empower educators.</em>
              </h3>

              <div className="feature-list grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {coreOneFeatures.map((feature) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div className="feature-item p-4 rounded-xl bg-white border border-slate-200 space-y-2 shadow-sm" key={feature.title}>
                      <span className="feature-icon text-indigo-600 inline-block">
                        <FeatureIcon size={20} />
                      </span>
                      <b className="block text-slate-950 font-bold text-sm">{feature.title}</b>
                      <p className="text-slate-600 text-xs leading-normal">{feature.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white space-y-4">
              <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-800 pb-3">
                <span className="font-bold text-white">CoreOne System Preview</span>
                <span>Active Portal</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-slate-800 rounded-lg">
                  <div className="text-xs text-slate-400">Welcome Back</div>
                  <div className="text-base font-bold text-white">School Operations Dashboard</div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 bg-slate-800/80 rounded-lg text-center">
                    <small className="block text-slate-400 text-xs">Students</small>
                    <strong className="text-indigo-400 text-lg">1,842</strong>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-lg text-center">
                    <small className="block text-slate-400 text-xs">Attendance</small>
                    <strong className="text-emerald-400 text-lg">94.8%</strong>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-lg text-center">
                    <small className="block text-slate-400 text-xs">Classes</small>
                    <strong className="text-indigo-400 text-lg">38</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.num} className="stat-box p-5 rounded-xl bg-white border border-slate-200">
                <span className="font-mono text-indigo-600 font-bold text-xs">{stat.num}</span>
                <div className="mt-1">
                  <small className="block text-slate-500 text-xs font-semibold">{stat.label}</small>
                  <strong className="text-slate-950 font-bold text-base">{stat.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="section py-20 px-6 bg-white border-t border-slate-200">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="section-intro text-center max-w-2xl mx-auto space-y-2">
            <span className="section-kicker font-bold text-indigo-600 text-xs tracking-widest uppercase">03 / WHAT WE DO</span>
            <h2 className="text-3xl font-extrabold text-slate-950">
              Solutions built for <em className="italic text-indigo-600">modern operations.</em>
            </h2>
            <p className="text-slate-700 text-base font-normal">
              We construct tailored technology strategies that bring precision, speed, and reliability to business processes.
            </p>
          </div>

          <div className="solution-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const SolutionIcon = solution.icon;
              return (
                <article className="solution-card p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4" key={solution.title}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-indigo-600">
                        <SolutionIcon size={28} />
                      </div>
                      <span className="font-mono text-slate-400 text-xs font-bold">0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">{solution.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{solution.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH SECTION */}
      <section id="technology" className="section py-20 px-6 bg-slate-900 text-white">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="section-kicker font-bold text-indigo-400 text-xs tracking-widest uppercase">04 / ARCHITECTURE</span>
            <h2 className="text-3xl font-extrabold leading-tight">
              Modern architecture. <br />
              <em className="italic text-indigo-300">Dependable engineering.</em>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Our systems are architected with security, clean data structures, and continuous scalability at the core.
            </p>

            <button
              type="button"
              className="outline-btn border border-slate-700 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition-all inline-flex items-center gap-2"
              onClick={() => scrollTo('contact')}
            >
              Start a Conversation
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center gap-3">
              <Cloud className="text-indigo-400" size={20} />
              <span className="font-bold text-sm">Cloud Infrastructure</span>
            </div>
            <div className="p-5 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center gap-3">
              <MonitorSmartphone className="text-indigo-400" size={20} />
              <span className="font-bold text-sm">Web &amp; Mobile</span>
            </div>
            <div className="p-5 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center gap-3">
              <ShieldCheck className="text-indigo-400" size={20} />
              <span className="font-bold text-sm">Security &amp; Auth</span>
            </div>
            <div className="p-5 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center gap-3">
              <BarChart3 className="text-indigo-400" size={20} />
              <span className="font-bold text-sm">Data Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section py-16 px-6 bg-indigo-600 text-white text-center">
        <div className="container max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-200">LET'S BUILD</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Have a project or operation ready to upgrade?</h2>
          <p className="text-indigo-100 text-base max-w-xl mx-auto">
            Share your goals with our team and let&apos;s build software that generates lasting value.
          </p>
          <button
            type="button"
            className="primary-btn bg-slate-950 hover:bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg inline-flex items-center gap-2"
            onClick={() => scrollTo('contact')}
          >
            Start a Conversation
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* TEAM SECTION (REORGANIZED & COMPACT) */}
      <section id="team" className="section py-20 px-6 bg-white border-b border-slate-200">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="section-intro text-center max-w-2xl mx-auto space-y-2">
            <span className="section-kicker font-bold text-indigo-600 text-xs tracking-widest uppercase">05 / OUR TEAM</span>
            <h2 className="text-3xl font-extrabold text-slate-950">
              Meet the minds behind <em className="italic text-indigo-600">SkillForge.</em>
            </h2>
            <p className="text-slate-700 text-base font-normal">
              Click any photo icon below to view full details and background.
            </p>
          </div>

          {/* INTERACTIVE TEAM AVATAR GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                type="button"
                onClick={() => setSelectedMember(member)}
                className="group flex flex-col items-center text-center space-y-3 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 hover:border-indigo-300 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-slate-300 group-hover:border-indigo-600 transition-all shadow-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950 group-hover:text-indigo-600 transition-colors line-clamp-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-slate-600 line-clamp-1">{member.role}</p>
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                  View Profile
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM MEMBER MODAL POPUP */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="font-mono text-indigo-600 font-bold text-sm">
                  {selectedMember.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{selectedMember.name}</h3>
                  <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{selectedMember.role}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="p-2 text-slate-500 hover:text-slate-950 hover:bg-slate-200 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-slate-200 shadow-md flex-shrink-0">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  {selectedMember.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {selectedMember.highlights && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  {selectedMember.highlights.map((item) => (
                    <div key={item.number} className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="font-mono text-xs font-bold text-indigo-600">{item.number}</span>
                      <strong className="block text-slate-950 text-xs font-bold mt-1">{item.title}</strong>
                      <p className="text-[11px] text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 text-right">
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT SECTION */}
      <section id="contact" className="section py-20 px-6 bg-slate-50">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="section-kicker font-bold text-indigo-600 text-xs tracking-widest uppercase">06 / CONTACT</span>
            <h2 className="text-3xl font-extrabold text-slate-950">
              Let&apos;s build <em className="italic text-indigo-600">together.</em>
            </h2>
            <p className="text-slate-700 text-base">
              Reach out for product inquiries, CoreOne software demos, or custom software projects.
            </p>

            <div className="contact-links space-y-4 pt-4">
              <a href="tel:08035269983" className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 transition-colors">
                <div>
                  <small className="text-xs font-bold text-slate-500 uppercase block">Phone</small>
                  <strong className="text-slate-950 text-base">08035269983</strong>
                </div>
                <ArrowRight className="text-slate-400" size={18} />
              </a>

              <a href="https://wa.me/2349045531092" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 transition-colors">
                <div>
                  <small className="text-xs font-bold text-slate-500 uppercase block">WhatsApp</small>
                  <strong className="text-slate-950 text-base">09045531092</strong>
                </div>
                <ArrowRight className="text-slate-400" size={18} />
              </a>

              <a href="mailto:skillforge82@gmail.com" className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 transition-colors">
                <div>
                  <small className="text-xs font-bold text-slate-500 uppercase block">Email</small>
                  <strong className="text-slate-950 text-base">skillforge82@gmail.com</strong>
                </div>
                <ArrowRight className="text-slate-400" size={18} />
              </a>
            </div>
          </div>

          <form className="contact-form bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4" onSubmit={handleFormSubmit}>
            <div className="form-title flex items-center gap-2 font-bold text-slate-950 border-b border-slate-200 pb-4">
              <MessageCircle size={20} className="text-indigo-600" />
              <span>Send Us a Message</span>
            </div>

            {formState.succeeded ? (
              <div className="form-success p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <div className="form-success-icon inline-flex p-2 bg-emerald-100 text-emerald-700 rounded-full">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-slate-950">Message Sent Successfully!</h3>
                <p className="text-slate-700 text-xs">Our team will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <input type="hidden" name="_subject" value="New SkillForge Website Enquiry" />

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Full Name</label>
                  <input name="name" type="text" placeholder="Your full name" required className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-600" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Email Address</label>
                  <input name="email" type="email" placeholder="you@company.com" required className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-600" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Phone Number</label>
                  <input name="phone" type="tel" placeholder="08035269983" className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-600" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Topic</label>
                  <select name="area" defaultValue="" required className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-600">
                    <option value="" disabled>Select an area</option>
                    <option value="CoreOne">CoreOne Platform</option>
                    <option value="Technology solutions">Custom Software</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Product support">Support</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Message</label>
                  <textarea name="message" rows={4} placeholder="How can we help you?" required className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-600" />
                </div>

                <button className="primary-btn w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2" type="submit" disabled={formState.submitting}>
                  {formState.submitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer bg-slate-950 text-white py-12 px-6 border-t border-slate-800">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="footer-brand flex items-center gap-3">
            <Image src="/logo.png" alt="SkillForge Technologies" width={140} height={45} />
            <span className="font-bold text-sm tracking-wide">SKILLFORGE</span>
          </div>

          <div className="text-slate-400 text-xs">
            © 2026 SkillForge Technologies &amp; Solutions Ltd. All rights reserved.
          </div>

          <button type="button" className="text-slate-300 hover:text-white text-xs font-semibold" onClick={() => scrollTo('home')}>
            Back to top ↑
          </button>
        </div>
      </footer>
    </main>
  );
}