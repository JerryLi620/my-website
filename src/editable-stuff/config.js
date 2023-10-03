// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mingyang",
  middleName: "",
  lastName: "Li",
  message: "Math&CS Student at Davidson College",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/JerryLi620",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/jerryli620/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jerrylimingyang/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mingyangli.jpg"),
  imageSize: 375,
  message:
    "Hi, I am Mingyang Li. My preferred name is Jerry. I am a junior student at Davidson college double major in Computer Science and Math. In my free time, I like developing personal projects and compete in hackathon. My other hobby includes playing basketball, find good food and playing videogames:)",
  resume:
    "https://docs.google.com/document/d/1wuIvzthiYfwn4BElb4yNM4Dk1Tr71WrN/edit#heading=h.gjdgxs",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "JerryLi620",
  reposLength: 0,
  specificRepos: [
    "Wildcat-RMP",
    "Lyft-Forage-Project",
    "TrashTalks",
    "Bee-the-Change",
    "Moolah-Money",
  ],
};

// Research SECTION
const leadership = {
  show: true,
  heading: "Research",
  message:
    "Here are the posters about my researches during my undergraduate years. My potential research interests lie in using deep learning to solve scientific problems, especially in applying generative model on pointcloud related tasks. Supervised by Professor Raghu Ramanujan and Professor Michelle Kuchera, I am currently working on building diffusion model to accomplish unpair translation tasks and applying feature and style encoding in diffusion model based autoencoders.",
  images: [
    {
      img: require("../editable-stuff/unpair.jpg"),
      label:
        "Unpaired Pointcloud Translation using Diffusion Probablistic Model",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/pointcloud.jpg"),
      label:
        "Point Cloud Based Machine Learning for Analysis of Nuclear Reactions",
      paragraph: "",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Java", value: 90 },
    { name: "git", value: 85 },
    { name: "SQL", value: 80 },
    { name: "R", value: 65 },
    { name: "React.js", value: 65 },
    { name: "Tensorflow&Pytorch", value: 65 },
    { name: "C#", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 80 },
    { name: "Positivity", value: 75 },
    { name: "Efficiency", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 70 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering internships or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "lmyjerry@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Machine Learning Researcher", // Here Add Company Name
      companylogo: require("../assets/img/alpha.png"),
      date: "May 2022 - Now",
    },
    {
      role: "Engineer intern",
      companylogo: require("../assets/img/tecoford.png"),
      date: "Aug 2022 – May 2023",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
