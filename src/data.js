import emoji from "react-easy-emoji";
import homespaceGif from "./assets/homespace.mp4";
import nasaGif from "./assets/nasa-apod.mp4";
import yelpCampGif from "./assets/yelpCamp.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faCss3Alt, faSass, faHtml5, faNode, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faTable } from '@fortawesome/free-solid-svg-icons';



// About Section
const about = {
  title: "Hello, I'm Kae.",
  subtitle: "(pronounced Kai, rhymes with Hi!)",
  name: "Kae Benton",
  subTitle: emoji("👋🏽 Welcome to my portfolio site!"),
  description: 
    "I am a web designer & developer aspiring to make meaningful impacts in the world through tech.",
  desc2:
    "I have recently finished the Lambda School Web Development program where I have had several opportunites to collaborate on projects, learn new technologies, and create diverse applications.",
  desc3:
    "I'm looking forward to building my career as a Web Developer!",
};

// Social Media Section
const socialMedia = {
  github: "https://github.com/sokaeb",
  linkedin: "https://www.linkedin.com/in/kae-benton/",
  gmail: "sonja.k.benton@gmail.com",
  medium: "https://medium.com/@sokaeb"
};

// Skills Section
const techStack = {
  title: "Tech Skills",
  front: "Frontend",
  back: "Backend",
  skills: [
    {
      techName: "JavaScript",
      fontAwesomeName: "fab fa-js",
      techIcon:  <FontAwesomeIcon icon={faJs} />
    },
    {
      techName: "React",
      fontAwesomeName: "fab fa-react",
      techIcon: <FontAwesomeIcon icon={faReact} />
    },
    {
      techName: "CSS",
      fontAwesomeName: "fab fa-css3-alt",
      techIcon: <FontAwesomeIcon icon={faCss3Alt} />
    },
    {
      techName: "Sass",
      fontAwesomeName: "fab fa-sass",
      techIcon: <FontAwesomeIcon icon={faSass} />
    },
    {
      techName: "html",
      fontAwesomeName: "fab fa-html5",
      techIcon: <FontAwesomeIcon icon={faHtml5} />
    },
    {
      techName: "Node.js",
      fontAwesomeName: "fab fa-node",
      techIcon: <FontAwesomeIcon icon={faNode} />,
      backend: "backend"
    },
    {
      techName: "SQLite, Postgres",
      fontAwesomeName: "fab fa-table",
      techIcon: <FontAwesomeIcon icon={faTable} />,
      backend: "backend"
    },
    {
      techName: "MongoDB",
      fontAwesomeName: "fab fa-database",
      techIcon: <FontAwesomeIcon icon={faDatabase} />,
      backend: "backend"
    },
    {
      techName: "Python",
      fontAwesomeName: "fab fa-python",
      techIcon: <FontAwesomeIcon icon={faPython} />,
      backend: "backend"
    }
  ]
}

// Projects Section
const featuredProjects = { 
title: "Featured Projects",
projects: [
  {
    name: "Homespace Shop",
    video: homespaceGif,
    liveSite: "https://homespace.netlify.app/",
    code: "https://github.com/sokaeb/home-goods-shop",
    about:
      "This is a home goods eEcommerce site displaying products to shoppers. Currently unfinished. Future features will have routing to product pages as well as the ability for users to add and remove items from their cart and checkout.",
    stack: ["Gatsby", "React", "styled-components"],
  },
  {
    name: "NASA Photo of the Day",
    video: nasaGif,
    liveSite: "https://nasadaily.netlify.app/",
    code: "https://github.com/sokaeb/nasa-apod",
    about:
      "Using an axios call to fetch the daily images from the NASA APOD API.",
    stack: ["React", "Redux", "CSS"],
  },
  {
    name: "YelpCamp",
    video: yelpCampGif,
    liveSite: "https://hidden-peak-81499.herokuapp.com/campgrounds",
    code: "https://github.com/sokaeb/yelp-camp",
    about:
      "Created an interactive user interface using EJS and a Mongo database to persist campsite data entered by registerd users. Inspired by Yelp.",
    stack: ["EJS", "Bootstrap", "NodeJS", "MongoDB", "Express", "CSS"],
  },
  // {
  //   name: "Pizza Builder",
  //   video: pizzaGif,
  //   liveSite: "https://pizza-maker-app.netlify.app/",
  //   code: "https://github.com/sokaeb/pizza-builder",
  //   about:
  //     "This is a simple application with a basic form for building a pizza. It allows a user to make several selections and add multiple pizzas to the cart. The user can remove items from the cart and see the total cost.",
  //   stack: ["React", "Context API", "CSS"],
  // },
  // {
  //   name: "Studio Ghibli Films",
  //   video: ghibliGif,
  //   liveSite: "https://studioghibli-films.netlify.app/",
  //   code: "https://github.com/sokaeb/ghibli-films",
  //   about:
  //     "Using an axios call to fetch all film titles from the Studio Ghibli API.",
  //   stack: ["React", "Redux", "styled-components"],
  // },
]
}

export { about, socialMedia, techStack, featuredProjects };
