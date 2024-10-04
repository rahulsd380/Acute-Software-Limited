import styled from "styled-components";
import triangle from "../../../src/assets/images/Tech Stack/triangle.png";
import user from "../../../src/assets/icons/user.svg";
import ReactStars from "react-stars";
import PropTypes from "prop-types";

const Testimonial = ({ item, openModal }) => {
  const { review, reviewer, title, rating } = item;

  const toggleExpand = () => {
    openModal(item);
  };

  return (
    <Container className="shadow-lg project bg-gradient-to-r from-blue-900 to-indigo-950 border border-blue-600 relative">
      <img className="w-12 absolute bottom-0 right-0" src={triangle} alt="" />

      <div className="flex justify-between items-center">
        {/* User name & icon */}
        <div className="flex items-center gap-2">
          {/* User icon */}
          <div className="bg-gradient-to-r from-indigo-950 to-indigo-950 w-9 h-9 rounded-full flex justify-center items-center border border-blue-600">
            <img className="w-5" src={user} alt="" />
          </div>

          {/* User name and title */}
          <div>
            <h1 className="font-semibold text-white capitalize leading-none text-sm">
              {reviewer}
            </h1>
            <p className="font-normal text-gray-300/80 text-[10px] leading-none mt-[7px]">
              {title}
            </p>
          </div>
        </div>

        <ReactStars
          count={5}
          size={24}
          value={rating}
          edit={false}
          color2={"#60a5fa"}
        />
      </div>

      <p className="font-normal text-gray-200/90 text-[12px] mt-4">
        {review.slice(0, 170) + (review.length > 170 ? "..." : "")}
        {review.length > 170 && (
          <button
            onClick={toggleExpand}
            className="text-[#60a5fa] font-semibold"
          >
            See More
          </button>
        )}
      </p>
    </Container>
  );
};

Testimonial.propTypes = {
  item: PropTypes.shape({
    review: PropTypes.string.isRequired,
    reviewer: PropTypes.string.isRequired,
    title: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Testimonial;

const Container = styled.div`
  height: 12rem;
  margin: 0 0.5rem;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 14px;
`;
