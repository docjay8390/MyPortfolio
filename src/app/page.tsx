"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Menu,
  Moon,
  Palette,
  ServerCog,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

type Theme = "light" | "dark";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "IT Operations",
    description:
      "Hands-on support for systems, users, and internal tools with a calm, practical approach to daily technical issues.",
    icon: ServerCog,
  },
  {
    title: "Web Development",
    description:
      "Responsive interfaces built with clean structure, readable code, and attention to performance across screen sizes.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description:
      "Simple flows, clear visual hierarchy, and Figma-first thinking for sites and applications that feel easy to use.",
    icon: Palette,
  },
  {
    title: "Creative Media",
    description:
      "Photo, design, and video editing support for polished digital content, presentations, and online materials.",
    icon: Sparkles,
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

const certificates = [
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

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Figma",
  "Photoshop",
  "Video editing",
  "Technical support",
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
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
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
              <span className="block text-sm font-semibold">Bernie Fernando</span>
              <span className="block text-xs text-slate-500 dark:text-zinc-400">IT Officer</span>
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
              Available for web, design, and IT support projects
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              IT Officer building clean, responsive digital experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-zinc-300">
              I&apos;m Bernie Fernando, an IT Officer at Charoen Pokphand Foods Philippines Corporation with a practical focus on web development, UI/UX design, and dependable technical support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-emerald-300"
              >
                View work
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://github.com/docjay8390"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-400 hover:text-emerald-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <Github size={18} />
                View GitHub
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl">
              {[
                ["4+", "Core skills"],
                ["3", "Featured works"],
                ["100%", "Responsive"],
              ].map(([value, label]) => (
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
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-bold">Bernie S. Fernando</h2>
                      <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">IT Officer · Web Developer · UI/UX Designer</p>
                    </div>
                    <BriefcaseBusiness className="shrink-0 text-emerald-600 dark:text-emerald-300" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-white py-20 dark:border-white/10 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="Practical support for digital work." description="A focused mix of technical operations, frontend development, and creative production." />
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

      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <Image
              src="/img/graduation%20pic.jpg"
              alt="Bernie Fernando graduation portrait"
              width={900}
              height={899}
              className="h-full min-h-[360px] w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">About me</span>
            <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">I like making technology feel understandable.</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-zinc-300">
              <p>
                My work blends day-to-day IT support with web development and design. I enjoy building interfaces that are straightforward, responsive, and easy to maintain.
              </p>
              <p>
                I started by learning through school projects, experiments, and persistent self-study. That habit still shapes how I work: understand the problem, keep the solution clean, and improve with every project.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="border-y border-slate-200 bg-white py-20 dark:border-white/10 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Recent work" title="Selected projects with clear goals." description="A cleaner showcase of responsive development, visual design, and prototype work." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
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

      <section id="certificates" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Certificates" title="Learning that supports the craft." description="A concise set of certificates from data and visualization learning paths." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100 dark:bg-zinc-800">
                  <Image src={certificate.image} alt={certificate.title} fill className="object-cover" />
                </div>
                <h3 className="mt-4 px-1 pb-2 text-sm font-bold leading-6">{certificate.title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white dark:bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-emerald-300">Contact</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-normal sm:text-4xl">Let&apos;s build something clear, useful, and easy to use.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              I&apos;m open to web projects, UI/UX design work, technical support tasks, and collaborations that need a dependable digital generalist.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100009836075204"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
            >
              <ArrowUpRight size={18} />
              Contact on Facebook
            </a>
            <a
              href="https://github.com/docjay8390"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Github size={18} />
              View GitHub
            </a>
            <a
              href="#home"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <ArrowUp size={18} />
              Back to top
            </a>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 pt-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright © {currentYear} Bernie S. Fernando. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="transition hover:text-white" href="https://www.facebook.com/profile.php?id=100009836075204" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="transition hover:text-white" href="https://www.instagram.com/itsdjfrnndo/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="transition hover:text-white" href="https://twitter.com/xxdjfrnndo" target="_blank" rel="noreferrer">
              X
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
