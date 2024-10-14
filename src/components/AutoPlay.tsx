// import React, { Component } from "react";
// import Slider from "react-slick";
// import Card from "react-bootstrap/Card";
// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       // dots: true,
//       infinite: true,
//       slidesToShow: 2,
//       // slidesToScroll: 3,
//       autoplay: true,
//       speed: 2000,
//       // autoplaySpeed: 2000,
//       cssEase: "linear",
//     };

//     const posts = [1, 2, 3, 4, 5, 6];

//     const style = {
//       width: "18rem",
//     }
//     return (
//       <div>
//         <Slider {...settings} className="container mx-auto lg:max-w-[70%] lg:px-10">
//               {posts.map(() => [
//       <Card style={style}>
//               <Card.Img variant="top" src="download.svg" />
//             </Card>
//         ])}
//           </Slider>
//       </div>
//     );
//   }
// }
import React from "react";

export default function AutoPlay() {
  return (
    <div>
      <div className="wrapper  mt-[-450px] ">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="React Js.png" />
              <div className="slide-label ml-[-130px] text-[25px]">React Js</div>
            </div>
            <div className="slide">
              <img src="Vue Js.png" /> 
              <div className="slide-label ml-[-130px] text-[25px]">Vue Js</div>
            </div>
            <div className="slide">
              <img src="java.png" /> 
              <div className="slide-label ml-[-130px] text-[25px]">Java</div>
            </div>
            <div className="slide">
              <img src="Node Js.png" />
              <div className="slide-label ml-[-130px]  text-[25px]">Node Js</div>
            </div>
            <div className="slide">
              <img src="Wordpress.png" /> 
              <div className="slide-label ml-[-130px]  text-[25px]">Wordpress</div>
            </div>
            <div className="slide">
              <img src="php.png" />
              <div className="slide-label ml-[-130px]  text-[25px]">php</div>
            </div>
            <div className="slide">
              <img src="css3.png" />  
              <div className="slide-label ml-[-130px]  text-[25px]">Css3</div>
            </div>
            <div className="slide">
              <img src="html5.png" /> 
              <div className="slide-label ml-[-130px]  text-[25px]">html5</div>
            </div>
            <div className="slide">
              <img src="Bootstrap.png" />
              <div className="slide-label ml-[-130px]  text-[25px]">Bootstrap</div>
            </div>

            <div className="slide">
              <img src="git.png" /> 
              <div className="slide-label ml-[-130px]  text-[25px]">git</div>
            </div>
            {/* <div className="slide">
              <img src="Visual Studio.png" /> 
              <div className="slide-label ml-[-130px]  text-[25px]">Visual Studio</div>
            </div> */}
            {/* <div className="slide">
              <img src="Figma.png" /> 
              <div className="slide-label ml-[-130px]  text-[25px]">Figma</div>
            </div> */}
            <div className="slide">
              <img src="Java Script.png" />
              <div className="slide-label ml-[-130px]  text-[25px]">Java Script</div>
            </div>
            <div className="slide">
              <img src="MySql.png" /> 
              <div className="slide-label ml-[-130px]  text-[25px]">MySQL</div>
            </div>

            <div className="slide">
              <img src="React Js.png" />
               <div className="slide-label ml-[-130px]  text-[25px]">React Js</div>
            </div>
            <div className="slide">
              <img src="java.png" /> 
              <div className="slide-label ml-[-130px]  text-[25px]">Java</div>
            </div>
            <div className="slide">
              <img src="Vue Js.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Vue Js</div>
            </div>
            <div className="slide">
              <img src="Node Js.png" /><div className="slide-label ml-[-130px]  text-[25px]">Node Js</div>
            </div>
            <div className="slide">
              <img src="Wordpress.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Wordpress</div>
            </div>
            <div className="slide">
              <img src="php.png" /><div className="slide-label ml-[-130px]  text-[25px]">php</div>
            </div>
            <div className="slide">
              <img src="css3.png" />  <div className="slide-label ml-[-130px]  text-[25px]">Css3</div>
            </div>
            <div className="slide">
              <img src="html5.png" /> <div className="slide-label ml-[-130px]  text-[25px]">html5</div>
            </div>
            <div className="slide">
              <img src="Bootstrap.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Bootstrap</div>
            </div>
            <div className="slide">
              <img src="git.png" /> <div className="slide-label ml-[-130px]  text-[25px]">git</div>
            </div>
            {/* <div className="slide">
              <img src="Visual Studio.png" />  <div className="slide-label ml-[-130px]  text-[25px]">Visual Studio</div>
            </div> */}
            {/* <div className="slide">
              <img src="Figma.png" />  <div className="slide-label ml-[-130px]  text-[25px]">Figma</div>
            </div> */}
            <div className="slide">
              <img src="Java Script.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Java Script</div>
            </div>
            <div className="slide">
              <img src="MySql.png" /> <div className="slide-label ml-[-130px]  text-[25px]">MySQL</div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="wrapper mt-[-540px]">
        <div className="slider">
          <div className="slide-track2">
            <div className="slide">
            <img src="Vue Js.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Vue Js</div>
            </div>
            <div className="slide">
            <img src="React Js.png" />
             <div className="slide-label ml-[-130px]  text-[25px]">React Js</div>
            </div>
            <div className="slide">
              <img src="java.png" /> 
              <div className="slide-label ml-[-130px]  text-[25px]">Java</div>
            </div>
            <div className="slide">
            <img src="Java Script.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Java Script</div>
            </div>
            <div className="slide">
            <img src="MySql.png" /> <div className="slide-label ml-[-130px]  text-[25px]">MySQL</div>
            </div>
            <div className="slide">
            <img src="Wordpress.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Wordpress</div>
            </div>
            <div className="slide">
            <img src="Vue Js.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Vue Js</div>
            </div>
            {/* <div className="slide">
            <img src="Visual Studio.png" />  <div className="slide-label ml-[-130px]  text-[25px]">Visual Studio</div>
            </div> */}
            <div className="slide">
            <img src="Bootstrap.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Bootstrap</div>
            </div>

            <div className="slide">
            <img src="Vue Js.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Vue Js</div>
            </div>
            <div className="slide">
            <img src="React Js.png" />
             <div className="slide-label ml-[-130px]  text-[25px]">React Js</div>
            </div>
            <div className="slide">
              <img src="java.png" /> 
              <div className="slide-label ml-[-130px]  text-[25px]">Java</div>
            </div>
            <div className="slide">
            <img src="Java Script.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Java Script</div>
            </div>
            <div className="slide">
            <img src="MySql.png" /> <div className="slide-label ml-[-130px]  text-[25px]">MySQL</div>
            </div>
            <div className="slide">
            <img src="Wordpress.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Wordpress</div>
            </div>
            <div className="slide">
            <img src="Vue Js.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Vue Js</div>
            </div>
            {/* <div className="slide">
            <img src="Visual Studio.png" />  <div className="slide-label ml-[-130px]  text-[25px]">Visual Studio</div>
            </div> */}
            <div className="slide">
            <img src="Bootstrap.png" /> <div className="slide-label ml-[-130px]  text-[25px]">Bootstrap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
