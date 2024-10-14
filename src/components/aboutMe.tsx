import FullPageScroll from "./fullPageScroll";

export default function aboutMe() {
  return (
    <div>
      <div className=" mx-auto w-full flex items-center justify-between ">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center justify-center w-full">
              <img
                src="/images/Portrait.png"
                className="relative w-full z-10 max-w-[400px] md:max-w-[500px] lg:max-w-[400px] lg:h-[650px] sm:h-[750px] md:h-[750px] pt-10 object-cover rounded-lg mb-4 sm:mb-0"
                alt="Portrait of Arlinda Shala"
              />

              <p className="absolute text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw] text-white font-bold opacity-60 z-0 top-[50%] sm:top-[45%] md:top-[40%] lg:top-[40%] left-[50%] sm:left-[42%] transform -translate-x-1/2 translate-y-[70%] sm:translate-y-0 whitespace-nowrap">
                <span className="mr-4 sm:mr-8 md:mr-12 lg:mr-52">ARLINDA</span>
                <span>SHALA</span>
              </p>

              <p className="absolute bottom-[20px] sm:bottom-[20px] md:bottom-[150px] lg:bottom-[120px] w-[90%] sm:w-[550px] text-center text-[12px] sm:text-[15px] md:text-[16px] font-mon p-4 rounded-lg">
                A software engineer specializing in building highly performant
                applications that solve real-world problems and am
                professionally connected with the web development industry. I’m
                a problem solver, a well-organized person, a loyal employee with
                high attention to detail.
                <br />
                Fan of Ping Pong, Outdoor Activities, Photography, and Coding of
                course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
