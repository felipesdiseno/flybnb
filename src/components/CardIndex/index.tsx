import React from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { data } from "../../../public/data";

function CardIndex() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {data.map((item) => (
        <div key={item.id} className="relative mb-6">
          <div className="relative">
            <img
              src={item.image[0]}
              alt={item.title}
              className="rounded-lg w-full"
            />
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
              <FaArrowUpFromBracket className="text-black" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <div className="flex">
              <h2>Anfitrión:</h2>
              <h2 className="text-gray-500 pl-1">{item.anfitrion}</h2>
            </div>
            <div className="flex">
              <h3 className="font-bold">{item.precio}</h3>
              <h3 className="pl-1">{item.condicion}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardIndex;
