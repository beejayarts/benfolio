import React from "react";
import projectsData from "./portfolioData.js";
import img from "./../../assets/project1.png";

const Portfolio = () => {
  console.table(projectsData);
  return (
    <div id="portfolio" className="max-w-7xl mx-auto p-20   h-[90vh]">
      <div className="portfolio_header w-2/5 mx-auto mb-20">
        <h5 className="text-[#929292] text-center tracking-widest mb-4">
          PORTFOLIO
        </h5>
        <h4 className="text-4xl text-myblue font-extrabold mb-4 text-center">
          My Recent Works
        </h4>
        <p className="text-[#595959] mb-4 text-center text-base">
          Here are some of the projects I have built recently using different
          technologies for clients or as personal projects
        </p>
      </div>
      <div className="portfolio_content w-[92%] mx-auto h-fit">
        {/* portfolio card starts here */}
       {projectsData.map((card,i)=>{
        return(
          <div className="project_card w-full flex  items-center border-b-2 mb-14 pb-14  justify-center gap-14">
          <div className="pc_img shadow-2xl overflow-hidden w-1/2">
            <img
              src={img}
              alt="project1"
              className="project_img w-full object-contain border shadow-lg transition-all duration-700 hover:scale-105 rounded-2xl"
            />
          </div>
          <div className="pc_text w-1/2">
            <h3 className="project_title text-2xl font-semibold text-myblue">
              Geocurves Engineering
            </h3>
            <p className="text-[#595959] mb-4  text-base">
              I built this project for a client after attending her yoga class.
              She wanted a WordPress site with a more custom layout so I used an
              existing WordPress theme and tweaked it with about 500 lines of
              additional CSS.
            </p>
            <div className="technologies flex gap-3 mb-4">
              <span className="text-xs text-myblue font-bold">WORDPRESS</span>
              <span className="text-xs text-myblue font-bold">HTML</span>
              <span className="text-xs text-myblue font-bold">CSS</span>
            </div>
            <div className="card_btns flex gap-4">
              <a
                className="btn btn bg-myblue text-white font-semibold py-2 px-4 rounded border text-center  transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer "
                href="#"
                type="button"
              >
                View Live Demo
              </a>
              <a
                className="btn btn bg-transparent text-myblue font-semibold py-2 px-6 rounded  text-center border-2 border-myblue transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer "
                href="#"
                type="button"
              >
              Github
              </a>
            </div>
          </div>
        </div>
        )
       })}
      </div>
    </div>
  );
};

export default Portfolio;
