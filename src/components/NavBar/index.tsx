"use client";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";

export default function NavBar() {
  return (
    <div
      className="flex items-center justify-between pt-5 mx-auto"
      style={{ height: "80px", maxWidth: "1200px" }}
    >
      <Link href="/">
        <div className="cursor-pointer flex flex-row text-red-500 items-end">
          <h1 className="text-4xl mr-2 font-bold font-family-serif">F</h1>
          <h2 className="text-3xl ">Flybnb</h2>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/estadias">
          <div className=" bg-none text-lg cursor-pointer text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-full p-2">
            Estadías
          </div>
        </Link>
        <Link href="/experiencias">
          <div className="bg-none text-lg cursor-pointer text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-full p-2">
            Experiencias
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 ">
        <div className=" p-2 bg-none text-lg cursor-pointer text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-full ">
          <h1>Pon tu espacio en Flybnb</h1>
        </div>
        <div className=" w-10 h-10 cursor-pointer rounded-full flex justify-center items-center bg-none hover:bg-gray-100  ">
          <TbWorld className="h-4 w-4 " strokeWidth={1} />
        </div>
        <Link href="/login">
          <div className=" w-20 h-12 text-gray-500 flex items-center justify-center border-gray-200 border-1 rounded-full p-2 space-x-2 cursor-pointer hover:shadow-md">
            <GiHamburgerMenu className="h-3 w-3" />
            <FaUserCircle className="text-3xl" />
          </div>
        </Link>
      </div>
    </div>
  );
}
