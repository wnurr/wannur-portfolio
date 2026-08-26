import FadeIn from "@/components/FadeIn";

const skills = [
  {
    category: "Design",
    items: [
      "UI Design",
      "UX Design",
      "Wireframing",
      "Prototyping",
      "User Flow",
      "Figma",
    ],
  },
  {
    category: "Front-End",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Development",
    items: ["Laravel", "PHP", "MySQL", "REST API", "Java", "Python"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-50 px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Skills
        </p>

        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Tools & technologies I work with.
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {skills.map((skillGroup, index) => (
            <FadeIn key={skillGroup.category} delay={index * 0.1}>
              <div>
                <h3 className="mb-5 text-lg font-semibold">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
