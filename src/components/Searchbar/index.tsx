"use client";

import { IoIosSearch } from "react-icons/io";
import App from "../DatePicker";

export default function SearchBar() {
  return (
    <div className="border-2 border-gray-400 rounded-full mx-auto  max-w-4xl">
      <div className="flex justify-between items-center">
        <div className="flex-1 p-4 hover:bg-gray-200 rounded-full">
          <label className="block text-gray-500">Dónde</label>
          <input
            type="text"
            placeholder="Explora destinos"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>
        <div className="flex-1 p-4 hover:bg-gray-200 rounded-full">
          <label className="block text-gray-500">Llegada</label>
          <App />
        </div>
        <div className="flex-1 p-4 hover:bg-gray-200 rounded-full">
          <label className="block text-gray-500">Salida</label>
          <App />
        </div>
        <div className="flex-1 p-4 hover:bg-gray-200 rounded-full flex items-center">
          <div className="flex-1">
            <label className="block text-gray-500">Quién</label>
            <input
              type="text"
              placeholder="¿Cuántos?"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>
          <div className="p-4 bg-red-500 text-white rounded-full flex items-center justify-center">
            <IoIosSearch size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
