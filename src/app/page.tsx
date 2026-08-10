"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  Headphones,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  ServerCog,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

type Theme = "light" | "dark";

const contact = {
  email: "fernando.jhay48@gmail.com",
  phone: "+63 930 161 9346",
  linkedin: "https://www.linkedin.com/in/bernie-fernando-b9a981312",
  github: "https://github.com/docjay8390",
  facebook: "https://www.facebook.com/profile.php?id=100009836075204",
  instagram: "https://www.instagram.com/itsdjfrnndo/",
  x: "https://twitter.com/xxdjfrnndo",
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Enterprise Web Apps",
    description:
      "Internal applications for employees and business operations using Next.js, React, TypeScript, and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "REST APIs & Database",
    description:
      "Backend development with Node.js, REST API work, Oracle Database integrations, and optimized SQL queries.",
    icon: Database,
  },
  {
    title: "IT Support",
    description:
      "Hardware, software, account access, password reset, system troubleshooting, deployment, and user support.",
    icon: ServerCog,
  },
  {
    title: "Customer Support",
    description:
      "Chat-based support, service requests, billing concerns, order tracking, and clear customer communication.",
    icon: Headphones,
  },
];

const experience = [
  {
    role: "IT Officer - Full Stack Developer & IT Support",
    company: "Charoen Pokphand Foods Philippines Corporation",
    date: "March 2025 - Present",
    bullets: [
      "Developed and maintained internal web applications for employees and business operations.",
      "Built responsive full-stack applications using Next.js, React.js, TypeScript, and Tailwind CSS.",
      "Developed REST APIs, integrated Oracle Database, and wrote optimized SQL queries using Toad for Oracle.",
      "Implemented secure authentication, role-based access control, performance improvements, and deployment support.",
      "Provided technical support for user accounts, password resets, application issues, and troubleshooting.",
    ],
  },
  {
    role: "Customer Service Representative - Chat Support",
    company: "TTEC, San Fernando",
    date: "Aug 2025 - Nov 2025",
    bullets: [
      "Provided chat-based support for telecommunications products and services.",
      "Assisted customers with account inquiries, billing concerns, service requests, and device order status.",
      "Troubleshot mobile device and network-related issues while maintaining accurate and timely resolutions.",
    ],
  },
  {
    role: "IT Support Intern",
    company: "BMG Outsourcing, Clark",
    date: "Jan 2025 - May 2025",
    bullets: [
      "Supported employees with hardware, software, and application-related issues.",
      "Configured desktops and laptops, installed operating systems, and maintained business applications.",
      "Performed account provisioning, assisted with access management, and resolved IT support tickets.",
    ],
  },
  {
    role: "Poster and Video Editor",
    company: "Maclouds",
    date: "May 2021 - May 2022",
    bullets: [
      "Created marketing posters and video content for branding and promotions.",
      "Used Canva, Figma, PicsArt, CapCut, KineMaster, Adobe Premiere Pro, and photo editing tools.",
    ],
  },
];

const projects = [
  {
    title: "RazorVibe",
    type: "Responsive website",
    description:
      "A mobile-friendly landing page concept for a barber shop, focused on strong imagery, clear sections, and easy navigation.",
    image: "/img/razor.png",
    href: "https://docjay8390.github.io/Activity-RazorVibe-3/",
  },
  {
    title: "FoodTiger",
    type: "Figma prototype",
    description:
      "A restaurant interface prototype with menu browsing, reservation flow, and a clean visual direction for diners.",
    image: "/img/foodtiger.png",
    href: "https://www.figma.com/proto/W3aziDeXwFprGtKKBOcVtZ/Untitled?type=design&node-id=1-2&t=JxvkvJmMq7mKYxib-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    title: "Portfolio Concept",
    type: "Web design",
    description:
      "A personal portfolio concept using familiar web building blocks to present projects, skills, and professional details.",
    image: "/img/maxchavez.png",
    href: "https://www.figma.com/proto/17mNNwXU26mT7a9KNAUmNu/Untitled?type=design&node-id=1-2&t=DhnAcI48LfEpiYbi-0&scaling=min-zoom&page-id=0%3A1",
  },
];

const certificateImages = [
  {
    title: "Share Data Through the Art of Visualization",
    image: "/img/ShareData.jpg",
  },
  {
    title: "Foundations of Data",
    image: "/img/study.jpg",
  },
  {
    title: "Process Data From Dirty to Clean",
    image: "/img/processdata.jpg",
  },
];

const certifications = [
  "Information Technology Specialist in HTML and CSS",
  "Information Technology Specialist in Networking",
  "Microsoft 365 Fundamentals",
  "Cisco Certified Support Technician IT Support",
  "Meta Certified Digital Marketing Associate",
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "REST API development", "Oracle Database", "SQL queries"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Toad for Oracle"],
  },
  {
    title: "IT Support",
    skills: ["Windows", "macOS", "Hardware troubleshooting", "Software troubleshooting", "User management"],
  },
];

const quickStats = [
  ["1+", "Year experience"],
  ["5", "Certifications"],
  ["4", "Professional roles"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme") as Theme | null;
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 antialiased transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur dark:border-white/10 dark:bg-zinc-950/80">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid size-10 place-items-center rounded-md bg-slate-950 text-sm font-bold text-white transition-colors group-hover:bg-emerald-600 dark:bg-white dark:text-zinc-950">
              BF
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold">Bernie S. Fernando Jr.</span>
              <span className="block text-xs text-slate-500 dark:text-zinc-400">IT Support | Full-Stack Developer</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={toggleTheme}
              className="grid size-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className="hidden rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:inline-flex"
            >
              Contact
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 lg:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm dark:border-white/10 dark:bg-zinc-900 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-zinc-200 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_34%),linear-gradient(135deg,rgba(245,158,11,0.10),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_32%),linear-gradient(135deg,rgba(245,158,11,0.12),transparent_38%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
            <span className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <CheckCircle2 size={16} />
              IT Support | Full-Stack Developer
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Building reliable web apps and supporting the people who use them.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-zinc-300">
              I&apos;m Bernie S. Fernando Jr., an IT professional with more than 1 year of combined experience in software development, IT support, and customer service. I work with enterprise web applications, REST APIs, Oracle Database integrations, and hands-on technical support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-emerald-300"
              >
                View experience
                <ArrowUpRight size={18} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-400 hover:text-emerald-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <Mail size={18} />
                Email me
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl">
              {quickStats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <strong className="block text-2xl font-bold text-slate-950 dark:text-white">{value}</strong>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
              <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-r from-emerald-600 via-slate-900 to-amber-500 dark:from-emerald-500 dark:via-zinc-800 dark:to-amber-400" />
              <div className="relative px-6 pb-6 pt-10">
                <div className="mx-auto grid size-64 place-items-end overflow-hidden rounded-lg bg-emerald-50 sm:size-80 dark:bg-emerald-400/10">
                  <Image
                    src="/img/akoto-removebg-preview.png"
                    alt="Portrait of Bernie Fernando"
                    width={512}
                    height={512}
                    priority
                    className="h-full w-full object-contain object-bottom"
                  />
                </div>
                <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-zinc-950/70">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-bold">Bernie S. Fernando Jr.</h2>
                      <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">IT Support | Full-Stack Developer</p>
                    </div>
                    <BriefcaseBusiness className="shrink-0 text-emerald-600 dark:text-emerald-300" size={24} />
                  </div>
                  <div className="mt-5 grid gap-3 text-sm text-slate-600 dark:text-zinc-300">
                    <a className="inline-flex items-center gap-2 transition hover:text-emerald-700 dark:hover:text-emerald-300" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                      <Phone size={16} />
                      {contact.phone}
                    </a>
                    <a className="inline-flex items-center gap-2 transition hover:text-emerald-700 dark:hover:text-emerald-300" href={`mailto:${contact.email}`}>
                      <Mail size={16} />
                      {contact.email}
                    </a>
                    <a className="inline-flex items-center gap-2 transition hover:text-emerald-700 dark:hover:text-emerald-300" href={contact.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin size={16} />
                      LinkedIn profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-white py-20 dark:border-white/10 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="Practical support for business systems." description="A resume-backed mix of web development, database work, IT support, and customer-focused problem solving." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="group rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40 dark:hover:bg-white/10"
                >
                  <div className="grid size-11 place-items-center rounded-md bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-400/10 dark:text-emerald-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:gap-12 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="mx-auto w-full max-w-xs rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5 lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-slate-100 dark:bg-zinc-800">
              <Image
                src="/img/graduation%20pic.jpg"
                alt="Bernie Fernando graduation portrait"
                fill
                sizes="(min-width: 1024px) 288px, 80vw"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-4 rounded-md bg-slate-50 p-4 dark:bg-zinc-950/60">
              <p className="text-sm font-bold text-slate-950 dark:text-white">Bernie S. Fernando Jr.</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">IT Support | Full-Stack Developer</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-600 dark:text-zinc-300">
                <span className="rounded-md bg-white px-2 py-2 text-center dark:bg-white/10">1+ year</span>
                <span className="rounded-md bg-white px-2 py-2 text-center dark:bg-white/10">5 certs</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="pt-0 lg:pt-1"
          >
            <span className="text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">About me</span>
            <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">I build, support, and improve digital systems.</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-zinc-300">
              <p>
                My experience covers internal web application development, REST API implementation, Oracle Database integration, and technical support in corporate environments.
              </p>
              <p>
                I enjoy practical work: building tools that help employees, maintaining existing systems, improving performance, resolving tickets, and making technology easier for people to use.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="min-h-36 rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="text-sm font-bold text-slate-950 dark:text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="border-y border-slate-200 bg-white py-20 dark:border-white/10 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Professional experience" title="A track record across development and support." description="Key roles from your resume, rewritten for a polished web portfolio." />
          <div className="mt-10 grid gap-5">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">{item.company}</p>
                  </div>
                  <span className="w-fit rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500 dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-300">
                    {item.date}
                  </span>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <CheckCircle2 className="mt-1 shrink-0 text-emerald-600 dark:text-emerald-300" size={16} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Recent work" title="Selected projects with clear goals." description="A concise showcase of responsive development, visual design, and prototype work." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-zinc-800">
                  <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">{project.type}</span>
                  <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600 dark:text-zinc-300">{project.description}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-emerald-700 dark:text-white dark:hover:text-emerald-300"
                  >
                    Open project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="border-y border-slate-200 bg-white py-20 dark:border-white/10 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Certificates" title="Credentials that support the work." description="Your resume certifications, plus available certificate previews from the original portfolio assets." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {certificateImages.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100 dark:bg-zinc-800">
                  <Image src={certificate.image} alt={certificate.title} fill className="object-cover" />
                </div>
                <h3 className="mt-4 px-1 pb-2 text-sm font-bold leading-6">{certificate.title}</h3>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map((certification) => (
              <div key={certification} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                <Sparkles className="mt-1 shrink-0 text-amber-500" size={16} />
                <span>{certification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white dark:bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-emerald-300">Contact</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-normal sm:text-4xl">Let&apos;s build something useful and dependable.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              I&apos;m open to full-stack web development, IT support, UI/UX design, and technical support opportunities.
            </p>
          </div>
          <div className="grid gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
            >
              <Mail size={18} />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone size={18} />
              {contact.phone}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 pt-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright (c) {currentYear} Bernie S. Fernando Jr. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-white" href={contact.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="transition hover:text-white" href={contact.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="transition hover:text-white" href={contact.x} target="_blank" rel="noreferrer">
              X
            </a>
            <a className="inline-flex items-center gap-1 transition hover:text-white" href="#home">
              Top
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-zinc-300">{description}</p>
    </div>
  );
}
