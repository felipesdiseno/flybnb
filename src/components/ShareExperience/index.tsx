"use client";
import React from "react";
import { Item } from "../../interfaces/types";
import { IoCopy } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiMessenger } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiMore } from "react-icons/tfi";
import { IoIosMail } from "react-icons/io";

interface CardDetailsProps {
  item: Item;
}

function CardDetails({ item }: CardDetailsProps) {
  if (!item) {
    return <div>No details available.</div>;
  }

  return (
    <div
      className="p-2 flex flex-col justify-center items-start bg-none"
      style={{ width: "568px", height: "478px" }}
    >
      <h1 className="text-2xl font-bold mb-4">Comparte esta experiencia</h1>
      <div>
        <div className="flex items-center space-x-2">
          <img
            src={item.image[0]}
            alt={item.title}
            className="h-16 w-16 rounded-lg object-cover cursor-pointer"
          />
          <h2 className="text-md font-bold w-full line-clamp-2">
            {item.title}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="p-2 border-gray-400 flex flex-row border rounded-md w-64 h-12 items-center cursor-pointer">
          <IoCopy className="w-5 h-5 mr-4" />
          <h1 className="text-sm font-bold text-gray-800">Copia el enlace</h1>
        </div>
        <div className="p-2 border-gray-400 flex flex-row border rounded-md w-64 h-12 items-center cursor-pointer">
          <IoIosMail className="bg-gray-600 text-white rounded-sm w-5 h-5 mr-4" />
          <h1 className="text-sm font-bold text-gray-800">
            Correo electronico
          </h1>
        </div>
        <div className="p-2 border-gray-400 flex flex-row border rounded-md w-64 h-12 items-center cursor-pointer">
          <BiSolidMessageRounded className="bg-gray-600 text-white rounded-sm w-5 h-5 mr-4" />
          <h1 className="text-sm font-bold text-gray-800">Mensajes</h1>
        </div>
        <div className="p-2 border-gray-400 flex flex-row border rounded-md w-64 h-12 items-center cursor-pointer">
          <FaSquareWhatsapp className="w-5 h-5 mr-4" />
          <h1 className="text-sm font-bold text-gray-800">WhatsApp</h1>
        </div>
        <div className="p-2 border-gray-400 flex flex-row border rounded-md w-64 h-12 items-center cursor-pointer">
          <SiMessenger className="text-white bg-gray-600 rounded-sm w-5 h-5 mr-4" />
          <h1 className="text-sm font-bold text-gray-800">Messenger</h1>
        </div>
        <div className="p-2 border-gray-400 flex flex-row border rounded-md w-64 h-12 items-center cursor-pointer">
          <FaFacebookSquare className="w-5 h-5 mr-4" />
          <h1 className="text-sm font-bold text-gray-800">Facebook</h1>
        </div>
        <div className="p-2 border-gray-400 flex flex-row border rounded-md w-64 h-12 items-center cursor-pointer">
          <FaXTwitter className="bg-gray-600 text-white rounded-sm w-5 h-5 mr-4" />
          <h1 className="text-sm font-bold text-gray-800">Twitter</h1>
        </div>
        <div className="p-2 border-gray-400 flex flex-row border rounded-md w-64 h-12 items-center cursor-pointer">
          <TfiMore className="rounded-sm w-5 h-5 mr-4" />
          <h1 className="text-sm font-bold text-gray-800">Más opciones</h1>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
