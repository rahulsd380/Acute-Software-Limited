import Lottie from "lottie-react";

const InnovativeFeatureCard = ({ data }) => {
  const { title, description, icon, bgColor } = data;
  return (
    <div className="h-full flex flex-col justify-center items-center sticky top-0">
      <div
        style={{ backgroundColor: bgColor }}
        className={`flex flex-col-reverse lg:flex-row items-center justify-between max-w-[900px] p-5 lg:p-16 rounded-xl mt-10`}
      >
        <div className="max-w-[800px]">
          <h1 className="text-white font-bold text-3xl">{title}</h1>
          <p className="text-bodytext font-normal text-base mt-3">
            {description}
          </p>
        </div>

        <div className="w-full sm:w-[200px] lg:w-[600px]">
          <Lottie animationData={icon} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default InnovativeFeatureCard;
