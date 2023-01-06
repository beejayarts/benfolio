import React from "react";
import avatar from "./../../assets/mypic.png";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto about_section  min-h-[80vh] flex items-center justify-between"
    >
      <div className="about_section_left w-1/2">
        <img src={avatar} alt="" className="dev_img w-[65%]" />
      </div>
      <div className="about_section_right w-1/2">
        <div className="asr_content w-[80%]">
          <div className="asr_content_details mb-8">
            <h5 className="text-[#929292] tracking-widest mb-4">A BRIEF INTRO</h5>
            <h4 className="text-4xl text-myblue font-extrabold mb-4">A Creative Developer</h4>
            <p className="text-[#595959] mb-4 text-base">
              I am a design-oriented Frontend developer adept at converting
              high-fidelity design prototypes into working, performant and
              accessible applications. I am positive, enthusiastic and possess a
              knack for learning and quickly adapting to new environments and
              situations.
            </p>
            <p className="text-[#595959] mb-4 text-base">
              With a great background in visual design and branding, I Started
              learning how to build websites in 2020, and since then I have
              worked with different businesses to build professional websites
              for them.
            </p>
          </div>
          <div className="professsional_skills">
            <h3 className="mb-4 text-[#595959] text-3xl font-bold">Professional Skills</h3>
            <div className="skills_container">
              <div className="top_skills flex gap-4 mb-4">
                <span className="text-lg font-semibold bg-blue-700 px-4 py-1 text-white rounded-md ">ReactJs</span>
                <span className="text-lg font-semibold bg-blue-400 px-4 py-1 text-white rounded-md ">TailwindCss</span>
                <span className="text-lg font-semibold bg-yellow-500 px-4 py-1 text-white rounded-md ">Javascript</span>
              </div>
              <div className="middle_skills flex gap-4 mb-4">
                <span className="text-lg font-semibold bg-purple-700 px-4 py-1 text-white rounded-md ">Redux</span>
                <span className="text-lg font-semibold bg-green-500 px-4 py-1 text-white rounded-md ">Bootstrap</span>
                <span className="text-lg font-semibold bg-gray-600 px-4 py-1 text-white rounded-md ">Git</span>
              </div>
              <div className="bottom_skills flex gap-4">
                <span className="text-lg font-semibold bg-pink-400 px-4 py-1 text-white rounded-md ">Wordpress</span>
                <span className="text-lg font-semibold bg-orange-500 px-4 py-1 text-white rounded-md ">Figma</span>
                <span className="text-lg font-semibold bg-gray-300 px-4 py-1 text-gray-600 rounded-md ">Team work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
