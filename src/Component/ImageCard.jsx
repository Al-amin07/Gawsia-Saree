import { useState } from "react";

import NewModal from "./NewModal";
import PropTypes from 'prop-types'
const ImageCard = ({ item, index }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
   <>
     <div
        onClick={openModal}
          key={item._id}
          className={`relative overflow-hidden mb-2 break-inside ${
            index % 3 === 0 ? "lg:row-span-2 lg:col-span-2" : ""
          }`}
        >
          <img
            src={item?.img}
            alt={item.name || "Image"}
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
    {/* <ImageModal openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal}/> */}
    <NewModal item={item} closeModal={closeModal} isOpen={modalIsOpen}/>
   </>
  );
};

ImageCard.propTypes  ={
  item: PropTypes.object,
  index: PropTypes.number,
}

export default ImageCard;
