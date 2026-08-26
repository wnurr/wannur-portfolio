export const projects = [
  {
    id: 1,
    slug: "smart-shelf",
    title: "Smart Shelf Inventory System",
    category: "IoT • Web Development • UI/UX",

    description:
      "A smart inventory monitoring system that uses load cell sensors and ESP32 to automatically track the quantity of construction fasteners in real time.",

    image: "/images/smart-shelf.png",

    technologies: [
      "Laravel",
      "MySQL",
      "ESP32",
      "REST API",
      "Tailwind CSS",
    ],

    role: "UI/UX Designer & Developer",

    year: "2026",

    overview:
      "Smart Shelf Inventory System is an IoT-based inventory monitoring system designed to improve the process of tracking construction fasteners such as bolts, screws, nails and washers.",

    problem:
      "Traditional inventory tracking relies heavily on manual stock checking. This can be time-consuming and may result in inaccurate inventory records, especially when items are frequently added or removed.",

    solution:
      "The system integrates load cell sensors with an ESP32 to measure the weight of stored items. The sensor readings are sent to a Laravel-based web application where the system calculates the estimated quantity and updates inventory information.",

    link: "/projects/smart-shelf",
  },

  {
    id: 2,
    slug: "dress-me-up",
    title: "Dress Me Up",
    category: "UI/UX Design",

    description:
      "A responsive fashion-based interactive experience designed with a focus on usability, visual hierarchy and intuitive user interaction.",

    image: "/images/dress-me-up.png",

    technologies: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "UX Design",
    ],

    role: "UI/UX Designer",

    year: "2026",

    overview:
      "Dress Me Up is a responsive fashion-based digital experience designed to provide users with an engaging and intuitive interface.",

    problem:
      "The challenge was to create an interactive fashion experience while maintaining simple navigation and a clear visual hierarchy.",

    solution:
      "The interface was designed through wireframing and prototyping in Figma, focusing on responsive layouts, usability and consistent visual elements.",

    link: "/projects/dress-me-up",
  },

  {
    id: 3,
    slug: "clinic-system",
    title: "Clinic Appointment System",
    category: "Software Development",

    description:
      "A desktop appointment management system that allows users to register, book appointments and manage clinic information through an administrative dashboard.",

    image: "/images/clinic-system.png",

    technologies: [
      "Java",
      "JavaFX",
      "MySQL",
      "DAO",
    ],

    role: "Software Developer",

    year: "2026",

    overview:
      "The Clinic Appointment System is a desktop application designed to simplify appointment booking and clinic management.",

    problem:
      "Managing appointments manually can lead to scheduling difficulties and inefficient patient record management.",

    solution:
      "The application provides user registration, appointment booking and administrative management features through a JavaFX interface connected to a MySQL database.",

    link: "/projects/clinic-system",
  },
];