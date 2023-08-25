import React from "react";
import Image from "next/image";
import profile from "../../public/images/pr1.jpg";
import { Fade, Slide } from "react-awesome-reveal";
const Crousal = () => {
  return (
    <div className=" pt-4 grid grid-cols-1 md:grid-cols-2 bg-black text-white">
      <div className="flex justify-center items-center flex-col gap-y-2 md:gap-y-4">
        <Slide triggerOnce delay={400}>
        <h1 className="text-2xl md:text-6xl text-yellow-400 mt-4">i am Muzammil Ali </h1>
        </Slide>
        <Slide triggerOnce delay={800}>
        <h1 className=" text-xl md:text-4xl">CNC Operator</h1>
        </Slide>
        <Slide triggerOnce delay={1200}> 
        <p className="text-yellow-400 md:text-xl">
          I am a CNC Operator and 2d Cad designer
        </p>
        </Slide>
      </div>
      <Fade triggerOnce delay={1000}>     
         <div className="flex items-end h-[500px]">
        <Image
          src={profile}
          alt="profile"
          height={400}
          width={400}
          className="h-[450px] object-contain"
        />
      </div>
      </Fade>

    </div>
  );
};

export default Crousal;
