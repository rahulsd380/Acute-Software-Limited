import { useState } from "react";
import styled from "styled-components";
import SliderComp from "./Slider";
// import Modal from './Modal';

const Testimonials = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent(null);
  };

  return (
    <Container id="project">
      <div className="text-center text-bodytext mt-20">
        <h1 className="font-bold text-4xl capitalize">Here from our clients</h1>
        <p className="font-normal text-sm mt-[18px]">
          Our clients share their experiences with us, expressing their
          satisfaction and highlighting the value they find in our services.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          doloremque voluptate excepturi porro sed totam quis animi dolorum
          rerum earum.
        </p>
      </div>
      <Slide>
        <SliderComp
          openModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
      </Slide>
      {/* {openModal && (
        <Modal content={modalContent} handleClose={handleCloseModal} />
      )} */}
    </Container>
  );
};

export default Testimonials;

const Container = styled.div`
  width: 83%;
  margin: 0 auto;
  position: relative;
  @media (max-width: 840px) {
    width: 95%;
  }
`;

const Slide = styled.div``;
