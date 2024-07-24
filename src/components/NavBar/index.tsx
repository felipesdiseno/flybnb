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
        <div className="cursor-pointer">
          <Image src="/images/flogo.svg" alt="Logo" width={118} height={64} />
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/estadias">
          <div className="text-lg cursor-pointer">Estadías</div>
        </Link>
        <Link href="/experiencias">
          <div className="text-lg cursor-pointer">Experiencias</div>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <h1>Pon tu espacio en Flybnb</h1>
        <div
          className="flex justify-center items-center"
          style={{ width: "46px", height: "42px" }}
        >
          <TbWorld style={{ width: "16px", height: "16px" }} />
        </div>
        <Link href="/login">
          <div
            className="flex items-center border-gray-400 border-2 rounded-full p-2 space-x-2"
            style={{ width: "86px", height: "48px" }}
          >
            <GiHamburgerMenu style={{ width: "16px", height: "16px" }} />
            <FaUserCircle
              className="text-3xl"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
