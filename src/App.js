import React from "react";
import reviews  from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col justify-evenly w-screen min-h-screen h-auto items-center bg-[#F0F0F0]">

      <div className="w-[300px]">
        <h1 className="text-4xl text-center font-bold text-violet-900">
          Our Testimonials
        </h1>
        <div className="w-1/2 bg-violet-600 h-[6px] mx-auto mt-1 rounded-md"></div>
      </div>

      <Testimonial reviews={reviews}/>

    </div>
    
  );
};

export default App;
