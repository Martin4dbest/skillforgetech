'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from '@formspree/react';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  UsersRound,
  X,
  Zap,
} from 'lucide-react';

type GalleryItem = {
  title: string;
  role: 'Admin' | 'Teacher' | 'Student' | 'Staff' | 'Parent';
  category: string;
  description: string;
  image: string;
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

const galleryItems: GalleryItem[] = [
  // ADMIN
  {
    title: 'Admin Dashboard',
    role: 'Admin',
    category: 'Administration',
    description: 'A complete overview of school operations, activities and key performance information.',
    image: '/screens/admin/admin-dashboard.png',
  },
  {
    title: 'Student Management',
    role: 'Admin',
    category: 'Students',
    description: 'Manage student records, profiles and school information from one workspace.',
    image: '/screens/admin/admin-students.png',
  },
  {
    title: 'Teacher Management',
    role: 'Admin',
    category: 'Teachers',
    description: 'Manage teachers, staff assignments and academic responsibilities.',
    image: '/screens/admin/admin-teachers.png',
  },
  {
    title: 'Attendance Management',
    role: 'Admin',
    category: 'Attendance',
    description: 'Monitor attendance and maintain clear visibility across the school.',
    image: '/screens/admin/admin-attendance.png',
  },
  {
    title: 'Fees & Payments',
    role: 'Admin',
    category: 'Finance',
    description: 'Track school fees, payments and financial records with better visibility.',
    image: '/screens/admin/admin-fees.png',
  },
  {
    title: 'Results & Academics',
    role: 'Admin',
    category: 'Academics',
    description: 'Manage academic records, results and student performance.',
    image: '/screens/admin/admin-results.png',
  },
  {
    title: 'Books & Resources',
    role: 'Admin',
    category: 'Library',
    description: 'Manage books and digital learning resources across the school.',
    image: '/screens/admin/admin-books.png',
  },
  {
    title: 'CBT & Assessment',
    role: 'Admin',
    category: 'CBT',
    description: 'Manage computer-based tests and digital assessment activities.',
    image: '/screens/admin/admin-cbt.png',
  },
  {
    title: 'School Analytics',
    role: 'Admin',
    category: 'Analytics',
    description: 'Turn school data into useful operational and performance insights.',
    image: '/screens/admin/admin-analytics.png',
  },
  {
    title: 'System Settings',
    role: 'Admin',
    category: 'Settings',
    description: 'Configure school-wide settings and platform preferences.',
    image: '/screens/admin/admin-settings.png',
  },
  {
    title: 'Staff Management',
    role: 'Admin',
    category: 'Staff',
    description: 'Manage staff records, responsibilities and workforce information.',
    image: '/screens/admin/admin-staff.png',
  },
  {
    title: 'School Profile',
    role: 'Admin',
    category: 'School Management',
    description: 'Manage school identity, information and institutional settings.',
    image: '/screens/admin/admin-school.png',
  },
  {
    title: 'Performance Intelligence',
    role: 'Admin',
    category: 'Performance',
    description: 'Monitor school and staff performance through meaningful insights.',
    image: '/screens/admin/admin-performance.png',
  },

  // TEACHER
  {
    title: 'Teacher Dashboard',
    role: 'Teacher',
    category: 'Teacher Portal',
    description: 'A focused workspace for teachers to manage everyday academic activities.',
    image: '/screens/teacher/teacher-dashboard.png',
  },
  {
    title: 'Teacher Mobile Experience',
    role: 'Teacher',
    category: 'Mobile App',
    description: 'Access important teaching and school activities from a mobile device.',
    image: '/screens/teacher/teacher-app.jpeg',
  },

  // STUDENT
  {
    title: 'Student Dashboard',
    role: 'Student',
    category: 'Student Portal',
    description: 'A connected student experience for learning, results and school activities.',
    image: '/screens/student/student-dashboard.jpeg',
  },
  {
    title: 'Student Mobile Experience',
    role: 'Student',
    category: 'Mobile App',
    description: 'A simple mobile experience for students to stay connected with school.',
    image: '/screens/student/student-app.jpeg',
  },

  // STAFF
  {
    title: 'Staff Mobile App',
    role: 'Staff',
    category: 'Staff Portal',
    description: 'Mobile tools for staff attendance, activities and everyday school operations.',
    image: '/screens/staff/staff-app.jpeg',
  },

  // PARENT
  {
    title: 'Parent Dashboard',
    role: 'Parent',
    category: 'Parent Portal',
    description: 'Stay connected to student progress, school information, fees and communication.',
    image: '/screens/parent/parent-dashboard.jpeg',
  },
];

const teamMembers: TeamMember[] = [
  {
    id: 'martin',
    name: 'Engr. Martin Agoha',
    role: 'Founder & Technology Lead',
    image: '/mypix.jpeg',
    bio: 'Leads product strategy, technology and the development of practical digital solutions, including CoreOne.',
  },
  {
    id: 'elijah',
    name: 'Mr Etim Elijah Ime',
    role: 'Sales Manager',
    image: '/Eli.png',
    bio: 'Supports business development, customer relationships and CoreOne demonstrations.',
  },
  {
    id: 'joshua',
    name: 'Joshua Okpechi',
    role: 'Sales Manager',
    image: '/joshua.png',
    bio: 'Supports sales, business development and customer engagement.',
  },
  {
    id: 'victor',
    name: 'Mr Victor',
    role: 'Product Technical Support / Sales',
    image: '/victor.png',
    bio: 'Supports product adoption, technical enquiries and customer demonstrations.',
  },
  {
    id: 'ejike',
    name: 'Mr Ejike',
    role: 'Product Technical Support / Sales',
    image: '/ejike.jpeg',
    bio: 'Supports customers with product setup, technical needs and CoreOne adoption.',
  },
  {
    id: 'favour',
    name: 'Mr Favour Ekezie',
    role: 'Product Technical Support / Sales',
    image: '/favour.png',
    bio: 'Combines product support with customer engagement and demonstrations.',
  },
];

const bookingTypes = [
  'School Owner / Proprietor',
  'School Administrator',
  'Teacher',
  'Parent',
  'Student',
  'School Staff',
  'Organization',
  'Other',
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<'All' | GalleryItem['role']>('All');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [students, setStudents] = useState(500);

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xrpggbar';
  const [formState, handleFormSubmit] = useForm(formId);

  const pricePerStudent = 3500;
  const totalPrice = students * pricePerStudent;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setMenuOpen(false);
  };

  const closeGallery = () => setSelectedGallery(null);

  const previousGallery = () => {
    setSelectedGallery((current) => {
      if (current === null) return null;
      return current === 0 ? galleryItems.length - 1 : current - 1;
    });
  };

  const nextGallery = () => {
    setSelectedGallery((current) => {
      if (current === null) return null;
      return current === galleryItems.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <main className="site-shell">
      {/* HEADER */}
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
                src="/coreone-logo.jpeg"
                alt="CoreOne"
                width={150}
                height={48}
                priority
              />
            </span>

            <span className="brand-copy">
              <strong>CORE1</strong>
              <small>Enterprise Solution</small>
            </span>
          </button>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <button type="button" onClick={() => scrollTo('company')}>
              Company
            </button>
            <button type="button" onClick={() => scrollTo('coreone')}>
              CoreOne
            </button>
            <button type="button" onClick={() => scrollTo('showcase')}>
              Product
            </button>
            <button type="button" onClick={() => scrollTo('pricing')}>
              Pricing
            </button>
            <button type="button" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </nav>

          <button
            type="button"
            className="nav-cta"
            onClick={() => scrollTo('booking')}
          >
            Book a Demo
            <ArrowRight size={15} />
          </button>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-grid" />

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Technology • Products • Solutions
            </div>

            <h1>
              Technology that works
              <span> for real businesses.</span>
            </h1>

            <p className="hero-text">
              Core1 Enterprise Solution builds practical digital products and
              technology systems that make organizations easier to run, connect
              and grow.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={() => scrollTo('booking')}
              >
                Book a Demo
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="button button-secondary"
                onClick={() => scrollTo('coreone')}
              >
                Explore CoreOne
              </button>
            </div>

            <div className="hero-note">
              <CheckCircle2 size={15} />
              Built for practical operations and measurable outcomes
            </div>
          </div>

          <div className="hero-product-card">
            <div className="product-card-top">
              <div>
                <span className="mini-label">FLAGSHIP PRODUCT</span>
                <strong>CoreOne</strong>
              </div>
              <span className="live-badge">
                <span />
                Live
              </span>
            </div>

            <div className="mock-dashboard">
              <div className="mock-sidebar">
                <div className="mock-logo">C1</div>
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="mock-main">
                <div className="mock-heading">
                  <div>
                    <small>School Overview</small>
                    <strong>Good morning</strong>
                  </div>
                  <div className="mock-avatar" />
                </div>

                <div className="mock-stats">
                  <div>
                    <small>Students</small>
                    <strong>1,248</strong>
                  </div>
                  <div>
                    <small>Attendance</small>
                    <strong>94.8%</strong>
                  </div>
                  <div>
                    <small>Teachers</small>
                    <strong>76</strong>
                  </div>
                </div>

                <div className="mock-chart">
                  <div className="chart-line" />
                  <div className="chart-bars">
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

            <div className="product-card-bottom">
              <span>School Management</span>
              <span>Web + Mobile</span>
              <span>Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section id="company" className="section section-light">
        <div className="container">
          <div className="section-heading compact-heading">
            <span className="section-number">01</span>
            <div>
              <span className="section-kicker">CORE1 ENTERPRISE SOLUTION</span>
              <h2>We build technology around real needs.</h2>
            </div>
          </div>

          <div className="company-grid">
            <p className="lead-copy">
              We combine product thinking, engineering and business
              understanding to create digital systems people can actually use.
            </p>

            <div className="principles">
              <div>
                <span>01</span>
                <strong>Product-led</strong>
                <p>We focus on useful products, not unnecessary complexity.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Practical</strong>
                <p>Every solution starts with the problem it needs to solve.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Built to scale</strong>
                <p>Systems designed to grow with the organizations using them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COREONE */}
      <section id="coreone" className="section coreone-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <span className="section-kicker">FLAGSHIP PRODUCT</span>
              <h2>Meet CoreOne.</h2>
              <p>
                A connected school management ecosystem for modern
                educational institutions.
              </p>
            </div>
          </div>

          <div className="coreone-layout">
            <div className="coreone-info">
              <div className="coreone-badge">
                <span>CORE</span>ONE
              </div>

              <h3>One platform. The whole school.</h3>

              <p>
                CoreOne connects administration, academics, communication,
                finance, attendance and learning in one digital environment.
              </p>

              <button
                type="button"
                className="text-button"
                onClick={() => scrollTo('showcase')}
              >
                View product screens
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <Layers3 size={20} />
                <strong>School Administration</strong>
                <span>Manage everyday school operations centrally.</span>
              </div>

              <div className="feature-card">
                <UsersRound size={20} />
                <strong>Parents & Students</strong>
                <span>Keep families connected to school activities.</span>
              </div>

              <div className="feature-card">
                <BookOpen size={20} />
                <strong>Learning & Assessment</strong>
                <span>Results, CBT, attendance and learning tools.</span>
              </div>

              <div className="feature-card">
                <ShieldCheck size={20} />
                <strong>Security & Access</strong>
                <span>Role-based access across the platform.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="section section-light">
        <div className="container">
          <div className="section-heading showcase-heading">
            <span className="section-number">03</span>
            <div>
              <span className="section-kicker">PRODUCT SHOWCASE</span>
              <h2>See CoreOne in action.</h2>
              <p>
                Explore the platform across dashboards, mobile apps and
                everyday school workflows.
              </p>
            </div>
          </div>

          <div className="showcase-filters" role="tablist" aria-label="CoreOne product areas">
            {(['All', 'Admin', 'Teacher', 'Student', 'Staff', 'Parent'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                className={`showcase-filter ${galleryFilter === filter ? 'active' : ''}`}
                onClick={() => {
                  setGalleryFilter(filter);
                  setSelectedGallery(null);
                }}
                aria-pressed={galleryFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {galleryItems
              .map((item, originalIndex) => ({ item, originalIndex }))
              .filter(({ item }) => galleryFilter === 'All' || item.role === galleryFilter)
              .map(({ item, originalIndex }) => (
                <button
                  type="button"
                  className="gallery-card"
                  key={item.title}
                  onClick={() => setSelectedGallery(originalIndex)}
                >
                  <div className="gallery-image">
                    <Image
                      src={item.image}
                      alt={`CoreOne ${item.role} - ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="gallery-overlay">
                      <span>View screen</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>

                  <div className="gallery-info">
                    <span>{item.role} · {item.category}</span>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section solutions-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div>
              <span className="section-kicker">WHAT WE DO</span>
              <h2>Technology with a purpose.</h2>
            </div>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <GraduationCap size={22} />
              <span>01</span>
              <h3>EdTech Solutions</h3>
              <p>
                Digital infrastructure for schools, learning and education
                management.
              </p>
            </div>

            <div className="solution-card featured-solution">
              <Zap size={22} />
              <span>02</span>
              <h3>Software Products</h3>
              <p>
                Purpose-built web and mobile applications designed around
                actual workflows.
              </p>
            </div>

            <div className="solution-card">
              <BarChart3 size={22} />
              <span>03</span>
              <h3>Digital Transformation</h3>
              <p>
                Modern systems that replace disconnected processes with
                connected operations.
              </p>
            </div>
          </div>
        </div>
      
        
        {/* CLICK TO VISIT PRODUCT SOLUTIONS */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="https://nexa-soft-martinez-solutions.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              backgroundColor: '#d9f99d',
              color: '#17200b',
              border: '1px solid #bef264',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Visit Our Product Solutions →
          </a>
        </div>
</section>


      {/* ENTERPRISE SOLUTIONS VISUALS */}
      <section id="enterprise-solutions" className="section enterprise-solutions-visual">
        <div className="container">
          <div className="section-heading enterprise-heading">
            <div>
              <span className="section-kicker">ENTERPRISE TECHNOLOGY</span>
              <h2>Solutions built for modern organisations.</h2>
            </div>
            <p>
              From enterprise software and analytics to digital transformation
              and education technology, Core1 delivers practical systems that
              help organisations operate smarter.
            </p>
          </div>

          <div className="enterprise-image-grid">

            <article className="enterprise-image-card enterprise-large">
              <img
                src="https://channellife.com.au/uploads/story/2024/11/19/techday_22bd0af56512d9a73289.webp"
                alt="Enterprise technology team working with digital systems"
              />
              <div className="enterprise-image-overlay">
                <span>01</span>
                <div>
                  <h3>Enterprise Technology</h3>
                  <p>Connected systems for complex business operations.</p>
                </div>
              </div>
            </article>

            <article className="enterprise-image-card">
              <img
                src="https://tantainnovatives.com/images/blog/data-analytics.jpg"
                alt="Business intelligence and analytics dashboard"
              />
              <div className="enterprise-image-overlay">
                <span>02</span>
                <div>
                  <h3>Data & Analytics</h3>
                  <p>Turn operational data into useful business intelligence.</p>
                </div>
              </div>
            </article>

            <article className="enterprise-image-card">
              <img
                src="https://www.visionarygroup.io/assets/images/gallery/about-section-card.jpg"
                alt="Enterprise infrastructure and systems collaboration"
              />
              <div className="enterprise-image-overlay">
                <span>03</span>
                <div>
                  <h3>Digital Infrastructure</h3>
                  <p>Technology architecture designed to connect your operations.</p>
                </div>
              </div>
            </article>

            <article className="enterprise-image-card school-solution-card">
              <img
                src="https://www.laysantech.com/uploads/products/eda096b8eaac4d93b53ee8e411688378.jpg"
                alt="School management software dashboard"
              />
              <div className="enterprise-image-overlay">
                <span>04</span>
                <div>
                  <h3>Education Technology</h3>
                  <p>CoreOne connects school administration, academics, payments and people.</p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section pricing-section">
        <div className="container pricing-container">
          <div className="pricing-intro">
            <span className="section-kicker">ESTIMATE YOUR PLAN</span>
            <h2>See what your school could pay.</h2>
            <p>
              Adjust the number of students to get an instant example based on
              ₦3,500 per student.
            </p>
          </div>

          <div className="calculator-card">
            <div className="calculator-top">
              <div>
                <span className="calculator-label">NUMBER OF STUDENTS</span>
                <strong>{students.toLocaleString()}</strong>
              </div>

              <div className="calculator-price">
                <span>Estimated amount</span>
                <strong>₦{totalPrice.toLocaleString()}</strong>
                <small>₦3,500 / student</small>
              </div>
            </div>

            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={students}
              onChange={(event) => setStudents(Number(event.target.value))}
              className="price-slider"
              aria-label="Number of students"
            />

            <div className="slider-labels">
              <span>50 students</span>
              <span>2,500</span>
              <span>5,000+</span>
            </div>

            <div className="calculator-note">
              <CheckCircle2 size={16} />
              This is an example estimate. Final pricing can be discussed
              during your consultation.
            </div>

            <button
              type="button"
              className="button button-primary"
              onClick={() => scrollTo('booking')}
            >
              Discuss Your School
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="section booking-section">
        <div className="container booking-grid">
          <div className="booking-copy">
            <span className="section-kicker">BOOK A DEMO / CONSULTATION</span>
            <h2>Let's show you what CoreOne can do.</h2>
            <p>
              Tell us who you are and what you need. Our team will get back to
              you to arrange a suitable conversation.
            </p>

            <div className="booking-points">
              <div>
                <CalendarCheck size={18} />
                <span>Product demonstrations</span>
              </div>
              <div>
                <MessageCircle size={18} />
                <span>Questions and consultation</span>
              </div>
              <div>
                <MonitorSmartphone size={18} />
                <span>School onboarding discussions</span>
              </div>
            </div>
          </div>

          <form
            className="booking-form"
            onSubmit={handleFormSubmit}
          >
            <input type="hidden" name="_subject" value="New Core1 Website Booking" />

            <div className="form-row">
              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  placeholder="080..."
                  required
                />
              </label>
            </div>

            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              I am booking as
              <select name="booking_type" defaultValue="" required>
                <option value="" disabled>
                  Select one
                </option>
                {bookingTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Organization / School
              <input
                type="text"
                name="organization"
                placeholder="School or organization name"
              />
            </label>

            <label>
              What would you like to discuss?
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us briefly what you need..."
                required
              />
            </label>

            <button
              type="submit"
              className="button button-primary form-submit"
              disabled={formState.submitting}
            >
              {formState.submitting ? 'Sending...' : 'Request a Demo'}
              <ArrowRight size={16} />
            </button>

            {formState.succeeded && (
              <div className="form-success">
                <CheckCircle2 size={18} />
                Thank you. Your request has been received.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section section-light team-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-number">05</span>
            <div>
              <span className="section-kicker">OUR TEAM</span>
              <h2>People behind the products.</h2>
              <p>
                A focused team combining technology, product and customer
                experience.
              </p>
            </div>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <button
                type="button"
                className="team-card"
                key={member.id}
                onClick={() => setSelectedMember(member)}
              >
                <div className="team-photo">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="180px"
                  />
                </div>
                <div className="team-details">
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <span className="section-kicker">06 / CONTACT</span>
            <h2>Have a technology challenge?</h2>
            <p>
              Talk to Core1 Enterprise Solution about CoreOne, software
              products, partnerships or technology projects.
            </p>
          </div>

          <div className="contact-details">
            <a href="tel:08035269983">
              <span>Phone</span>
              <strong>0803 526 9983</strong>
            </a>

            <a
              href="https://wa.me/2349045531092"
              target="_blank"
              rel="noreferrer"
            >
              <span>WhatsApp</span>
              <strong>0904 553 1092</strong>
            </a>

            <a href="mailto:core1enterprisesolutions@gmail.com">
              <span>Email</span>
              <strong>core1enterprisesolutions@gmail.com</strong>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-mark">C1</div>
            <div>
              <strong>Core1 Enterprise Solution</strong>
              <span>Technology • Products • Solutions</span>
            </div>
          </div>

          <div className="footer-links">
            <button type="button" onClick={() => scrollTo('company')}>
              Company
            </button>
            <button type="button" onClick={() => scrollTo('coreone')}>
              CoreOne
            </button>
            <button type="button" onClick={() => scrollTo('showcase')}>
              Product
            </button>
            <button type="button" onClick={() => scrollTo('booking')}>
              Book a Demo
            </button>
          </div>

          <div className="footer-bottom">
            © 2026 Core1 Enterprise Solution. All rights reserved.
          </div>
        </div>
      </footer>

      {/* GALLERY LIGHTBOX */}
      {selectedGallery !== null && galleryItems[selectedGallery] && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${galleryItems[selectedGallery].title} preview`}
          onClick={closeGallery}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeGallery}
            aria-label="Close image preview"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(event) => {
              event.stopPropagation();
              previousGallery();
            }}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-lightbox-image">
              <Image
                src={galleryItems[selectedGallery].image}
                alt={`CoreOne ${galleryItems[selectedGallery].role} - ${galleryItems[selectedGallery].title}`}
                fill
                sizes="90vw"
                priority
              />
            </div>

            <div className="gallery-lightbox-info">
              <span>
                {galleryItems[selectedGallery].role} · {galleryItems[selectedGallery].category}
              </span>
              <h3>{galleryItems[selectedGallery].title}</h3>
              <p>{galleryItems[selectedGallery].description}</p>
            </div>
          </div>

          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(event) => {
              event.stopPropagation();
              nextGallery();
            }}
            aria-label="Next screenshot"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      {selectedMember && (
        <div
          className="team-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="team-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile"
            >
              <X size={20} />
            </button>

            <div className="modal-photo">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                sizes="140px"
              />
            </div>

            <span className="modal-label">CORE1 ENTERPRISE SOLUTION</span>
            <h3>{selectedMember.name}</h3>
            <strong>{selectedMember.role}</strong>
            <p>{selectedMember.bio}</p>
          </div>
        </div>
      )}

      <a
        className="floating-whatsapp"
        href="https://wa.me/2349045531092"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={21} />
      </a>
    </main>
  );
}
