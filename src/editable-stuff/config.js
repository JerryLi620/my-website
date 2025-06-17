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
  message: "Master of Data Science Student at Stanford University ICME",
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
    "Hi I am a first-year Master of Data Science student at Stanford University ICME. I graduated from Davidson College in 2025 major in math and computer science. I am passionate about applying machine learning to solve real-world problems, especially in the field of computer vision and natural language processing. I have a strong background in software engineering and data science, with experience in developing web applications and machine learning models. I am currently looking for internship opportunities in software engineering or machine learning.",
  resume:
    "https://docs.google.com/document/d/1yaeIoVidLY5qvaxGgGmwxwWt-L-ctnXn/edit#heading=h.30j0zll",
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
    "Wildcart",
    "CampfireBG",
    "Wildcat-RMP",
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
    'My research interests include deep learning, computer vision, and physics. I have worked on several projects that apply deep learning to nuclear physics. I published a first-author paper at the <a href="https://arxiv.org/pdf/2501.18674" target="_blank" rel="noopener noreferrer">NeurIPS 2024 ML & Physical Science Workshop</a>. Here are some of my recent research projects:',
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
    height: "480",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
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
      date: "May 2022 - Aug 2022, May 2023 - Dec 2024 ",
    },
    {
      role: "Data Science Intern", // Here Add Company Name
      companylogo: require("../assets/img/sezzle.png"),
      date: "May 2024 – Dec 2024",
    },
    {
      role: "Software Engineer Intern", // Here Add Company Name
      companylogo: require("../assets/img/aitou.png"),
      date: "Jan 2024 – April 2024",
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
