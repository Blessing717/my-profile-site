const profile = {
  name: "Tlhariane Shirinda",
  title: "IT Student | Networking & Technology",
  bio: "I am an Information Technology student passionate about networking, cybersecurity, databases, and building practical technology solutions.",
  location: "South Africa",
};

const skills = [
  "Cisco Networking",
  "CCNA",
  "CCNP",
  "Cybersecurity",
  "SQL",
  "Windows",
  "Packet Tracer",
  "Git & GitHub",
];

const projects = [
  {
    title: "Harbour Network Project",
    description:
      "A 3-tier enterprise network design including VLANs, wireless networking, VPN connectivity, security, and network infrastructure.",
    technologies: ["Cisco", "Packet Tracer", "VLANs", "VPN"],
  },
  {
    title: "Tutoring Platform",
    description:
      "A database-driven tutoring platform designed to connect students with tutors and manage academic information.",
    technologies: ["SQL", ".NET", "Database"],
  },
];

const education = {
  qualification: "Diploma in Information Technology",
  institution: "Nelson Mandela University",
  focus: "Communication Networks",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h2 className="text-xl font-bold">TS.</h2>

        <div className="hidden gap-6 text-sm text-zinc-300 sm:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          Hello, I&apos;m
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          {profile.name}
        </h1>

        <h2 className="mt-6 text-2xl font-medium text-zinc-300 sm:text-3xl">
          {profile.title}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {profile.bio}
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:bg-zinc-900"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            About Me
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold">
              Building my career in technology.
            </h2>

            <div className="space-y-4 text-zinc-400">
              <p>
                I&apos;m currently completing my Diploma in Information
                Technology with a focus on Communication Networks.
              </p>

              <p>
                I enjoy learning about computer networks, cybersecurity,
                databases, and IT infrastructure while developing practical
                technical skills.
              </p>

              <p>
                My goal is to continue developing my skills through real-world
                projects and opportunities in the IT industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Education
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-2xl font-semibold">
              {education.qualification}
            </h2>

            <p className="mt-2 text-zinc-400">
              {education.institution}
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Specialisation: {education.focus}
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Technologies &amp; Skills
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Things I&apos;ve Worked On
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Let&apos;s connect.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            I&apos;m interested in IT opportunities, networking, technology,
            and opportunities to learn and grow.
          </p>

          <p className="mt-8 text-zinc-300">
            Location: {profile.location}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        © 2026 {profile.name}. Built with Next.js.
      </footer>
    </main>
  );
}