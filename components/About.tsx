import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-gray-200 px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              About Me
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Designing with purpose,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              building with curiosity.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-xl">
            <p className="text-lg leading-8 text-gray-600">
              I&apos;m Wannur, an Information Technology student with an
              interest in UI/UX design and front-end development. I enjoy
              transforming ideas into clean, intuitive, and functional digital
              experiences.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              I&apos;m especially interested in designing user-friendly
              interfaces, understanding how users interact with technology,
              and turning those designs into working applications.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}