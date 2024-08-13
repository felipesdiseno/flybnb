import { LiaTicketAltSolid } from "react-icons/lia";
import { LuMountainSnow } from "react-icons/lu";
import { GiHabitatDome } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { PiSwimmingPool } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import { PiFarmLight } from "react-icons/pi";
import React from "react";

const categories = [
  { icon: <LiaTicketAltSolid className="w-6 h-6" />, label: "Icónicos" },
  {
    icon: <PiSwimmingPool className="w-6 h-6" />,
    label: "Piscinas increíbles",
  },
  { icon: <HiHomeModern className="w-6 h-6" />, label: "Casas rurales" },
  { icon: <LuMountainSnow className="w-6 h-6" />, label: "En las alturas" },
  { icon: <GiHabitatDome className="w-6 h-6" />, label: "Cúpulas" },
  { icon: <TbBeach className="w-6 h-6" />, label: "Frente a la playa" },
  { icon: <PiFarmLight className="w-6 h-6" />, label: "Granjas" },
];

function CategoryCarousel() {
  return (
    <div className="flex row space-x-4 p-2 mt-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-gray-500 hover:text-black "
        >
          <div className="w-6 h-6 p-0 align-center items-center">
            {category.icon}
          </div>
          <p className="mt-1 text-center text-xs ">{category.label}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryCarousel;
