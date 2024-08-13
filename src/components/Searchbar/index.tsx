"use client";
import App from "../DatePicker";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import HowManyCount from "../HowManycount";

export default function SearchBar() {
  const [showDatePicker, setShowDatePicker] = useState({
    arrival: false,
    departure: false,
  });

  const arrivalRef = useRef<HTMLDivElement>(null);
  const departureRef = useRef<HTMLDivElement>(null);

  const [showText, setShowText] = useState(false);
  const [showHowMany, setShowMany] = useState(false);

  const handleClick = () => {
    setShowText(true);
  };

  const handleShow = () => {
    setShowMany(!showHowMany);
  };

  useEffect(() => {
    if (showDatePicker.arrival && arrivalRef.current) {
      arrivalRef.current.focus();
    }
    if (showDatePicker.departure && departureRef.current) {
      departureRef.current.focus();
    }
  }, [showDatePicker]);

  return (
    <div className="border border-gray-200 rounded-full mx-auto max-w-4xl shadow-md">
      <div className="flex justify-between items-center h-full">
        <div className="p-2 hover:bg-gray-200 rounded-full h-[86px]">
          <h1 className="block text-gray-500 ml-2 mt-2">Dónde</h1>
          <h1 className="text-gray-500 ml-2">Explora tus destinos</h1>
        </div>
        <div className="flex-1 p-4 hover:bg-gray-200 rounded-full h-[86px]">
          <label className="block text-gray-500">Llegada</label>
          {showDatePicker.arrival ? (
            <App />
          ) : (
            <span
              className="cursor-pointer text-gray-500"
              onClick={() =>
                setShowDatePicker({ ...showDatePicker, arrival: true })
              }
            >
              Agregar fecha
            </span>
          )}
        </div>
        <div className="flex-1 p-4 hover:bg-gray-200 rounded-full h-[86px]">
          <label className="block text-gray-500">Salida</label>
          {showDatePicker.departure ? (
            <App />
          ) : (
            <span
              className="cursor-pointer text-gray-500"
              onClick={() =>
                setShowDatePicker({ ...showDatePicker, departure: true })
              }
            >
              Agregar fecha
            </span>
          )}
        </div>
        <div className="flex-1 p-4 hover:bg-gray-200 rounded-full h-full flex items-center relative">
          <div className="flex-1 cursor-pointer" onClick={handleShow}>
            <h1 className="text-gray-500">Quién</h1>
            <div>
              <h1 className="text-gray-500">¿Cuántos?</h1>
            </div>
          </div>
          <div
            className="p-4 bg-red-500 text-white rounded-full flex items-center justify-center h-full"
            onClick={handleClick}
          >
            <IoIosSearch size={20} />
            {showText && <span className="ml-2 text-white">Buscar</span>}
          </div>

          {showHowMany && (
            <div className="absolute top-full left-0 z-50 mt-2 w-[411px] h-[406px]">
              <HowManyCount />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
