"use client";
import React from "react";
import { Item } from "../../interfaces/types";

interface CardDetailsProps {
  item: Item;
}
function CardDetails({ item }: CardDetailsProps) {
  if (!item) {
    return <div>No details available.</div>;
  }

  return (
    <div className="p-4 flex jusfitify-center items-center h-screen bg-white">
      <div>
        <h1>Comparte esta experiencia</h1>
        <div className="relative h-48 w-48">
          <img
            src={item.image[0]}
            alt={item.title}
            className="rounded-lg w-full h-full object-cover cursor-pointer"
          />
          <h2>{item.title}</h2>
        </div>
      </div>
      <div>
        <div className="p-2 border-gray-400">
          <h1>Copia el enlace</h1>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
