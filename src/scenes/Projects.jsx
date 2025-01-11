import { motion } from "framer-motion";
import React from "react";
import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const projectList = [
  {
    title: "Issue Tracker",
    description:
      "The Issue Tracker is a robust and scalable full-stack application designed for managing and tracking issues efficiently.",
    link: "https://github.com/nguyetha79/issue-tracker",
  },
  {
    title: "Weather Forecast",
    description:
      "This project demonstrates how to use Recurrent Neural Networks (RNNs) with Long Short-Term Memory (LSTM) units for weather forecasting.",
    link: "https://github.com/nguyetha79/weather-forecast-RNN",
  },
  {
    title: "Twitter Hate Speech Detection",
    description:
      "This project is focused on detecting hate speech on Twitter using a combination of data preprocessing, exploratory data analysis, and machine learning techniques",
    link: "https://github.com/nguyetha79/Twitter-Hate-Speech-Detection",
  },
  {
    title: "Eco Mate",
    description:
      "Designed and prototyped a mobile sustainability app “EcoMate” to boost users to make eco-friendly choices.",
    link: "https://www.behance.net/gallery/196459731/EcoMate-An-app-for-living-sustainably",
  },
];

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noreferrer">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair ">{title}</p>
          <p className="mt-7">{description}</p>
        </div>
        <img
          src={require(`../assets/${projectTitle}.webp`)}
          alt={projectTitle}
          width={400}
          height={400}
        />
      </a>
    </motion.div>
  );
};

const Projects = ({ setSelectedPage }) => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-7">
          Here are some of the projects I've worked on, showcasing my skills in
          web development, UI/UX design and problem-solving.
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            container,
          }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] 
          max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title={projectList[0].title}
            description={projectList[0].description}
            link={projectList[0].link}
          />
          <Project
            title={projectList[1].title}
            description={projectList[1].description}
            link={projectList[1].link}
          />

          {/* ROW 2 */}
          <Project
            title={projectList[2].title}
            description={projectList[2].description}
            link={projectList[2].link}
          />
          <Project
            title={projectList[3].title}
            description={projectList[3].description}
            link={projectList[3].link}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] 
          max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
