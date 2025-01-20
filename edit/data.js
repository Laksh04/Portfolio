import { AiFillEdit } from "react-icons/ai";
import { SiPython } from "react-icons/si";
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
        icon: () => <SiPython />,
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
        title: "WebTalker - Using LLama 3.3.",
        img: "./RC.png",
        des: "Developed an AI chatbot to interact with website content using Llama 3.3-70b Versatile for natural language understanding.Implemented a retrieval-augmented generation (RAG) framework utilizing HuggingFace embeddings and Chroma vector storesfor high-fidelity semantic retrieval.Designed an intuitive Streamlit interface, facilitating seamless, real-time engagement with web-based content..",
        tech: ["LLAMA 3", "RAG", "STREAMLIT"],
        link: "https://webtalker--using-llama-3-zet6lw3iadkacuvv6np9jq.streamlit.app/",
      },
      {
        id: "2",
        title: "Resume classification Using NLP.",
        img: "./RC.png",
        des: "Developed an automated system to classify resumes into specific job roles using natural language processing (NLP) techniques. Preprocessed resume data by applying tokenization, lemmatization, and stopword removal to standardize text input.",
        tech: ["NLP", "ML", "STREAMLIT"],
        link: "https://github.com/Laksh04/RESUME_CLASSIFICATION.git",
      },
      {
        id: "3",
        title: "Food Delivery Time Prediction Using Machine Learning",
        img: "./FDTP.png",
        des: "Developed a machine learning model to predict estimated food delivery time, similar to algorithms used by Swiggy and Zomato to enhancecustomer experience by providing accurate delivery time estimates",
        tech:[  "NLP", "ML", "STREAMLIT"],
        link: "https://github.com/Laksh04/Food_Delivery_Time_Pred.git",
      },
      {
        id: "4",
        title: "Diabetes Prediction App",
        img: "./DP.png",
        des: "Developed a machine learning model to predict the likelihood of diabetes in patients using medical data (e.g., glucose levels, BMI, age, insulin levels).Performed data cleaning, feature selection, and engineering on the PIMA Indian Diabetes dataset.",
        tech: ["NLP", "ML", "STREAMLIT"],
        link: "https://github.com/Laksh04/Dibeties_app.git",
      },
      {
        id: "5",
        title: "Book Recomendation system",
        img: "./BRC.png",
        des: "A Book Recommendation System is a machine learning-based project aimed at predicting and suggesting books to users based on their preferences, behaviors, or interactions. This project demonstrates expertise in data preprocessing, exploratory data analysis, and implementing various recommendation algorithms.",
        tech: ["NLP", "ML", "STREAMLIT"],
        link: "https://github.com/Laksh04/-Book-Recommendation-System.git",
      },
       {
        id: "6",
        title: " EV-Market-Analysis",
        img: "./ev adoption over time.png",
        des: "Electric Vehicles Market Size Analysis Market size analysis is a crucial aspect of market research that determines the potential sales volume within agiven market. It helps businesses understand the magnitude of demand, assess market saturation levels, and identify growth opportunities.",
        tech: ["DATA ANALYSIS","SEABORN "],
        link: "https://github.com/Laksh04/EV-Market-Analysis.git",
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
        title: "WebTalker - Using LLama 3.3.",
        img: "./RC.png",
        des: "Developed an AI chatbot to interact with website content using Llama 3.3-70b Versatile for natural language understanding.Implemented a retrieval-augmented generation (RAG) framework utilizing HuggingFace embeddings and Chroma vector storesfor high-fidelity semantic retrieval.Designed an intuitive Streamlit interface, facilitating seamless, real-time engagement with web-based content..",
        tech: ["LLAMA 3", "RAG", "STREAMLIT"],
        link: "https://webtalker--using-llama-3-zet6lw3iadkacuvv6np9jq.streamlit.app/",
   },
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
    des: "A Book Recommendation System is a machine learning-based project aimed at predicting and suggesting books to users based on their preferences, behaviors, or interactions. This project demonstrates expertise in data preprocessing, exploratory data analysis, and implementing various recommendation algorithms.",
    tech: ["NLP", "ML", "STREAMLIT"],
    link: "https://github.com/Laksh04/-Book-Recommendation-System.git",
  },
  {
        id: "5",
        title: " EV-Market-Analysis",
        img: "./ev adoption over time.png",
        des: "Electric Vehicles Market Size Analysis Market size analysis is a crucial aspect of market research that determines the potential sales volume within agiven market. It helps businesses understand the magnitude of demand, assess market saturation levels, and identify growth opportunities.",
        tech: ["DATA ANALYSIS","SEABORN "],
        link: "https://github.com/Laksh04/EV-Market-Analysis.git",
      },
];
