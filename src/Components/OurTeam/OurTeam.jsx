import TeamCard from "./TeamCard";


const OurTeam = () => {
    return (
        <div className="font-Outfit mt-20">
      <h1 className="text-bodytext font-bold text-4xl text-center text-balance capitalize">
      The Innovators at Your Service
      </h1>

      <p className="text-bodytext text-center font-normal text-sm mt-3">
      Discover the talented professionals dedicated to delivering exceptional web solutions and driving your business forward.
      </p>

      {/* Service Cards */}
      <TeamCard />
    </div>
    );
};

export default OurTeam;