"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="flex min-h-[75vh] items-center px-6 py-16 md:min-h-[80vh] md:px-12 lg:px-20">
      <div className="max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm"
        >
          UI/UX Designer & Front-End Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
        >
          I design thoughtful
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          digital experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:mt-8 md:text-lg"
        >
          I&apos;m Wannur, an Information Technology student focused on creating
          clean, intuitive interfaces and turning ideas into functional digital
          products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10"
        >
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-center text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:opacity-80"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black px-6 py-3 text-center text-sm font-medium transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
