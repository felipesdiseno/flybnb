import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
function CategoriesSlide() {
  return (
    <div className="flex row-auto m-4">
      <IoIosArrowDropleft />
      <div>
        <img src="" alt="" />
        <h1>titulo categoria</h1>
      </div>
      <IoIosArrowDropright />
    </div>
  );
}

export default CategoriesSlide;
