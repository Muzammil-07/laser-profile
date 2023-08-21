import React from "react";
import Image from "next/image";
import profile from "../../public/images/profile.jpeg";
const Crousal = () => {
  return (
    <div className="md:h-[420px] grid grid-cols-1 md:grid-cols-2 bg-black text-white">
      <div className="flex justify-center items-center flex-col gap-y-2 md:gap-y-4">
        <h1 className=" text-xl md:text-4xl">CNC Operator</h1>
        <p className="text-yellow-400 md:text-xl">
          I am a CNC Operator and 2d Cad designer
        </p>
      </div>
      <div className="flex items-end">
        <Image
          src={profile}
          alt="profile"
          height={400}
          width={400}
          className="h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Crousal;
