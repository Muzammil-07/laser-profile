import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "swiper/css";
import Image from "next/image";
import img1 from "../../public/images/a11.jpeg";
import img2 from "../../public/images/a12.jpeg";
import img3 from "../../public/images/a13.jpeg";
import img4 from "../../public/images/a14.jpeg";
import img5 from "../../public/images/a15.jpeg";
import img6 from "../../public/images/a16.jpeg";
import img7 from "../../public/images/a17.jpeg";
import img8 from "../../public/images/a18.jpeg";
import img9 from "../../public/images/b1.jpeg";
import img10 from "../../public/images/b2.jpeg";
import img11 from "../../public/images/b3.jpeg";
import img12 from "../../public/images/b4.jpeg";
import img13 from "../../public/images/b5.jpeg";
import img14 from "../../public/images/b6.jpeg";
import img15 from "../../public/images/b7.jpeg";
import img16 from "../../public/images/b8.jpeg";
import img17 from "../../public/images/b9.jpeg";
import img18 from "../../public/images/b10.jpeg";
import img19 from "../../public/images/b11.jpeg";
import img20 from "../../public/images/b12.jpeg";
import img21 from "../../public/images/b13.jpeg";
import img22 from "../../public/images/b14.jpeg";
import img23 from "../../public/images/b15.jpeg";
import img24 from "../../public/images/b16.jpeg";
import img25 from "../../public/images/b17.jpeg";
import img26 from "../../public/images/b18.jpeg";
import img27 from "../../public/images/b19.jpeg";
import img28 from "../../public/images/b20.jpeg";
import img29 from "../../public/images/b21.jpeg";
import img30 from "../../public/images/b22.jpeg";
import img31 from "../../public/images/b23.jpeg";
import img32 from "../../public/images/b24.jpeg";
import img33 from "../../public/images/b25.jpeg";
import img34 from "../../public/images/b26.jpeg";
import img35 from "../../public/images/b27.jpeg";
import img36 from "../../public/images/b28.jpeg";
import img37 from "../../public/images/b29.jpeg";
import img38 from "../../public/images/b30.jpeg";
import img39 from "../../public/images/b31.jpeg";
import img40 from "../../public/images/b32.jpeg";
import img41 from "../../public/images/b33.jpeg";
import img42 from "../../public/images/b34.jpeg";
import img43 from "../../public/images/b35.jpeg";
import img44 from "../../public/images/b36.jpeg";
import img45 from "../../public/images/b37.jpeg";
import img46 from "../../public/images/b38.jpeg";
import img47 from "../../public/images/b39.jpeg";
import img48 from "../../public/images/b40.jpeg";
import img49 from "../../public/images/b41.jpeg";
import img50 from "../../public/images/b42.jpeg";
import img51 from "../../public/images/b43.jpeg";
import img52 from "../../public/images/b44.jpeg";
import img53 from "../../public/images/b45.jpeg";
import img54 from "../../public/images/b46.jpeg";
import img55 from "../../public/images/b47.jpeg";
import img56 from "../../public/images/b48.jpeg";
import img57 from "../../public/images/b49.jpeg";
import img58 from "../../public/images/b50.jpeg";
import img59 from "../../public/images/b51.jpeg";
import img60 from "../../public/images/b52.jpeg";

import btn1 from "../../public/images/btn1.png";
import btn2 from "../../public/images/btn2.png";

const Gallery = () => {
  const [count, setCount] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
  ];
  const handleInc = () => {
    if (count == images.length - 1) {
      return setCount(0);
    }
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count <= 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };
  return (
    <div className="bg-black text-white px-4 md:px-12 ">
      <h1 className="text-2xl py-6 text-yellow-400">Projects</h1>
      <div className="h-[450px] grid grid-cols-[1fr_6fr_1fr] justify-items-center place-content-center md:grid-cols-[1fr_3fr_1fr]  ">
        <div>
          {" "}
          <button onClick={handleDec}>
            <div className="flex justify-center items-center h-[400px]">
              <Image
                src={btn1}
                alt="imag"
                height={100}
                width={100}
                className="object-contain "
              />
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Zoom>
            <Image
              src={images[count]}
              alt="imag"
              height={500}
              width={500}
              className="h-[400px] object-contain  "
            />
          </Zoom>
        </div>
        <div>
          {" "}
          <button onClick={handleInc}>
            <div className="flex justify-center items-center h-[400px]">
              <Image
                src={btn2}
                alt="imag"
                height={100}
                width={100}
                className="object-contain"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
