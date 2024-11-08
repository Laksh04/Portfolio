import { AiFillEdit } from "react-icons/ai";
import { SiCplusplus } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";

export const data = {
  details: {
    firstName: "Laksh",
    lastName: "Shrivastava",
    role: "Data Science / Data analyist",
    about:
      "My expertise lies in Machine Learning & Predictive Modeling , NLP , Data Analysis & Visualization,Data Pipeline Development",
    email: "lshrivastava0909@gmail.com",
    gitHub: "https://github.com/Laksh04",
    instaGram: "https://www.instagram.com/lakxzh/",
    linkedIn: "https://www.linkedin.com/in/laksh-shrivastava-858837215/",
    twitter: "",
  },
  technologiesSection: {
    heading: "I've worked with a range of technologies related to Data Science ",
    tech: [
      {
        id: "1",
        icon: () => <AiFillEdit />,
        title: "Full Stack Data Sceince",
        des: "Experience with Machine learning , NLP ,SQL , POWER BI",
      },
      {
        id: "2",
        icon: () => <SiCplusplus />,
        title: "Languages",
        des: "Proficient in python , R , SQL",
      },
    ]
  },
  experienceSection: {
    experience: [
      {
        id: "1",
        icon: () => <MdOutlineWork />,
        title: "Full Time",
        des: "As a Data Scientist , I developed and implemented predictive models and data-driven solutions using Python, SQL, and machine learning algorithms. By optimizing data pipelines and performing advanced statistical analysis, I contributed to a project that increased operational efficiency.",
      },
      {
        id: "2",
        icon: () => <FaLaptopHouse />,
        title: "Internships",
        des: "I Led a team of data science interns to work on various NLP-based projects, focusing on resume classification. Collaborated with cross-functional teams to develop and implementmachine learning algorithms for automated resume classification,improving the efficiency of candidate screening."

      },
    ]
  },
  projectsSection: {
    projects: [
      {
        id: "1",
        title: "Resume classification Using NLP.",
        img: "./RC.png",
        des: "Developed an automated system to classify resumes into specific job roles using natural language processing (NLP) techniques. Preprocessed resume data by applying tokenization, lemmatization, and stopword removal to standardize text input.",
        tech: ["NLP", "ML", "STREAMLIT"],
        link: "https://github.com/Laksh04/RESUME_CLASSIFICATION.git",
      },
      {
        id: "2",
        title: "Food Delivery Time Prediction Using Machine Learning",
        img: "./FDTP.png",
        des: "Developed a machine learning model to predict estimated food delivery time, similar to algorithms used by Swiggy and Zomato to enhancecustomer experience by providing accurate delivery time estimates",
        tech:[  "NLP", "ML", "STREAMLIT"],
        link: "https://github.com/Laksh04/Food_Delivery_Time_Pred.git",
      },
      {
        id: "3",
        title: "Diabetes Prediction App",
        img: "./DP.png",
        des: "Developed a machine learning model to predict the likelihood of diabetes in patients using medical data (e.g., glucose levels, BMI, age, insulin levels).Performed data cleaning, feature selection, and engineering on the PIMA Indian Diabetes dataset.",
        tech: ["NLP", "ML", "STREAMLIT"],
        link: "https://github.com/Laksh04/Dibeties_app.git",
      },
      {
        id: "4",
        title: "Book Recomendation system",
        img: "./BRC.png",
        des: "",
        tech: ["NLP", "ML", "STREAMLIT"],
        link: "",
      },
    ]
  }
};

export const techMain =
  "I've worked with a range of technologies related to DATA science";


export const tech = [
  {
    id: "1",
    icon: () => <AiFillEdit />,
    title: "Full Stack Data Sceince",
    des: "Experience with Machine learning , NLP ,SQL , POWER BI",
  },
  {
    id: "2",
    icon: () => <SiCplusplus />,
    title: "Languages",
    des: "Proficient in python , R , SQL",
  },
];

export const project = [
  {
    id: "1",
    title: "Resume classification Using NLP.",
    img: "./RC.png",
    des: "Developed an automated system to classify resumes into specific job roles using natural language processing (NLP) techniques. Preprocessed resume data by applying tokenization, lemmatization, and stopword removal to standardize text input.",
    tech: ["NLP", "ML", "STREAMLIT"],
    link: "https://github.com/Laksh04/RESUME_CLASSIFICATION.git",
  },
  {
    id: "2",
    title: "Food Delivery Time Prediction Using Machine Learning",
    img: "./FDTP.png",
    des: "Developed a machine learning model to predict estimated food delivery time, similar to algorithms used by Swiggy and Zomato to enhancecustomer experience by providing accurate delivery time estimates",
    tech:[  "NLP", "ML", "STREAMLIT"],
    link: "https://github.com/Laksh04/Food_Delivery_Time_Pred.git",
  },
  {
    id: "3",
    title: "Diabetes Prediction App",
    img: "./DP.png",
    des: "Developed a machine learning model to predict the likelihood of diabetes in patients using medical data (e.g., glucose levels, BMI, age, insulin levels).Performed data cleaning, feature selection, and engineering on the PIMA Indian Diabetes dataset.",
    tech: ["NLP", "ML", "STREAMLIT"],
    link: "https://github.com/Laksh04/Dibeties_app.git",
  },
  {
    id: "4",
    title: "Book Recomendation system",
    img: "./BRC.png",
    des: "",
    tech: ["NLP", "ML", "STREAMLIT"],
    link: "#",
  },
];
