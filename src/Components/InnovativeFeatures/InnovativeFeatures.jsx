import security from "../../../public/security.json";
import InnovativeFeatureCard from "./InnovativeFeatureCard";

const InnovativeFeatures = () => {
  const featuresData = [
    {
      title: "Robust Security",
      description:
        "Protect your business with our robust security measures. We implement advanced security protocols and encryption techniques to safeguard your data against cyber threats, ensuring your information remains confidential and secure. Trust us to keep your digital assets safe.",
      icon: security,
      bgColor: "#0F4AA5",
    },
    {
      title: "Responsiveness",
      description:
        "Experience unparalleled responsiveness with our solutions, optimized for performance across all devices. Whether on desktop, tablet, or mobile, enjoy a seamless user experience that enhances customer satisfaction and engagement. Stay ahead with technology that responds to your business needs.",
      icon: security,
      bgColor: "#4B0082",
    },
    {
      title: "Integrated Solutions",
      description:
        "Our integrated solutions streamline your business processes, enabling seamless connectivity between different systems. Enhance efficiency and productivity with our cohesive approach, designed to provide a unified experience and simplify complex workflows, driving your business towards success.",
      icon: security,
      bgColor: "#009900",
    },
    {
      title: "Scalability",
      description:
        "Grow your business without limitations. Our scalable solutions are designed to expand with your needs, ensuring that your infrastructure can handle increased demand effortlessly. Adapt to market changes and business growth smoothly with our flexible and scalable technologies.",
      icon: security,
      bgColor: "#005959",
    },
    {
      title: "High Performance",
      description:
        "Achieve high performance with our state-of-the-art technologies. We deliver fast, reliable, and efficient solutions that enhance your operational capabilities. Boost productivity and performance with systems designed for speed and reliability, ensuring your business runs smoothly.",
      icon: security,
      bgColor: "#800080",
    },
  ];
  return (
    <div className="font-Outfit mt-20">
      <h1 className="text-bodytext font-bold text-4xl text-center text-balance capitalize">
        Innovative Features for Business Success
      </h1>

      <div className="">
        {featuresData.map((data, index) => (
          <InnovativeFeatureCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default InnovativeFeatures;
