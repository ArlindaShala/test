import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import additionalImage from "/images/Photo.png"; // Update the path as needed
import taskImage from "/images/Task.png";         // Update the path as needed
import xmlImage from "/images/Xml2.png";          // Update the path as needed

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assume mobile if less than 768px
  const [showComingSoon, setShowComingSoon] = useState(true); // State for showing "Coming Soon..."

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index:any) => {
    // If the first card is clicked
    if (index === 0) {
      // If the first card is currently expanded, hide "Coming Soon..."
      if (expandedIndex === index) {
        setShowComingSoon(true);
      } else {
        setShowComingSoon(false); // Show "Coming Soon..." when the card is expanded
      }
    }

    // Toggle the expanded index
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const cardVariants = {
    expanded: {
      width: isMobile ? "90vw" : "40vw", // 90% of viewport width for expanded
      height: "350px", // Set a fixed height for expanded state
      scale: 1,
    },
    collapsed: {
      width: "400px", // Fixed width for collapsed state
      height: isMobile ? "150px" : "350px", // Change height based on mobile or desktop
      scale: 0.9,
    },
  };

  const cardImages = [
    additionalImage, // Additional Project Image
    xmlImage,
    taskImage,
  ];

  const cardDescription = [
    "The Project Management Tool is designed to help teams collaborate efficiently and manage their projects from start to finish...",
    "The Budget Tracker Application provides a user-friendly interface designed to help users effectively manage their personal or family finances...",
    "The Budget Tracker Application helps users track their income and expenses...",
  ];

  const cardTitle = [
    "Project Management Tool",
    "Budget Tracker Application",
    "Budget Tracker Application",
  ];

  return (
    <div className="h-full pb-[100px] bg-black">
       <div className="border-vertical flex lg:flex-row md:flex-row sm:flex-col mx-auto justify-center items-center">
         <h1 className="text-3xl font-extrabold px-[112px]">
            Featured Projects
          </h1>
           <p className="mt-4  text-l pr-[125px] justify-center items-center">
            check out our latest works
          </p>
      </div>

      {/* Responsive Card Container */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {cardTitle.map((title, index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer transition-all duration-500 rounded-[20px] ${
              index === expandedIndex
                ? "bg-gradient-to-r from-purple-800 to-indigo-800"
                : "h-[150px] opacity-50 bg-gray-800"
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-full rounded-[20px] relative flex flex-col">
              {/* Content for collapsed state */}
              {index !== expandedIndex && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-40 rounded-[20px]">
                  <h2 className="text-2xl font-extrabold text-white text-shadow-lg">
                    {title}
                  </h2>
                </div>
              )}

              {/* Content for expanded state */}
              {index === expandedIndex && (
                <div className="flex flex-col justify-end h-full">
                  <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-55 min-h-[100px] flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <p className="mt-2 text-gray-300 text-center">{cardDescription[index]}</p>
                  </div>
                </div>
              )}

              {/* Coming Soon text for the first card */}
              {index === 0 && showComingSoon && (
                <div className="absolute bottom-4 right-4 text-white text-lg font-bold">
                  Coming Soon...
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
