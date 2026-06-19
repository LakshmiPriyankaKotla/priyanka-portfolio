import Script from "next/script";

const services = [
  {
    title: "Website Development",
    meta: "WordPress · Elementor · Responsive UI",
  },
  {
    title: "Landing Page Build",
    meta: "Campaign pages · CTA flow · Forms",
  },
  {
    title: "Frontend Fixes",
    meta: "HTML · CSS · JavaScript · Layout repair",
  },
  {
    title: "Website Operations",
    meta: "SEO · GA4 · GSC · Meta Pixel",
  },
];

const projects = [
  {
    title: "Miss International Diva Canada",
    type: "Pageant Website",
    description:
      "A live pageant website with event-focused landing sections, registration CTAs, sponsor/logo areas, responsive layout fixes, and SEO-friendly structure.",
    link: "https://missinternationaldivacanada.com/",
    accent: "from-[#28161c] via-[#783344] to-[#f2b6a0]",
  },
  {
    title: "Mrs International Diva",
    type: "Premium Event Website",
    description:
      "A polished pageant website with hero storytelling, package sections, winners, livestream links, navigation improvements, and responsive refinements.",
    link: "https://mrsinternationaldiva.com/",
    accent: "from-[#0f172a] via-[#334155] to-[#e0c6a8]",
  },
  {
    title: "MyDream Magazine",
    type: "Magazine Platform",
    description:
      "Magazine website updates with PDF preview improvements, issue-wise content structure, responsive fixes, and digital reading experience support.",
    link: "https://mydreammagazine.com/",
    accent: "from-[#312e81] via-[#7c3aed] to-[#f7d9c4]",
  },
  {
    title: "MyDream Global",
    type: "Website Operations",
    description:
      "Ongoing website support across campaign pages, form updates, tracking scripts, SEO basics, GA4, GSC, Meta Pixel, and responsive troubleshooting.",
    link: "https://mydreamglobal.com/",
    accent: "from-[#1f2937] via-[#6b4f3a] to-[#eab676]",
  },
];

const strengths = [
  {
    title: "Clean Execution",
    text: "I convert website tasks into structured, polished, client-ready pages with clear hierarchy and practical flow.",
  },
  {
    title: "Responsive Focus",
    text: "I check desktop, tablet, and mobile behaviour so layouts stay readable, balanced, and consistent.",
  },
  {
    title: "Fast Web Support",
    text: "I handle live website updates, broken sections, button links, forms, content edits, and launch fixes.",
  },
  {
    title: "Campaign Ready",
    text: "I support landing pages with CTAs, forms, SEO basics, analytics, Search Console, and Meta Pixel setup.",
  },
];

const thoughts = [
  {
    title: "A website should guide users clearly.",
    text: "Every section should make the next action easier, whether that is registration, enquiry, booking, or purchase.",
  },
  {
    title: "Mobile polish builds trust.",
    text: "Spacing, text size, button flow, and alignment matter most when users visit from phones.",
  },
  {
    title: "Good operations keep websites alive.",
    text: "Regular updates, tracking checks, form testing, and responsive maintenance keep websites useful after launch.",
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
  "Website Maintenance",
  "SEO Basics",
  "Google Analytics",
  "Google Search Console",
  "Meta Pixel",
  "Form Setup",
  "Hostinger",
  "Canva",
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#f6f1e8] text-[#18110d]">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(42px) scale(0.985);
          filter: blur(8px);
          transition:
            opacity 900ms cubic-bezier(.2,.8,.2,1),
            transform 900ms cubic-bezier(.2,.8,.2,1),
            filter 900ms cubic-bezier(.2,.8,.2,1);
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        .hero-word {
          animation: heroIn 900ms cubic-bezier(.2,.8,.2,1) both;
        }

        .hero-word.second {
          animation-delay: 140ms;
        }

        .floating-mark {
          animation: floatMark 4.5s ease-in-out infinite;
        }

        .floating-mark.two {
          animation-delay: 1.2s;
        }

        .marquee-track {
          animation: marquee 22s linear infinite;
        }

        .soft-grain {
          background-image:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.45) 0 1px, transparent 1px),
            radial-gradient(circle at 80% 40%, rgba(0,0,0,.08) 0 1px, transparent 1px);
          background-size: 18px 18px, 26px 26px;
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(54px) scale(.98);
            filter: blur(10px);
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
            transform: translateY(-16px) rotate(8deg);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          [data-reveal],
          .hero-word,
          .floating-mark,
          .marquee-track {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <RevealScript />

      <header className="fixed left-0 right-0 top-4 z-50 mx-auto flex w-fit items-center gap-1 rounded-full bg-[#18110d] px-2 py-2 text-white shadow-2xl shadow-black/15">
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
              className="rounded-full px-4 py-2 text-xs font-bold text-white/65 transition hover:bg-white hover:text-[#18110d]"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:lakshmipriyankakotla@gmail.com"
          className="rounded-full bg-[#f4c37b] px-4 py-2 text-xs font-black text-[#18110d]"
        >
          Hire
        </a>
      </header>

      <section
        id="home"
        className="soft-grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28 text-center"
      >
        <div className="floating-mark absolute left-[9%] top-[20%] text-5xl font-black text-[#7c2d3a] md:text-7xl">
          ✦
        </div>

        <div className="floating-mark two absolute right-[12%] top-[28%] rotate-12 text-4xl font-black text-[#b45309] md:text-6xl">
          ✦
        </div>

        <p className="mb-5 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-black/60 shadow-sm">
          WordPress · Elementor · Front-End
        </p>

        <h1 className="max-w-6xl text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.085em] md:text-[7.5rem] lg:text-[10rem]">
          <span className="hero-word block">Website</span>
          <span className="hero-word second block">Developer</span>
        </h1>

        <div className="mt-8 flex h-28 w-28 items-center justify-center rounded-[1.7rem] bg-[#18110d] text-4xl font-black text-[#f4c37b] shadow-2xl md:h-36 md:w-36 md:text-5xl">
          LP
        </div>

        <div
          data-reveal
          className="mt-28 grid w-full max-w-6xl gap-10 text-left md:grid-cols-[0.72fr_1fr] md:items-end"
        >
          <div>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Hey!
            </h2>

            <p className="mt-20 max-w-sm text-sm font-semibold leading-6 text-black/75">
              I&apos;m Lakshmi Priyanka Kotla, a website operations and
              front-end web developer based in India. I work with WordPress,
              Elementor, landing pages, responsive fixes, website maintenance,
              and clean launch-ready execution.
            </p>
          </div>

          <div className="md:ml-auto md:max-w-md">
            <p className="text-sm font-semibold leading-6 text-black/75">
              I help teams build, update, and maintain professional websites
              that look polished, work smoothly, and support real business
              goals. My work covers Elementor sections, WooCommerce flows,
              forms, SEO basics, analytics, and tracking setup.
            </p>

            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-black"
            >
              See selected work{" "}
              <span className="rounded-full border border-black px-2">↗</span>
            </a>
          </div>
        </div>

        <p
          data-reveal
          className="mt-28 max-w-3xl text-center text-2xl font-black leading-tight tracking-[-0.04em] text-[#18110d]/20 md:text-4xl"
        >
          From idea to launch. Clean, responsive websites built to move fast,
          stay simple, and perform with clarity.
        </p>
      </section>

      <section className="overflow-hidden border-y border-black/10 bg-[#18110d] py-5 text-[#f6f1e8]">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-sm font-black uppercase tracking-[0.25em]">
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-10">
              {[
                "WordPress",
                "Elementor",
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
            data-reveal
            className="text-5xl font-black tracking-[-0.06em] md:text-6xl"
          >
            Services
          </h2>

          <div
            data-reveal
            className="mt-12 divide-y divide-black/15 border-y border-black/15"
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="group grid gap-4 py-7 transition md:grid-cols-[1fr_1fr]"
              >
                <h3 className="text-xl font-black tracking-[-0.03em] transition group-hover:translate-x-2">
                  {service.title}
                </h3>

                <p className="text-sm font-semibold text-black/45 md:text-right">
                  {service.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div
            data-reveal
            className="mb-10 flex items-end justify-between gap-4"
          >
            <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-6xl">
              Featured
              <br />
              Projects
            </h2>

            <a href="#contact" className="hidden text-sm font-black md:inline-flex">
              Work with me ↗
            </a>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <a
                data-reveal
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className={`relative min-h-[285px] overflow-hidden rounded-[1.8rem] bg-gradient-to-br ${project.accent} p-5 shadow-xl shadow-black/10 transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.45),transparent_22%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.2),transparent_24%)]" />

                  <div className="relative flex h-full min-h-[245px] flex-col justify-between rounded-[1.3rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-black">
                        {project.type}
                      </span>
                      <span className="text-sm font-black transition group-hover:rotate-45">
                        ↗
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black tracking-[-0.04em]">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-md text-sm font-semibold leading-6 text-white/75">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <h2
            data-reveal
            className="text-5xl font-black tracking-[-0.06em] md:text-6xl"
          >
            Work Strengths
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {strengths.map((item) => (
              <div
                data-reveal
                key={item.title}
                className="flex min-h-[235px] flex-col justify-between rounded-[1.6rem] bg-[#18110d] p-6 text-[#f6f1e8] transition duration-500 hover:-translate-y-2 hover:bg-[#7c2d3a]"
              >
                <p className="text-sm font-semibold leading-6 text-white/75">
                  {item.text}
                </p>

                <div>
                  <div className="mb-3 h-10 w-10 rounded-full bg-[#f4c37b]" />
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
            data-reveal
            className="text-5xl font-black tracking-[-0.06em] md:text-6xl"
          >
            Toolkit
          </h2>

          <div data-reveal className="mt-10 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-black text-black/70 shadow-sm transition hover:-translate-y-1 hover:bg-[#f4c37b] hover:text-black"
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
            data-reveal
            className="text-5xl font-black tracking-[-0.06em] md:text-6xl"
          >
            Thoughts
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {thoughts.map((thought, index) => (
              <div
                data-reveal
                key={thought.title}
                className={`min-h-[265px] rounded-[1.6rem] p-6 shadow-sm transition hover:-translate-y-2 ${
                  index === 2
                    ? "bg-[#18110d] text-white"
                    : "bg-white text-[#18110d]"
                }`}
              >
                <p
                  className={`mb-16 text-xs font-black uppercase tracking-[0.2em] ${
                    index === 2 ? "text-white/40" : "text-black/35"
                  }`}
                >
                  Note 0{index + 1}
                </p>

                <h3 className="text-3xl font-black leading-none tracking-[-0.05em]">
                  {thought.title}
                </h3>

                <p
                  className={`mt-5 text-sm font-semibold leading-6 ${
                    index === 2 ? "text-white/60" : "text-black/55"
                  }`}
                >
                  {thought.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20">
        <div
          data-reveal
          className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start"
        >
          <div>
            <h2 className="text-5xl font-black tracking-[-0.06em] md:text-6xl">
              Let&apos;s talk.
            </h2>

            <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-black/55">
              Have a WordPress website, landing page, or website operations task
              to improve? Send me a message and I&apos;ll get back to you.
            </p>

            <div className="mt-12 flex gap-3">
              <a
                href="mailto:lakshmipriyankakotla@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white text-sm font-black"
              >
                ✉
              </a>

              <a
                href="https://www.linkedin.com/in/lakshmi-priyanka-kotla-web"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white text-sm font-black"
              >
                in
              </a>

              <a
                href="https://lakshmi-priyanka.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white text-sm font-black"
              >
                ↗
              </a>
            </div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="rounded-[1.6rem] bg-[#18110d] p-5 text-white shadow-2xl shadow-black/10"
          >
            <input
              type="hidden"
              name="access_key"
              value="a02c746d-c10a-4862-a968-4d3fe473b928"
            />
            <input
              type="hidden"
              name="subject"
              value="New portfolio enquiry from lakshmi-priyanka.vercel.app"
            />
            <input
              type="hidden"
              name="from_name"
              value="Lakshmi Priyanka Portfolio"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://lakshmi-priyanka.vercel.app/"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <label className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#f4c37b]"
            />

            <label className="mt-5 block text-xs font-black uppercase tracking-[0.2em] text-white/40">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#f4c37b]"
            />

            <label className="mt-5 block text-xs font-black uppercase tracking-[0.2em] text-white/40">
              Project
            </label>
            <textarea
              name="message"
              required
              placeholder="Tell me about your website or task"
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#f4c37b]"
            />

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#f4c37b] px-5 py-3 text-sm font-black text-[#18110d] transition hover:bg-white"
            >
              Submit
            </button>

            <p className="mt-4 text-xs leading-5 text-white/35">
              This form sends directly to lakshmipriyankakotla@gmail.com through
              Web3Forms.
            </p>
          </form>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[#18110d] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr_1fr]">
          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em]">
            Building
            <br />
            websites
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
                  className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#18110d]"
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

        <p className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-[9rem] font-black uppercase leading-none tracking-[-0.1em] text-white/[0.04] md:text-[18rem]">
          Priyanka
        </p>
      </footer>
    </main>
  );
}

function RevealScript() {
  return (
    <Script id="portfolio-scroll-reveal" strategy="afterInteractive">
      {`
        (function () {
          const revealItems = document.querySelectorAll("[data-reveal]");

          if (!("IntersectionObserver" in window)) {
            revealItems.forEach(function (item) {
              item.classList.add("is-visible");
            });
            return;
          }

          const observer = new IntersectionObserver(
            function (entries) {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  observer.unobserve(entry.target);
                }
              });
            },
            {
              threshold: 0.12,
              rootMargin: "0px 0px -80px 0px"
            }
          );

          revealItems.forEach(function (item) {
            observer.observe(item);
          });
        })();
      `}
    </Script>
  );
}