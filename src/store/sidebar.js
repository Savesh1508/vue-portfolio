import { ref } from 'vue';

const contacts = ref([
  {
    id: 1,
    icon: "bx bxs-envelope",
    link: "https://mail.google.com/mail/u/1/?view=cm&fs=1&to=savlatxon20042005@gmail.com&tf=1"
  },
  {
    id: 2,
    icon: "bx bxl-instagram-alt",
    link: "https://www.instagram.com/savesh1508/"
  },
  {
    id: 3,
    icon: "bx bxl-telegram",
    link: "https://t.me/Savesh2004"
  },
  {
    id: 4,
    icon: "bx bxl-linkedin",
    link: "https://www.linkedin.com/in/savlatxon-eshonov-b4452a292/"
  },
  {
    id: 5,
    icon: "bx bxl-github",
    link: "https://github.com/Savesh1508"
  },
]);

const infos = ref([
  {
    id: 1,
    infoType: "Age",
    info: "19",
    isGreen: false
  },
  {
    id: 2,
    infoType: "Freelance",
    info: "Available",
    isGreen: true
  },
  {
    id: 1,
    infoType: "Phone",
    info: "(97) 930 99 56",
    isGreen: false
  },
  {
    id: 1,
    infoType: "Address",
    info: "Tashkent, Uzb",
    isGreen: false
  },
]);

const skills = ref([
  {
    id: 1,
    skillType: "HTML/CSS",
    percentage: "w-[90%]"
  },
  {
    id: 2,
    skillType: "JS/TS",
    percentage: "w-[80%]"
  },
  {
    id: 3,
    skillType: "Vue 3",
    percentage: "w-[75%]"
  },
  {
    id: 4,
    skillType: "Nuxt 3 (Studying)",
    percentage: "w-[15%]"
  },
  {
    id: 5,
    skillType: "Node/Nest",
    percentage: "w-[85%]"
  },
  {
    id: 6,
    skillType: "Databases",
    percentage: "w-[75%]"
  },
]);

const exSkills = ref([
  {
    id: 1,
    skill: "Bootstrap, Tailwind",
  },
  {
    id: 2,
    skill: "Vuex, Pinia",
  },
  {
    id: 3,
    skill: "Express, Http, ORM",
  },
  {
    id: 4,
    skill: "Mongo, Postgre, Redis",
  },
  {
    id: 5,
    skill: "Git, Github, Docker",
  },
  {
    id: 6,
    skill: "Figma, Photoshop",
  },
]);

const languages = ref([
  {
    id: 1,
    language: "Uzbek",
    level: "Native Language"
  },
  {
    id: 2,
    language: "Tajik",
    level: "Native Language"
  },
  {
    id: 3,
    language: "Russian",
    level: "Advanced"
  },
  {
    id: 4,
    language: "English",
    level: "Intermediate - B1"
  },
]);

export {
  languages,
  contacts,
  infos,
  skills,
  exSkills,
}