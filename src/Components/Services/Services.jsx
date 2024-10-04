import ServiceCard from "./ServiceCard";

const Services = () => {
  //   const services = [
  //     {
  //       icon: website,
  //       title: "Web Development",
  //       description:
  //         "Creating robust and scalable websites tailored to your business needs using the latest technologies.",
  //     },
  //     {
  //       icon: website,
  //       title: "Responsive Design",
  //       description:
  //         "Ensuring your website looks great and functions seamlessly on all devices, from desktops to smartphones.",
  //     },
  //     {
  //       icon: website,
  //       title: "Web Optimization",
  //       description:
  //         "Improving your website's speed, performance, and search engine ranking to attract more visitors.",
  //     },
  //     {
  //       icon: website,
  //       title: "Content Management",
  //       description:
  //         "Providing easy-to-use content managesment systems to keep your website content fresh and up-to-date.",
  //     },
  //   ];
  return (
    <div id="services" className="font-Outfit mt-20">

      <h1 className="text-bodytext font-bold text-4xl text-center text-balance capitalize">
        Our Awesome Services
      </h1>

      <p className="text-bodytext text-center font-normal text-sm mt-3">
        Discover our range of expert services designed to  enhance your  digital
        presence <br /> and drive your business towards success.
      </p> 

      {/* Service Cards */}
      <ServiceCard />
    </div>
  );
};

export default Services;
