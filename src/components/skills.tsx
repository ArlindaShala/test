
import AutoPlay from "./AutoPlay";

export default function Skills() {
  const waveBorders = document.querySelectorAll(".wave-border");
  let hue = 0;

  function updateColor(element: any) {
    if (element instanceof HTMLElement) {
      element.style.borderImage = `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${
        hue + 120
      }, 100%, 50%), hsl(${hue + 240}, 100%, 50%)) 1`;
      hue = (hue + 1) % 360;
    }
  }

  waveBorders.forEach((element) => {
    updateColor(element);
    element.addEventListener("mouseover", () => {
      if (element instanceof HTMLElement) {
        element.style.animation = "none";
      }
    });
    element.addEventListener("mouseout", () => {
      if (element instanceof HTMLElement) {
        element.style.animation = "waveAnimation 2s linear infinite";
      }
    });
  });

  return (
    <div className="bg-black  h-screen">
      <div className="min-h-screen flex flex-col justify-center gap-16 md:gap-32">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl  font-bold h-10   text-center ">
            <h3 className="text-3xl md:text-4xl lg:text-5xl pb-2 md:pb-4 tracking-tight text-center px-5 md:px-10 !leading-[2.5rem] md:!leading-[3rem] lg:!leading-[3.5rem]">
              Skills {"/"} Experience {"</>"}
            </h3>
            <div className="gradient-border"></div>
          </h3>
          <div className="flex mx-auto mt-[60px] text-center">
            <p className="text-[18px] font-mon">
              Resolving design problems, building smart user interfaces and
              useful interactions, <br /> developing rich web applications and
              seamless web experiences. <br />
            </p>
          </div>
        </div>

        <div className="container mt-[110px] mx-auto lg:max-w-[70%] lg:px-10">
          <AutoPlay />
          {/* <div className=" w-[523px] border-vertical text-[11px] flex mx-auto justify-center items-center">fretyui</div> */}
        </div>
      </div>
    </div>
  );
}
