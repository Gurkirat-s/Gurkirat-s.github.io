const projectsData = () => {
  return projects;
};

const projects = [
  {
    title: 'Model Hobby',
    type: 'Personal Project',
    description:
      'An eCommerce web app for a model toy shop with a Nodejs backend and React frontend. Features a session-based backend cart, managed forms with validation and product filtering.',
    githubURL: 'https://github.com/Gurkirat-s/Model-Hobby-Web-App',
    imgURL: 'macbook-model-hobby.png',
    tools: [
      'HTML5',
      'CSS3',
      'React',
      'Node.js',
      'Expressjs',
      'SQLite3',
      'RESTful API',
    ],
  },
  {
    title: 'Yapper',
    type: 'Personal Project',
    description:
      "A social media web app developed with Next.js and React frontend with Firebase authentication and Cloud Firestore. Users have the ability to create an account with a username, then write posts and heart other users' posts",
    demoURL: 'https://yapper.vercel.app/',
    githubURL: 'https://github.com/Gurkirat-s/Yapper',
    imgURL: 'tablet-yapper.png',
    tools: [
      'HTML5',
      'CSS3/SCSS',
      'React',
      'Next.js',
      'Firebase',
      'Cloud Firestore',
    ],
  },
  {
    title: 'Tiffin Station',
    type: 'Client Project',
    description:
      "Designed, developed, and deployed a static website for a client's tiffin delivery service.",
    demoURL: 'http://www.tiffinstation.ca',
    githubURL: '',
    imgURL: 'pc-tiffin.png',
    tools: ['HTML5', 'CSS3'],
  },
];

export default projectsData;
