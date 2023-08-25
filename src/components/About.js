import React from "react";
import { Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <div className="bg-gray-900 text-white px-12 py-6">
      <Slide triggerOnce delay={50} duration={1200}>
      <h2 className="text-2xl text-yellow-400">About</h2>
      <div className="px-4 space-y-3">
        <h3 className="text-xl">Education</h3>
        <ul className="list-disc pl-4">
          <li>
            <p>Intemediate from Karachi Board</p>
          </li>
        </ul>
        <h3 className="text-xl">Certification</h3>
        <ul className="list-disc pl-4">
          <li>
            <p>One Year Graphics Designing Course from Power 2000 instutue</p>
          </li>
          <li>
            <p>
              Six Month Mechatronics technician and Plc programming Course From
              Aman Tech
            </p>
          </li>
        </ul>
           <h3 className="text-xl">Experience</h3>
        <ul className="list-disc pl-4">
          <li>
            <p>Six Years Experience as CNC Operator and Graphics Designer at ELEVATION PVT LTD Karachi Pakistan</p>
          </li>
       
        </ul>
        <h3 className="text-xl">Skills</h3>
        <ul className="list-disc pl-4">
        <li>
            <p>Laser CNC Operator</p>
          </li>
          <li>
            <p>CorelDraw</p>
          </li>
          <li>
            <p>Graphics Designing</p>
          </li>
          <li>
            <p>
            Plc Programming
            </p>
          </li>
          <li>
            <p>Arduino Programming</p>
          </li>
        </ul>
      </div>
      </Slide>
    </div>
  );
};

export default About;
