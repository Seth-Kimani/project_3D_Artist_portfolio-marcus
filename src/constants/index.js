import {
  mobile,
  backend,
  creator,
  web,
  ae,
  maya,
  zbrush,
  substance,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  cop,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "3D ANIMATION",
    icon: web,
  },
  {
    title: "CHARACTER MODELING",
    icon: mobile,
  },
  {
    title: "HARD SURFACE MODELING",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Maya",
    icon: maya,
  },
  {
    name: "After Affects",
    icon: ae,
  },
  {
    name: "Substance",
    icon: substance,
  },
  {
    name: "Zbrush",
    icon: zbrush,
  },

];

const experiences = [
  {
    title: "CG Generalist",
    company_name: "Kizazi Moto: Generation Fire (2023)",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "March 2022 - July 2023",
    points: [
      "Create detailed 3D models of characters, props, and environments based on project requirements.",
      "Develop high-quality textures and materials for 3D assets using painting software like Substance Painter",
    ],
  },
  {
    title: "Zbrush Tutorial",
    company_name: "Mushroom Dude",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jan 2023",
    points: [
      "Ensure models are optimized for animation and rendering, considering topology and polygon count.",
      "Create compelling character animations for storytelling and gameplay, adhering to project timelines and quality standards.",
    ],
  },
  {
    title: "Hard Surface Practice",
    company_name: "Blade",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Ensure models are optimized for animation and rendering, considering topology and polygon count.",
      "Apply textures to models to achieve desired visual aesthetics and realism.",
    ],
  },
  {
    title: "Sculping practice",
    company_name: "Corrupt Cop",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Ensure models are optimized for animation and rendering, considering topology and polygon count.",
      "Create compelling character animations for storytelling and gameplay, adhering to project timelines and quality standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a ..., but Marcus proved me wrong.",
    name: "fName lName",
    designation: "'Role'",
    company: "Kizazi Moto: Generation Fire(2023)",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a CG Generalist who truly cares about their clients' success like Marcus does.",
    name: "fName lName",
    designation: "'Role'",
    company: "'Project Name'",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Marcus ... our project, our ... We can't thank him enough!",
    name: "fName lName",
    designation: "'Role'",
    company: "'Project Name'",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Stone Pedestal",
    description:
      "The 3D model of a stone pedestal is intricately designed to emulate a classic and elegant structure. The material properties of the stone are carefully crafted to give it a matte finish, emphasizing the roughness and authenticity of real stone.",
    tags: [
      {
        name: "lowpoly",
        color: "blue-text-gradient",
      },
      {
        name: "maya",
        color: "green-text-gradient",
      },
      {
        name: "propdesign",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.behance.net/gallery/163042503/Stone-Pedestal",
  },
  {
    name: "Dude in a MK tee (Zbrush Practice)",
    description:
      "The 3D model of a male character in a MK T-shirt is intricately designed to emulate a classic and elegant design. The material properties of the stone are carefully crafted to give it a matte finish, emphasizing the roughness and authenticity of real stone.",
    tags: [
      {
        name: "highpoly",
        color: "blue-text-gradient",
      },
      {
        name: "3dcharacter",
        color: "green-text-gradient",
      },
      {
        name: "texturing",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.behance.net/gallery/161840343/Dude-in-a-MK-tee-(Zbrush-Practice)",
  },
  {
    name: "Mushroom-Dude",
    description:
      "The 3D model of a mushroom character is intricately designed to emulate a classic and elegant structure. The material properties of the stone are carefully crafted to give it a matte finish, emphasizing the roughness and authenticity of real stone.",
    tags: [
      {
        name: "highpoly",
        color: "blue-text-gradient",
      },
      {
        name: "3dcharacter",
        color: "green-text-gradient",
      },
      {
        name: "texturing",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.behance.net/gallery/161837253/Mushroom-Dude-(Pablo-Munoz-Zbrush-tut)",
  },
  {
    name: "Corrupt Cop",
    description:
      "The 3D model of a corrupt cop character is intricately designed to emulate a classic and elegant design. The material properties of the stone are carefully crafted to give it a matte finish, emphasizing the roughness and authenticity of real stone.",
    tags: [
      {
        name: "highpoly",
        color: "blue-text-gradient",
      },
      {
        name: "3dcharacter",
        color: "green-text-gradient",
      },
      {
        name: "texturing",
        color: "pink-text-gradient",
      },
    ],
    image: cop,
    source_code_link: "https://www.behance.net/gallery/161836109/Corrupt-Cop-(Sculping-practice)",
  },
];

export { services, technologies, experiences, testimonials, projects };
