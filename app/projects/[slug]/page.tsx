import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <Link href="/" className="text-xl font-bold tracking-tight">
          WANNUR.
        </Link>

        <Link
          href="/#projects"
          className="text-sm font-medium transition hover:opacity-60"
        >
          ← Back to Projects
        </Link>
      </nav>

      {/* Project Hero */}
      <section className="px-6 pb-16 pt-20 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            {project.category}
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            {project.description}
          </p>
        </div>

        {/* Project Information */}
        <div className="mt-12 grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          <div>
            <p className="text-sm text-gray-400">Role</p>

            <p className="mt-2 font-medium">{project.role}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Year</p>

            <p className="mt-2 font-medium">{project.year}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Technologies</p>

            <p className="mt-2 font-medium">
              {project.technologies.join(", ")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Project Image */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-gray-100 sm:aspect-16/9">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            01 — Overview
          </h2>

          <p className="max-w-3xl text-xl leading-9 text-gray-700 lg:col-span-2">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            02 — The Problem
          </h2>

          <div className="lg:col-span-2">
            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Understanding the challenge.
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {project.problem}
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            03 — Solution
          </h2>

          <div className="lg:col-span-2">
            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Turning the idea into a solution.
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gray-50 px-6 py-24 md:px-12 lg:px-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Technologies
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">Built with</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-medium"
        >
          ← View all projects
        </Link>
      </section>
    </main>
  );
}
