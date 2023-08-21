import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white px-12 py-6">
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
        <h3 className="text-xl">Skills</h3>
        <ul className="list-disc pl-4">
        <li>
            <p>Laser CNC Operator</p>
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
    </div>
  );
};

export default About;
