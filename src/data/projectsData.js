const projectsData = () => {
  return projects;
};

const projects = [
  {
    title: "Model Hobby",
    type: "Personal",
    description:
      "An eCommerce web app for a model toy shop with a Nodejs backend and React frontend.",
    githubURL: "https://github.com/Gurkirat-s/Model-Hobby-Web-App",
    imgURL: "model-hobby-screenshot.png",
  },
  {
    title: "Yapper",
    type: "Personal",
    description:
      "A social media web app developed with Next.js and React frontend with Firebase authentication and Cloud Firestore",
    demoURL: "https://yapper.vercel.app/",
    githubURL: "https://github.com/Gurkirat-s/Yapper",
    imgURL: "yapper-screenshot.png",
  },
  {
    title: "Tiffin Station",
    type: "Client",
    description: "Static website for a tiffin delivery service.",
    demoURL: "",
    githubURL: "",
    imgURL: "tiffin-station-screenshot.png",
  },
];

export default projectsData;
