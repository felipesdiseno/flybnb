import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
function Footer() {
  return (
    <div className="bg-gray-100 flex flex-row justify-between items-center p-4">
      <div className="flex flex-row space-x-4 text-gray-600">
        <p>© 2024 Flybnb, Inc. Todos los derechos reservados.</p>
        <p>.</p>
        <p>Privacidad</p>
        <p>.</p>
        <p>Términos</p>
        <p>.</p>
        <p>Mapa del sitio</p>
        <p>.</p>
        <p>Datos de la empresa</p>
      </div>
      <div className="flex flex-row space-x-4 text-gray-500">
        <TbWorld className="w-6 h-6" />
        <p className=""> Español (CO) </p>
        <p> $ COP </p>
        <FaFacebookSquare className="w-6 h-6" />
        <FaTwitterSquare className="w-6 h-6" />
        <FaInstagramSquare className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Footer;
