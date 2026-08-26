import FadeIn from "@/components/FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-gray-200 px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <FadeIn>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s build something meaningful together.
          </h2>
        </div>

<FadeIn delay={0.15}>
        <div className="flex flex-col justify-end">
          <p className="max-w-xl text-lg leading-8 text-gray-600">
            I&apos;m open to internship opportunities, collaborations and
            conversations around UI/UX design and software development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:wannnnnur26@gmail.com"
              className="rounded-full bg-black text-center px-6 py-3 text-sm font-medium text-white transition hover:opacity-80"
            >
              Email Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black px-6 py-3 text-center text-sm font-medium transition hover:bg-black hover:text-white"
            >
              View Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium">
            <a
              href="https://github.com/wnurr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-50"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/wan-nur-humairah-binti-cik-wan-abu-bakar-4385b6286"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-50"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        </FadeIn>
      </div>
      </FadeIn>
    </section>
  );
}
