"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const WEB3FORMS_ACCESS_KEY: string = "a02c746d-c10a-4862-a968-4d3fe473b928";

const services = [
  {
    title: "Website Development",
    meta: "WordPress · Elementor · Responsive UI",
    description:
      "Clean, responsive websites for brands, events, pageants, media platforms, academies, and business pages.",
  },
  {
    title: "Landing Page Build",
    meta: "Campaign pages · CTA flow · Forms",
    description:
      "Focused landing pages with clear content flow, strong CTAs, registration links, and mobile-friendly sections.",
  },
  {
    title: "Magazine Templates",
    meta: "Editorial layouts · Digital magazines · PDF flow",
    description:
      "Premium magazine-style layouts, issue pages, PDF preview sections, content blocks, and reusable design structures.",
  },
  {
    title: "Website Operations",
    meta: "SEO · GA4 · GSC · Meta Pixel",
    description:
      "Daily website updates, form checks, plugin handling, SEO basics, analytics, tracking scripts, and launch support.",
  },
];

const projects = [
  {
    title: "MyDream Global",
    type: "Corporate Website",
    description:
      "Website operations, landing pages, content updates, forms, tracking setup, SEO basics, and responsive improvements.",
    details:
      "Supported website operations across content, campaign pages, tracking setup, form updates, and responsive layout corrections for a global entertainment and event brand.",
    link: "https://mydreamglobal.com/",
  },
  {
    title: "MyDream Magazine",
    type: "Magazine Platform",
    description:
      "Digital magazine pages, PDF preview improvements, editorial layout support, and reusable magazine template planning.",
    details:
      "Worked on magazine presentation, PDF preview flow, issue-wise content sections, page structure, and reusable template planning for future editions.",
    link: "https://mydreammagazine.com/",
  },
  {
    title: "MyDream Times",
    type: "Media Website",
    description:
      "Media-style website support with content structuring, responsive fixes, page layout clean-up, and website presentation improvements.",
    details:
      "Helped improve a media-style website with structured content presentation, cleaner responsive behaviour, and general page maintenance.",
    link: "https://mydreamtimes.com/",
  },
  {
    title: "MyDream Global Pageant",
    type: "Pageant Platform",
    description:
      "Pageant-focused website support with registration flow structure, event content sections, responsive design fixes, and CTA-focused layouts.",
    details:
      "Worked on pageant-focused pages with registration-related content flow, event sections, responsive fixes, and user-facing CTA improvements.",
    link: "https://mydreamglobalpageant.com/",
  },
  {
    title: "Social Buzz",
    type: "Agency Website",
    description:
      "Creative agency-style website work with landing sections, service presentation, visual clean-up, layout fixes, and responsive improvements.",
    details:
      "Supported agency-style website presentation with service sections, responsive layout refinements, cleaner visual hierarchy, and website polish.",
    link: "https://socialbuzz.us/",
  },
  {
    title: "MyDream Global Foundation",
    type: "Foundation Website",
    description:
      "Foundation website support with content updates, responsive sections, clear page layout, and cause-focused presentation.",
    details:
      "Worked on foundation website pages with content updates, section improvements, responsive behaviour, and a clear cause-focused structure.",
    link: "http://mydreamglobalfoundation.org/",
  },
  {
    title: "Riwaayat Fashion Week",
    type: "Fashion Event Website",
    description:
      "Fashion event website support with visual sections, content presentation, event layout updates, responsive fixes, and brand-focused styling.",
    details:
      "Supported fashion event web pages with event sections, visual presentation, content structure, responsive layout fixes, and brand styling.",
    link: "https://riwaayatfashionweek.com/",
  },
  {
    title: "New York Top Model Academy",
    type: "Academy Website",
    description:
      "Academy website support with structured pages, responsive layout improvements, content sections, and clean presentation.",
    details:
      "Worked on academy website presentation with structured content, user-facing sections, responsive page improvements, and clean visual layout.",
    link: "https://newyorktopmodelacademy.com/",
  },
];

const strengths = [
  {
    title: "Creative Layouts",
    text: "I build pages that feel organised, premium, and easy to follow without overwhelming the user.",
  },
  {
    title: "Responsive Polish",
    text: "I check desktop, tablet, and mobile layouts carefully so spacing, buttons, and typography stay clean.",
  },
  {
    title: "Fast Website Support",
    text: "I handle live updates, broken sections, forms, links, content changes, and quick layout fixes.",
  },
  {
    title: "Launch Ready Setup",
    text: "I support pages with CTA flow, SEO basics, Google Analytics, Search Console, Meta Pixel, and forms.",
  },
];

const thoughts = [
  {
    title: "Design should make the next step obvious.",
    text: "A good page guides users clearly towards enquiry, registration, reading, booking, or purchase.",
  },
  {
    title: "Templates save future time.",
    text: "Reusable magazine and landing page structures help teams publish faster without rebuilding from scratch.",
  },
  {
    title: "Operations keep websites alive.",
    text: "Strong websites need updates, testing, tracking, content changes, and responsive maintenance.",
  },
];

const tools = [
  "WordPress",
  "Elementor",
  "WooCommerce",
  "HTML",
  "CSS",
  "JavaScript",
  "Responsive Design",
  "Landing Pages",
  "Magazine Templates",
  "Website Maintenance",
  "SEO Basics",
  "Google Analytics",
  "Google Search Console",
  "Meta Pixel",
  "Form Setup",
  "Hostinger",
  "Canva",
  "GitHub",
  "Vercel",
];

export default function Home() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState("");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(projects[0]);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const featuredProjects = projects.slice(0, 4);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateMotion = () => {
      const scrollY = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? scrollY / documentHeight : 0;
      const direction = scrollY > lastScrollY.current ? "down" : "up";

      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${Math.min(progress, 1)}`
      );

      document.documentElement.style.setProperty(
        "--hero-shift",
        `${Math.min(scrollY * 0.12, 90)}px`
      );

      document.documentElement.style.setProperty(
        "--hero-fade",
        `${Math.max(1 - scrollY / 620, 0.2)}`
      );

      document.documentElement.style.setProperty(
        "--hero-scale",
        `${Math.max(1 - scrollY / 8000, 0.965)}`
      );

      document.documentElement.setAttribute("data-scroll-direction", direction);

      lastScrollY.current = scrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateMotion);
        ticking.current = true;
      }
    };

    updateMotion();

    window.addEventListener("scroll", onScroll, { passive: true });

    const revealItems = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            element.classList.add("is-visible");
          } else {
            element.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "-45px 0px -90px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (projectsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProjectsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [projectsOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === "a02c746d-c10a-4862-a968-4d3fe473b928"
    ) {
      setFormStatus("error");
      setFormMessage("Please add your Web3Forms access key before testing.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      "New portfolio enquiry from lakshmi-priyanka.vercel.app"
    );
    formData.append("from_name", "Lakshmi Priyanka Portfolio");

    setFormStatus("submitting");
    setFormMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (result.success) {
        setFormStatus("success");
        setFormMessage(
          "Thank you for contacting me. I’ll get back to you soon."
        );
        form.reset();
      } else {
        setFormStatus("error");
        setFormMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setFormStatus("error");
      setFormMessage(
        "Something went wrong. Please email me directly at lakshmipriyankakotla@gmail.com."
      );
    }
  }

  function openProjects(project = projects[0]) {
    setActiveProject(project);
    setProjectsOpen(true);
  }

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#111111]">
      <style>{`
        :root {
          --scroll-progress: 0;
          --hero-shift: 0px;
          --hero-fade: 1;
          --hero-scale: 1;
        }

        html {
          scroll-behavior: smooth;
          background: #F7F5F0;
        }

        body {
          background: #F7F5F0;
        }

        .scroll-progress {
          transform: scaleX(var(--scroll-progress));
          transform-origin: left center;
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(70px) scale(0.965);
          filter: blur(14px);
          transition:
            opacity 1100ms cubic-bezier(.16,1,.3,1),
            transform 1100ms cubic-bezier(.16,1,.3,1),
            filter 1100ms cubic-bezier(.16,1,.3,1);
          will-change: opacity, transform, filter;
        }

        html[data-scroll-direction="up"] [data-reveal]:not(.is-visible) {
          transform: translateY(-70px) scale(0.965);
        }

        html[data-scroll-direction="down"] [data-reveal]:not(.is-visible) {
          transform: translateY(70px) scale(0.965);
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        [data-reveal="clip"] {
          clip-path: inset(16% 0 16% 0 round 28px);
          transition:
            opacity 1200ms cubic-bezier(.16,1,.3,1),
            transform 1200ms cubic-bezier(.16,1,.3,1),
            filter 1200ms cubic-bezier(.16,1,.3,1),
            clip-path 1200ms cubic-bezier(.16,1,.3,1);
        }

        [data-reveal="clip"].is-visible {
          clip-path: inset(0 0 0 0 round 28px);
        }

        [data-reveal="line"] {
          transform: translateY(28px);
          filter: blur(0);
          transition:
            opacity 900ms cubic-bezier(.16,1,.3,1),
            transform 900ms cubic-bezier(.16,1,.3,1);
        }

        [data-reveal="line"].is-visible {
          transform: translateY(0);
        }

        .hero-motion {
          transform: translateY(var(--hero-shift)) scale(var(--hero-scale));
          opacity: var(--hero-fade);
          will-change: transform, opacity;
        }

        .hero-word {
          animation: heroIn 1000ms cubic-bezier(.16,1,.3,1) both;
        }

        .hero-word.second {
          animation-delay: 130ms;
        }

        .floating-mark {
          animation: floatMark 5.5s ease-in-out infinite;
        }

        .floating-mark.two {
          animation-delay: 1.2s;
        }

        .marquee-track {
          animation: marquee 30s linear infinite;
        }

        .premium-card {
          transform: perspective(900px) translateZ(0);
          transition:
            transform 700ms cubic-bezier(.16,1,.3,1),
            box-shadow 700ms cubic-bezier(.16,1,.3,1),
            border-color 700ms cubic-bezier(.16,1,.3,1);
        }

        .premium-card:hover {
          transform: perspective(900px) translateY(-10px) rotateX(2deg);
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(64px) scale(.96);
            filter: blur(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes floatMark {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(8deg);
          }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          [data-reveal],
          .hero-word,
          .floating-mark,
          .marquee-track,
          .hero-motion,
          .premium-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
            clip-path: none !important;
          }
        }
      `}</style>

      <div className="fixed left-0 top-0 z-[120] h-1 w-full bg-transparent">
        <div className="scroll-progress h-full w-full bg-[#111111]" />
      </div>

      <header className="fixed left-0 right-0 top-4 z-50 mx-auto flex w-fit items-center gap-1 rounded-full border border-white/20 bg-[#111111] px-2 py-2 text-white shadow-2xl shadow-black/20">
        <a
          href="#home"
          className="rounded-full px-4 py-2 text-sm font-black tracking-tight"
        >
          Priyanka
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["Services", "#services"],
            ["Work", "#projects"],
            ["Toolkit", "#toolkit"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-xs font-bold text-white/65 transition hover:bg-white hover:text-[#111111]"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#C9B79C] px-4 py-2 text-xs font-black text-[#111111] transition hover:bg-white"
        >
          Hire
        </a>
      </header>

      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28 text-center"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.28),transparent_36%,rgba(233,228,218,0.35)_68%,transparent)]" />

        <div className="floating-mark absolute left-[10%] top-[22%] text-5xl font-black text-[#CFC9C1] md:text-7xl">
          ✦
        </div>

        <div className="floating-mark two absolute right-[12%] top-[30%] rotate-12 text-4xl font-black text-[#CFC9C1] md:text-6xl">
          ✦
        </div>

        <div className="hero-motion relative z-10">
          <p className="mb-5 rounded-full border border-[#111111]/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#111111]/60 shadow-sm backdrop-blur">
            WordPress · Elementor · Front-End
          </p>

          <h1 className="max-w-6xl text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.085em] md:text-[7.5rem] lg:text-[10rem]">
            <span className="hero-word block">Website</span>
            <span className="hero-word second block">Developer</span>
          </h1>

          <div className="mx-auto mt-8 flex h-28 w-28 items-center justify-center rounded-[1.7rem] bg-[#111111] text-4xl font-black text-[#F7F5F0] shadow-2xl md:h-36 md:w-36 md:text-5xl">
            LP
          </div>
        </div>

        <div
          data-reveal="clip"
          className="relative z-10 mt-28 grid w-full max-w-6xl gap-10 text-left md:grid-cols-[0.72fr_1fr] md:items-end"
        >
          <div>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Hey!
            </h2>

            <p className="mt-20 max-w-sm text-sm font-semibold leading-6 text-[#111111]/75">
              I&apos;m Lakshmi Priyanka Kotla, a website operations and
              front-end web developer based in India. I create WordPress,
              Elementor, landing pages, responsive fixes, magazine templates,
              and clean launch-ready website sections.
            </p>
          </div>

          <div className="md:ml-auto md:max-w-md">
            <p className="text-sm font-semibold leading-6 text-[#111111]/75">
              I help teams build, update, and maintain professional websites
              that look polished, work smoothly, and support real business
              goals. My work covers Elementor sections, WooCommerce flows,
              magazine-style layouts, forms, SEO basics, analytics, and tracking
              setup.
            </p>

            <button
              type="button"
              onClick={() => openProjects(projects[0])}
              className="mt-6 inline-flex items-center gap-2 text-sm font-black"
            >
              View all projects{" "}
              <span className="rounded-full border border-[#111111] px-2">
                ↗
              </span>
            </button>
          </div>
        </div>

        <p
          data-reveal="line"
          className="relative z-10 mt-28 max-w-3xl text-center text-2xl font-black leading-tight tracking-[-0.04em] text-[#111111]/22 md:text-4xl"
        >
          From pageant platforms to magazines, agency websites, foundations, and
          fashion brands — I build digital pages with clarity, speed, and style.
        </p>
      </section>

      <section className="overflow-hidden border-y border-[#111111]/10 bg-[#111111] py-5 text-[#F7F5F0]">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-sm font-black uppercase tracking-[0.25em]">
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-10">
              {[
                "WordPress",
                "Elementor",
                "Magazine Templates",
                "Landing Pages",
                "Responsive Fixes",
                "GA4",
                "Meta Pixel",
                "WooCommerce",
                "Website Operations",
              ].map((item) => (
                <span key={`${groupIndex}-${item}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <h2
            data-reveal="line"
            className="text-5xl font-black tracking-[-0.06em] md:text-6xl"
          >
            Services
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                data-reveal="clip"
                key={service.title}
                className="premium-card group min-h-[260px] rounded-[2rem] border border-[#111111]/10 bg-white p-6 shadow-sm hover:shadow-xl"
              >
                <p className="text-sm font-black text-[#111111]/35">
                  0{index + 1}
                </p>
                <div className="mt-6 h-1 w-14 rounded-full bg-[#C9B79C]" />
                <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-[#111111]/35">
                  {service.meta}
                </p>
                <p className="mt-5 text-sm font-semibold leading-6 text-[#111111]/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div
            data-reveal="clip"
            className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-6xl">
                Featured
                <br />
                Projects
              </h2>
              <p className="mt-5 max-w-md text-sm font-semibold leading-6 text-[#111111]/55">
                A focused preview of selected work. Use View All to explore the
                complete project list without leaving this page.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openProjects(projects[0])}
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-sm font-black text-white transition hover:bg-[#333]"
            >
              View All <span>↗</span>
            </button>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <button
                data-reveal="clip"
                key={project.title}
                type="button"
                onClick={() => openProjects(project)}
                className="group text-left"
              >
                <div
                  className={`premium-card relative min-h-[300px] overflow-hidden rounded-[2rem] border p-5 shadow-lg group-hover:shadow-2xl ${
                    index % 4 === 0
                      ? "border-[#111111] bg-[#111111] text-[#F7F5F0]"
                      : index % 4 === 1
                      ? "border-[#DDD3C3] bg-[#ECE7DE] text-[#111111]"
                      : index % 4 === 2
                      ? "border-[#E6E1D7] bg-white text-[#111111]"
                      : "border-[#DDD8CD] bg-[#F2EFE8] text-[#111111]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.28),transparent_22%),radial-gradient(circle_at_80%_85%,rgba(0,0,0,0.05),transparent_24%)]" />

                  <div className="relative flex h-full min-h-[260px] flex-col justify-between rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-black ${
                          index % 4 === 0
                            ? "bg-[#F7F5F0] text-[#111111]"
                            : "bg-[#111111] text-[#F7F5F0]"
                        }`}
                      >
                        {project.type}
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current text-sm font-black transition group-hover:rotate-45">
                        ↗
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-md text-sm font-semibold leading-6 opacity-75">
                        {project.description}
                      </p>

                      <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] opacity-55">
                        Open project details
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <h2
            data-reveal="line"
            className="text-5xl font-black tracking-[-0.06em] md:text-6xl"
          >
            Work Strengths
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {strengths.map((item, index) => (
              <div
                data-reveal="clip"
                key={item.title}
                className={`premium-card flex min-h-[240px] flex-col justify-between rounded-[1.8rem] border border-[#111111]/10 p-6 ${
                  index === 0
                    ? "bg-[#111111] text-[#F7F5F0]"
                    : index === 1
                    ? "bg-white text-[#111111]"
                    : index === 2
                    ? "bg-[#ECE7DE] text-[#111111]"
                    : "bg-[#F2EFE8] text-[#111111]"
                }`}
              >
                <p className="text-sm font-semibold leading-6 opacity-75">
                  {item.text}
                </p>

                <div>
                  <div
                    className={`mb-3 h-10 w-10 rounded-full ${
                      index === 0 ? "bg-[#F7F5F0]" : "bg-[#111111]"
                    }`}
                  />
                  <h3 className="text-xl font-black tracking-[-0.03em]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="toolkit" className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2
            data-reveal="line"
            className="text-5xl font-black tracking-[-0.06em] md:text-6xl"
          >
            Toolkit
          </h2>

          <div data-reveal="clip" className="mt-10 flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className={`rounded-full border border-[#111111]/10 px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-1 ${
                  index % 4 === 0
                    ? "bg-[#111111] text-[#F7F5F0]"
                    : index % 4 === 1
                    ? "bg-white text-[#111111]"
                    : index % 4 === 2
                    ? "bg-[#ECE7DE] text-[#111111]"
                    : "bg-[#F2EFE8] text-[#111111]"
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <h2
            data-reveal="line"
            className="text-5xl font-black tracking-[-0.06em] md:text-6xl"
          >
            Thoughts
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {thoughts.map((thought, index) => (
              <div
                data-reveal="clip"
                key={thought.title}
                className={`premium-card min-h-[280px] rounded-[1.8rem] border border-[#111111]/10 p-6 shadow-sm ${
                  index === 0
                    ? "bg-white text-[#111111]"
                    : index === 1
                    ? "bg-[#111111] text-[#F7F5F0]"
                    : "bg-[#ECE7DE] text-[#111111]"
                }`}
              >
                <p className="mb-16 text-xs font-black uppercase tracking-[0.2em] opacity-40">
                  Note 0{index + 1}
                </p>

                <h3 className="text-3xl font-black leading-none tracking-[-0.05em]">
                  {thought.title}
                </h3>

                <p className="mt-5 text-sm font-semibold leading-6 opacity-60">
                  {thought.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20">
        <div
          data-reveal="clip"
          className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start"
        >
          <div>
            <h2 className="text-5xl font-black tracking-[-0.06em] md:text-6xl">
              Let&apos;s talk.
            </h2>

            <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-[#111111]/55">
              Have a WordPress website, landing page, magazine template, or
              website operations task to improve? Send me a message and
              I&apos;ll get back to you.
            </p>

            <div className="mt-12 flex gap-3">
              <a
                href="mailto:lakshmipriyankakotla@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#111111]/10 bg-white text-sm font-black transition hover:bg-[#111111] hover:text-white"
              >
                ✉
              </a>

              <a
                href="https://www.linkedin.com/in/lakshmi-priyanka-kotla-web"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#111111]/10 bg-white text-sm font-black transition hover:bg-[#111111] hover:text-white"
              >
                in
              </a>

              <a
                href="https://lakshmi-priyanka.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#111111]/10 bg-white text-sm font-black transition hover:bg-[#111111] hover:text-white"
              >
                ↗
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.8rem] bg-[#111111] p-5 text-white shadow-2xl shadow-black/10"
          >
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {formStatus === "success" ? (
              <div className="rounded-[1.4rem] bg-[#C9B79C] p-6 text-[#111111]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#111111]/40">
                  Message Sent
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                  Thank you for contacting me.
                </h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#111111]/60">
                  I have received your message and I&apos;ll get back to you
                  soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormStatus("idle");
                    setFormMessage("");
                  }}
                  className="mt-6 rounded-xl bg-[#111111] px-5 py-3 text-sm font-black text-white transition hover:bg-[#333]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <label className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#C9B79C]"
                />

                <label className="mt-5 block text-xs font-black uppercase tracking-[0.2em] text-white/40">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#C9B79C]"
                />

                <label className="mt-5 block text-xs font-black uppercase tracking-[0.2em] text-white/40">
                  Project
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your website or task"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#C9B79C]"
                />

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#C9B79C] px-5 py-3 text-sm font-black text-[#111111] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {formStatus === "submitting" ? "Sending..." : "Submit"}
                </button>

                {formStatus === "error" && formMessage && (
                  <p className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-semibold leading-5 text-white/70">
                    {formMessage}
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[#111111] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr_1fr]">
          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em]">
            Websites
            <br />
            built
            <br />
            with clarity.
          </h2>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40">
              Quick links
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                ["Home", "home"],
                ["Services", "services"],
                ["Work", "projects"],
                ["Toolkit", "toolkit"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a
                  key={label}
                  href={`#${id}`}
                  className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#111111]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>

            <a
              href="mailto:lakshmipriyankakotla@gmail.com"
              className="mt-5 block text-sm font-semibold text-white/70"
            >
              lakshmipriyankakotla@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/lakshmi-priyanka-kotla-web"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm font-semibold text-white/70"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <p className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-[8rem] font-black uppercase leading-none tracking-[-0.1em] text-white/[0.04] md:text-[17rem]">
          Priyanka
        </p>
      </footer>

      {projectsOpen && (
        <div className="fixed inset-0 z-[100] bg-[#111111]/70 p-3 backdrop-blur-xl md:p-6">
          <div className="mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-[2rem] bg-[#F7F5F0] text-[#111111] shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-[#111111]/10 px-5 py-4 md:px-7">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#111111]/40">
                  View All
                </p>
                <h3 className="mt-1 text-2xl font-black tracking-[-0.04em]">
                  Complete Project Overview
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setProjectsOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-lg font-black text-white transition hover:bg-[#333]"
                aria-label="Close all projects"
              >
                ×
              </button>
            </div>

            <div className="grid min-h-0 flex-1 gap-0 lg:grid-cols-[360px_1fr]">
              <div className="min-h-0 overflow-y-auto border-r border-[#111111]/10 p-4 md:p-5">
                <div className="grid gap-3">
                  {projects.map((project, index) => {
                    const isActive = activeProject.title === project.title;

                    return (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className={`rounded-[1.3rem] border p-4 text-left transition ${
                          isActive
                            ? "border-[#111111] bg-[#111111] text-white"
                            : "border-[#111111]/10 bg-white text-[#111111] hover:border-[#111111]/30"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${
                              isActive
                                ? "bg-white text-[#111111]"
                                : "bg-[#ECE7DE] text-[#111111]"
                            }`}
                          >
                            {project.type}
                          </span>

                          <span className="text-xs font-black">
                            0{index + 1}
                          </span>
                        </div>

                        <h4 className="mt-6 text-xl font-black tracking-[-0.04em]">
                          {project.title}
                        </h4>

                        <p
                          className={`mt-3 text-xs font-semibold leading-5 ${
                            isActive ? "text-white/65" : "text-[#111111]/55"
                          }`}
                        >
                          {project.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="min-h-0 overflow-y-auto p-5 md:p-8">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
                  <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#111111] p-6 text-white md:min-h-[520px] md:p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,183,156,0.35),transparent_22%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.12),transparent_26%)]" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between gap-4">
                        <span className="rounded-full bg-[#C9B79C] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#111111]">
                          {activeProject.type}
                        </span>

                        <span className="text-5xl font-black text-white/10">
                          ↗
                        </span>
                      </div>

                      <div>
                        <h3 className="max-w-2xl text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
                          {activeProject.title}
                        </h3>

                        <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/65 md:text-base">
                          {activeProject.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-[2rem] border border-[#111111]/10 bg-white p-6 md:p-8">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#111111]/35">
                        Project Details
                      </p>

                      <h4 className="mt-5 text-3xl font-black tracking-[-0.05em]">
                        Professional website support and execution.
                      </h4>

                      <p className="mt-5 text-sm font-semibold leading-7 text-[#111111]/60">
                        This project reflects practical website operations:
                        clean page structure, responsive sections, content
                        organisation, CTA clarity, tracking support, and
                        polished front-end presentation.
                      </p>

                      <div className="mt-7 grid gap-3">
                        {[
                          "Responsive layout support",
                          "Content and section organisation",
                          "Landing page / campaign readiness",
                          "Website maintenance and polish",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl bg-[#F2EFE8] px-4 py-3 text-sm font-black text-[#111111]/70"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#111111] px-5 py-3 text-sm font-black text-white transition hover:bg-[#333]"
                      >
                        Visit Live Website ↗
                      </a>

                      <button
                        type="button"
                        onClick={() => setProjectsOpen(false)}
                        className="rounded-full border border-[#111111]/15 px-5 py-3 text-sm font-black text-[#111111] transition hover:border-[#111111]"
                      >
                        Back to Portfolio
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[2rem] bg-[#ECE7DE] p-5 md:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#111111]/35">
                    All Projects
                  </p>

                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {projects.map((project) => (
                      <button
                        key={`mini-${project.title}`}
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className={`rounded-2xl px-4 py-4 text-left text-sm font-black transition ${
                          activeProject.title === project.title
                            ? "bg-[#111111] text-white"
                            : "bg-white text-[#111111] hover:bg-[#F7F5F0]"
                        }`}
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}