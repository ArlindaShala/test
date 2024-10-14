import React from "react";
import AboutMe from "./aboutMe";
import FullPageScroll from "./fullPageScroll";

export default function SoftwareEngineer() {
  return (
    <div className="">
      <div className="sticky top-0 h-screen bg-[url('https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')] bg-opacity-75">
        <div className="flex items-center font-mono p-4 justify-end w-full">
          <a href="mailto:shalaarlinda@outlook.com">
            <h2 className="border-t border-r p-2 cursor-pointer text-white border-white w-fit text-2xl font-mono text-center">
              Contact
            </h2>
          </a>
        </div>
        <div className="container mx-auto w-full flex items-center justify-center ">
          <div className="flex mx-auto mt-[150px] flex-col items-start justify-center text-center">
            <p className="text-[15px] font-mono items-center">
              Hi, I'm a <br />
            </p>
            <p className="text-[45px] ">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
      <div className="sticky h-screen justify-center bg-black items-center flex">
        <AboutMe />
      </div>
      {/* <div className="mx-auto h-[1px] bg-[#2C2C2E] mobile:container mobile:mt-[50px] tablet:container tablet:mt-[70px] desktop:container desktop:mt-[50px] desktoplg:container  desktoplg:mt-[50px]"></div>
      <FullPageScroll /> */}
    </div>
  );
}
