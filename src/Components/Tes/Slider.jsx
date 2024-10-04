import { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Testimonial from "./Testimonial";
import quote from "../../../src/assets/icons/quote.svg";
import quoteRight from "../../../src/assets/icons/quoteRight.svg";
import cross from "../../../src/assets/icons/cross.svg";
import PropTypes from "prop-types";

const reviews = [
  {
    id: 1,
    reviewer: "John Doe",
    title: "Web Developer",
    review:
      "An absolute masterpiece! This product exceeded all my expectations with its exceptional quality and performance. From start to finish, it has been an incredible experience. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    reviewer: "Alice Smith",
    title: "UI/UX Designer",
    review:
      "Overall, a decent product. It gets the job done but there's room for improvement. The performance is satisfactory, though it could be better. A solid choice if you're not looking for something top-of-the-line.",
    rating: 3,
  },
  {
    id: 3,
    reviewer: "Jane Johnson",
    title: "App Developer",
    review:
      "Very pleased with this purchase! The product delivers as promised and offers great value for money. There were a few minor issues, but nothing that significantly impacted my overall satisfaction.",
    rating: 4,
  },
  {
    id: 4,
    reviewer: "Mark Brown",
    title: "CEO",
    review:
      "Outstanding in every aspect! This product has truly impressed me with its superior quality and functionality. It stands out in the market and I couldn’t be happier with my choice. Five stars all the way!",
    rating: 5,
  },
  {
    id: 5,
    reviewer: "Emily Wilson",
    title: "Writter",
    review:
      "A fantastic product that I would recommend to anyone! It combines top-notch quality with an excellent user experience. I have had zero issues and the performance has been flawless. Truly a five-star item!",
    rating: 5,
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  centerPadding: "7px",
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const SliderComp = ({ handleCloseModal }) => {
  const arrowRef = useRef(null);
  const [modalContent, setModalContent] = useState({});

  const openModal = (review) => {
    setModalContent(review);
  };

  return (
    <Container className="mt-7 pb-11">
      <Slider ref={arrowRef} {...settings}>
        {reviews.map((item) => (
          <Testimonial key={item.id} item={item} openModal={openModal} />
        ))}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back rounded-md">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next bg-btn-bg rounded-md">
          <IoIosArrowForward />
        </button>
      </Buttons>
      {modalContent.review && (
        <ModalOverlay onClick={() => setModalContent({})}>
          <ModalContent
            className="bg-blue-900  text-bodytext relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              onClick={() => setModalContent({})}
              className="w-5 cursor-pointer absolute top-2 right-2"
              src={cross}
              alt=""
            />
            <img className="w-10" src={quote} alt="" />
            <p>{modalContent.review}</p>
            <div className="flex justify-end">
              <img className="w-10" src={quoteRight} alt="" />
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

SliderComp.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 3rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: wheat;
    border: none;
    position: absolute;
    top:88%;
    right: 45%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media(max-width: 570px){
      right: 40%;
    }
  
    
  }

  .back {
    left: 45%;
    @media(max-width: 570px){
      left: 40%;
    }
   
    
  }
 
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 100%;

  p {
    font-size: 1.1rem;
  }
`;
