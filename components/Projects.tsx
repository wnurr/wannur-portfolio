"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/project";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
      {/* Section Header */}
      <div className="mb-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Selected Work
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Projects where design meets development.
        </h2>
      </div>

      {/* Project List */}
      <div className="space-y-20 md:space-y-28">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
          >
            {/* Project Image */}
            <motion.div
              whileHover={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
              }}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 sm:aspect-[16/10] ${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Project Content */}
            <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
              <p className="mb-6 text-sm text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </p>

              <p className="mb-3 text-sm uppercase tracking-[0.15em] text-gray-500">
                {project.category}
              </p>

              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                {project.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-300 px-3 py-1.5 text-xs text-gray-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Link
                href={project.link}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
              >
                View Project
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
