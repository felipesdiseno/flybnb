"use client";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from "react";
function HowManyCount() {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);
  const [pet, setPet] = useState(0);

  const handleIncrement =
    (setter: React.Dispatch<React.SetStateAction<number>>, value: number) =>
    () =>
      setter(value + 1);
  const handleDecrement =
    (setter: React.Dispatch<React.SetStateAction<number>>, value: number) =>
    () => {
      if (value > 0) setter(value - 1);
    };

  return (
    <div
      style={{ height: "406px", maxWidth: "411px" }}
      className="m-10 bg-white shadow-md  rounded-xl p-6 space-y-6"
    >
      <div className="flex flex-row justify-between ">
        <div>
          <p className="font-bold text-[18px] text-gray-600">Adultos</p>
          <p className="text-gray-400 text-[14px]">Edad: 13 años o más</p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <button
            onClick={handleDecrement(setAdult, adult)}
            disabled={adult === 0}
            className={`h-[32px] w-[32px] ${
              adult === 0 ? "text-gray-400" : "text-black"
            }`}
          >
            <CiCircleMinus className="h-[32px] w-[32px]" />
          </button>
          <h1>{adult}</h1>
          <button onClick={handleIncrement(setAdult, adult)}>
            <CiCirclePlus className="h-[32px] w-[32px]" />
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>
      <div className="flex flex-row justify-between ">
        <div>
          <p className="font-bold text-[18px] text-gray-600">Niños</p>
          <p className="text-gray-400 text-[14px]">Edades: 2-12</p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <button
            onClick={handleDecrement(setChild, child)}
            disabled={child === 0}
            className={`h-[32px] w-[32px] ${
              child === 0 ? "text-gray-400" : "text-black"
            }`}
          >
            <CiCircleMinus className="h-[32px] w-[32px]" />
          </button>
          <h1>{child}</h1>
          <button onClick={handleIncrement(setChild, child)}>
            <CiCirclePlus className="h-[32px] w-[32px]" />
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>

      <div className="flex flex-row justify-between ">
        <div>
          <p className="font-bold text-[18px] text-gray-600">Bebés</p>
          <p className="text-gray-400 text-[14px]">Menos de 2 años</p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <button
            onClick={handleDecrement(setBaby, baby)}
            disabled={baby === 0}
            className={`h-[32px] w-[32px] ${
              baby === 0 ? "text-gray-400" : "text-black"
            }`}
          >
            <CiCircleMinus className="h-[32px] w-[32px]" />
          </button>
          <h1>{baby}</h1>
          <button onClick={handleIncrement(setBaby, baby)}>
            <CiCirclePlus className="h-[32px] w-[32px]" />
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>

      <div className="flex flex-row justify-between">
        <div>
          <p className="font-bold text-[18px] text-gray-600">Mascotas</p>
          <p className="text-gray-400 text-[14px]">
            ¿Traes a un animal de servicio?
          </p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <button
            onClick={handleDecrement(setPet, pet)}
            disabled={pet === 0}
            className={`h-[32px] w-[32px] ${
              pet === 0 ? "text-gray-400" : "text-black"
            }`}
          >
            <CiCircleMinus className="h-[32px] w-[32px]" />
          </button>
          <h1>{pet}</h1>
          <button onClick={handleIncrement(setPet, pet)}>
            <CiCirclePlus className="h-[32px] w-[32px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowManyCount;
