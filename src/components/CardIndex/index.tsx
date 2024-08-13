"use client";
import React, { useState } from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { data } from "../../../public/data";
import ShareExperience from "../ShareExperience";
import { Item } from "../../interfaces/types";

function CardIndex() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleShowDetails = (item: Item) => {
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {data.map((item: Item) => (
          <div
            key={item.id}
            className="relative mb-6 bg-none rounded overflow-hidden p-4"
          >
            <div className="relative w-64 h-72">
              <img
                src={item.image[0]}
                alt={item.title}
                className="rounded-lg h-full object-cover"
              />
              <div
                className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer"
                onClick={() => handleShowDetails(item)}
              >
                <FaArrowUpFromBracket className="text-black" />
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <div className="flex mt-2">
                <h2 className="font-medium">Anfitrión:</h2>
                <h2 className="text-gray-500 pl-1">{item.anfitrion}</h2>
              </div>
              <div className="flex mt-2">
                <h3 className="font-bold">{item.precio}</h3>
                <h3 className="pl-1">{item.condicion}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeDetails}
              className="absolute top-2 right-2 text-gray-600"
            >
              &times;
            </button>
            <ShareExperience item={selectedItem} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardIndex;
