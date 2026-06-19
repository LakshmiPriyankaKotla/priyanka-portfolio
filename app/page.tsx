const projects = [
  {
    title: "Miss International Diva Canada",
    type: "Live Website",
    description:
      "Responsive pageant website with landing sections, registration CTAs, SEO-focused structure, sponsor/logo areas, and mobile-friendly layouts.",
    link: "https://missinternationaldivacanada.com/",
  },
  {
    title: "Mrs International Diva",
    type: "WordPress Website",
    description:
      "Premium event website with hero sections, package details, winners, livestream links, responsive fixes, and pageant-focused design.",
    link: "https://mrsinternationaldiva.com/",
  },
  {
    title: "MyDream Magazine",
    type: "Magazine Website",
    description:
      "Magazine platform updates with PDF previews, issue-wise structure, responsive layouts, page fixes, and performance-focused improvements.",
    link: "https://mydreammagazine.com/",
  },
  {
    title: "MyDream Global",
    type: "Website Operations",
    description:
      "Ongoing website operations including content updates, landing pages, forms, tracking scripts, SEO setup, and responsive troubleshooting.",
    link: "https://mydreamglobal.com/",
  },
];

const skills = [
  "WordPress",
  "Elementor",
  "WooCommerce",
  "HTML",
  "CSS",
  "JavaScript",
  "Responsive Design",
  "Landing Pages",
  "Website Redesign",
  "Website Maintenance",
  "SEO",
  "Google Analytics",
  "Google Search Console",
  "Meta Pixel",
  "Form Setup",
];

const services = [
  "WordPress website design and updates",
  "Elementor landing pages",
  "Responsive mobile/tablet fixes",
  "WooCommerce and payment page updates",
  "Website content and layout maintenance",
  "SEO, GA4, GSC, and tracking setup",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080b] text-white">
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
              WordPress • Elementor • Front-End
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Hi, I&apos;m Priyanka — I build clean, responsive WordPress
              websites and landing pages.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
              I help businesses, events, pageants, fashion brands, and media
              platforms build, update, and maintain websites using WordPress,
              Elementor, WooCommerce, HTML, CSS, JavaScript, SEO tools, and
              tracking setups.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-black transition hover:bg-yellow-300"
              >
                View My Work
              </a>

              <a
                href="mailto:your-email@example.com"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-extrabold text-white transition hover:bg-white hover:text-black"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-3xl font-black text-yellow-400">40+</p>
              <p className="mt-2 text-sm font-semibold text-zinc-300">
                Websites managed and updated
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-3xl font-black text-yellow-400">2+</p>
              <p className="mt-2 text-sm font-semibold text-zinc-300">
                Years of hands-on website operations
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-3xl font-black text-yellow-400">100%</p>
              <p className="mt-2 text-sm font-semibold text-zinc-300">
                Remote-friendly web support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            What I can help clients with
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-[#101014] p-6"
              >
                <p className="text-lg font-bold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Selected live projects
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-yellow-400/60 hover:bg-white/[0.07]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                  {project.type}
                </p>

                <h3 className="mt-3 text-2xl font-black group-hover:text-yellow-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-300">
                  {project.description}
                </p>

                <p className="mt-6 text-sm font-extrabold text-yellow-400">
                  Visit Website →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Tools and skills
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-[#101014] px-4 py-2 text-sm font-semibold text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-yellow-400/30 bg-yellow-400 p-8 text-black md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">
            Need a WordPress website, landing page, or website fix?
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8">
            I can help with Elementor pages, WooCommerce updates, responsive
            fixes, website maintenance, SEO setup, GA4/GSC, Meta Pixel, forms,
            and clean front-end sections.
          </p>

          <a
            href="mailto:lakshmipriyankakotla@gmail.com"
            className="mt-8 inline-block rounded-full bg-black px-7 py-3 text-sm font-extrabold text-white transition hover:bg-zinc-900"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Priyanka. WordPress & Elementor Web
        Developer.
      </footer>
    </main>
  );
}