"use client";
import React, { useState } from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { data } from "../../../public/data";
import ShareExperience from "../ShareExperience";
import { Item } from "../../interfaces/types";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // Ajusta este selector según tu estructura de DOM

function CardIndex() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleShowDetails = (item: Item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {data.map((item: Item) => (
          <div
            key={item.id}
            className="relative mb-6 bg-white rounded overflow-hidden shadow-lg p-4"
          >
            <div className="relative">
              <img
                src={item.image[0]}
                alt={item.title}
                className="rounded-lg w-full"
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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Share Experience Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
          <ShareExperience item={selectedItem} />
        </Modal>
      )}
    </div>
  );
}

export default CardIndex;
