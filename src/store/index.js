import { ref } from 'vue';
import responsiveImg from '../assets/img/responsive.png'
import crmImg from '../assets/img/crm.png'
import spaImg from '../assets/img/spa.png'
import architectImg from '../assets/img/architect.png'
import botImg from '../assets/img/bot.png'
import seoImg from '../assets/img/seo.png'
import nestImg from '../assets/img/nest.jpg'
import crudImg from '../assets/img/crud.jpg'
import achiveImg from '../assets/img/achive.jpg'
import leaderImg from '../assets/img/leader.jpg'
import ntImg from '../assets/img/nt.jpg'

const services = ref([
  {
    id: 1,
    img: responsiveImg,
    title: "Responsive Design",
    subtitle: "Creating a responsive web template"
  },
  {
    id: 2,
    img: crmImg,
    title: "CRM Systems",
    subtitle: "CRM systems to grow your business"
  },
  {
    id: 3,
    img: spaImg,
    title: "SPA",
    subtitle: "Creating a Single Page Applications"
  },
  {
    id: 4,
    img: architectImg,
    title: "Backend Architecture",
    subtitle: "Building backend applications and their architecture"
  },
  {
    id: 5,
    img: botImg,
    title: "Telegram Bot",
    subtitle: "Creating all kinds of telegram bots"
  },
  {
    id: 6,
    img: seoImg,
    title: "Hosting",
    subtitle: "Domen, Hosting and SEO optimization"
  },
]);

const education = ref([
  {
    id: 1,
    location: "Najot Ta'lim",
    level: "Student",
    date: "June 2022 - Sep 2022",
    course: "Foundations of Programming",
    text: "From June to September 2022, I immersed myself in learning basic programming, algorithms, and languages such as C and Python at Najot Ta'lim. This intensive period equipped me with foundational programming skills, deepened my understanding of algorithmic principles, and enhanced my proficiency in practical coding."
  },
  {
    id: 2,
    location: "Najot Ta'lim",
    level: "Student",
    date: "Nov 2022 - Aug 2023",
    course: "Node.js bootcamp course",
    text: "Starting from November 2022, I delved deep into Node.js, gaining experience in database management, server deployment, and working with various Node.js frameworks. This experience expanded my skills in backend development, enabling me to efficiently work with databases, manage servers, and utilize different frameworks to create robust web applications."
  },
  {
    id: 3,
    location: "Najot Ta'lim",
    level: "Student",
    date: "Oct 2023 - Feb 2024",
    course: "Vue.js bootcamp course",
    text: "From October 2023 to February 2024, I delved deep into Vue.js at Najot Ta'lim educational center, focusing on frontend development, API integration, exploring Vite, and leading a team as a team leader. I collaborated in teams to create various small websites for hands-on experience. This period significantly enhanced my skills in frontend web development, API integration, project management, and leadership."
  },
]);

const abilities = ref([
    {
      "name": "ExpressJS",
      "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
      "name": "NodeJS",
      "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
      "name": "HTML5",
      "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
      "name": "CSS3",
      "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
      "name": "Python",
      "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
      "name": "JavaScript",
      "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
      "name": "TypeScript",
      "icon": "https://img.icons8.com/fluency/48/000000/typescript.png"
    },
    {
      "name": "VueJS",
      "icon": "https://img.icons8.com/fluency/48/000000/vuejs.png"
    },
    {
      "name": "NestJS",
      "icon": "https://img.icons8.com/color/48/nestjs.png"
    },
    {
      "name": "NuxtJS",
      "icon": "https://img.icons8.com/color/48/nuxt-jc.png"
    },
    {
      "name": "MongoDB",
      "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
      "name": "MySQL",
      "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
      "name": "PostgreSQL",
      "icon": "https://img.icons8.com/color/48/000000/postgreesql.png"
    },
    {
      "name": "GitHub",
      "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
    {
      "name": "Git VCS",
      "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
]);

const projects = ref([
  {
    id: 1,
    img: "https://savlatxon-eshonov.netlify.app",
    name: "Uzum Clone",
    link: "https://mandarin-shop.netlify.app"
  },
  {
    id: 2,
    img: nestImg,
    name: "Nest Shop",
    link: "https://github.com/arziqulovsamandar/product"
  },
  {
    id: 3,
    img: crudImg,
    name: "CRM project",
    link: "https://github.com/Educate-CRM/edu-frontend"
  },
]);

const achievements = ref([
  {
    id: 1,
    title: "Full Stack Developer",
    subtitle: "I graduated from the \"Najot Ta'lim\" training center and received a \"Fullstack Developer\" specialist certificate",
    img: achiveImg
  },
  {
    id: 2,
    title: "Team Leader",
    subtitle: "My team has entrusted me with leadership on many projects",
    img: leaderImg
  },
  {
    id: 3,
    title: "Best IT center in Uzbekistan",
    subtitle: "In January 2024, Najot Ta'lim received the award \"The best IT training Center in Uzbekistan\"",
    img: ntImg
  },
]);



export {
  services,
  education,
  abilities,
  projects,
  achievements
}