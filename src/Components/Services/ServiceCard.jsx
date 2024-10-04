import website from "../../../src/assets/icons/website.svg";
import optimization from "../../../src/assets/icons/optimization.svg";
import contentManagement from "../../../src/assets/icons/content-management.svg";
import responsive from "../../../src/assets/icons/responsive-design.svg";
import abstract from "../../../src/assets/icons/Abstract Design.svg";

const ServiceCard = () => {
  return (
    <div className="font-Outfit">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-10">
        {/* First card in horizontal direction*/}
        <div className="bg-blue-900 bg-opacity-60 p-7 rounded-lg flex flex-col justify-center items-center max-w-[400px] h-[250px] relative">
          <img className="absolute top-0 w-full" src={abstract} alt="" />
          <img src={website} alt="" className="w-20" />
          <h1 className="text-bodytext font-bold text-xl text-center text-balance capitalize mt-5">
            Web Development
          </h1>
          <p className="text-bodytext text-center font-normal text-sm mt-2">
            Creating robust and scalable websites tailored to your business
            needs using the latest technologies.
          </p>
        </div>

        {/* Vertical Cards in the middle (Container) */}
        <div className="flex flex-col gap-5">
          {/* First card in vertical direction*/}
          <div className="bg-blue-900 bg-opacity-60 p-7 rounded-lg flex flex-col justify-center items-center max-w-[400px] h-[250px] relative">
            <img className="absolute top-0 w-full" src={abstract} alt="" />
            <img src={optimization} alt="" className="w-20" />
            <h1 className="text-bodytext font-bold text-xl text-center text-balance capitalize mt-5">
              Web Optimization
            </h1>
            <p className="text-bodytext text-center font-normal text-sm mt-2">
              Improving your website speed, performance, and search engine
              ranking to attract more visitors.
            </p>
          </div>

          {/* Second card in vertical direction*/}
          <div className="bg-blue-900 bg-opacity-60 p-7 rounded-lg flex flex-col justify-center items-center max-w-[400px] h-[250px] relative">
            <img className="absolute top-0 w-full" src={abstract} alt="" />
            <img src={contentManagement} alt="" className="w-20" />
            <h1 className="text-bodytext font-bold text-xl text-center text-balance capitalize mt-5">
              Content Management
            </h1>
            <p className="text-bodytext text-center font-normal text-sm mt-2">
              Providing easy-to-use content management systems to keep your
              website content fresh and up-to-date.
            </p>
          </div>
        </div>

        {/* Second card in horizontal direction */}
        <div className="bg-blue-900 bg-opacity-60 p-7 rounded-lg flex flex-col justify-center items-center max-w-[400px] h-[250px] relative">
          <img className="absolute top-0 w-full" src={abstract} alt="" />
          <img src={responsive} alt="" className="w-20" />
          <h1 className="text-bodytext font-bold text-xl text-center text-balance capitalize mt-5">
            Responsive Design
          </h1>
          <p className="text-bodytext text-center font-normal text-sm mt-2">
            Ensuring your website looks great and functions seamlessly on all
            devices, from desktops to smartphones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
