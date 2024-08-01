import { LiaTicketAltSolid } from "react-icons/lia";
import { LuMountainSnow } from "react-icons/lu";
import { GiHabitatDome } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { PiSwimmingPool } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import { PiFarmLight } from "react-icons/pi";
import React from "react";

const categories = [
  { icon: <LiaTicketAltSolid />, label: "Icónicos" },
  { icon: <PiSwimmingPool />, label: "Piscinas increíbles" },
  { icon: <HiHomeModern />, label: "Casas rurales" },
  { icon: <LuMountainSnow />, label: "En las alturas" },
  { icon: <GiHabitatDome />, label: "Cúpulas" },
  { icon: <TbBeach />, label: "Frente a la playa" },
  { icon: <PiFarmLight />, label: "Granjas" },
];

function CategoryCarousel() {
  return (
    <div className="flex overflow-x-auto space-x-4 p-2  ml-4 mt-4 ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-gray-600 hover:text-black "
        >
          <div className="w-8 h-8 p-0">{category.icon}</div>
          <p className="mt-1 text-center text-xs ">{category.label}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryCarousel;
