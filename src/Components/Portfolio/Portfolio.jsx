import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import Ripples from "react-ripples";

const Portfolio = () => {
  const [allProject, setAllProject] = useState([]);
  const [projectsToDisplay, setProjectsToDisplay] = useState([]);
  const [isSeeMore, setIsSeeMore] = useState(false);
  useEffect(() => {
    fetch("./portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProject(data);
        const showProjects = data?.slice(0, 4);
        setProjectsToDisplay(showProjects);
      });
  }, []);
  // console.log(allProject);
  // console.log(projectsToDisplay);
  const handleSeeMore = () => {
    setProjectsToDisplay(allProject);
    setIsSeeMore(!isSeeMore);
  };
  const handleSeeLess = () => {
    const showProjects = allProject?.slice(0, 4);
    setProjectsToDisplay(showProjects);
    setIsSeeMore(!isSeeMore);
  };
  return (
    <>
      <div id="portfolio" className="mt-20 font-Outfit ">
        <div className="text-center text-bodytext ">
          <h2 className="font-bold text-4xl">Inspiring Creations</h2>
          <p className="font-normal text-sm mt-3">
            Discover the essence of our remarkable projects crafted for our
            clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-11 mt-7 md:w-[95%] lg:w-[83%] mx-auto ">
          {projectsToDisplay?.map((project, idx) => (
            <PortfolioCard key={idx} project={project}></PortfolioCard>
          ))}
        </div>
        <div className="text-center mt-8">
          <Ripples className="" during={1500}>
            {isSeeMore ? (
              <button
                onClick={handleSeeLess}
                className="bg-btn-bg px-4 py-3 text-white rounded"
              >
                See less
              </button>
            ) : (
              <button
                onClick={handleSeeMore}
                className="bg-btn-bg px-8 py-3 text-white rounded-md"
              >
                See more
              </button>
            )}
          </Ripples>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
