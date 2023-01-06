import React from "react";
import devimg from './../../assets/developervector.png'
import dots from './../../assets/dots.png'

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto   h-[90vh] flex items-center justify-between">
      <div className="hero-left w-1/2 relative">
        <img src={dots} alt="" className="dots absolute top-[48%] left-[60%]" /> 
        <h6 className="text-2xl text-mygray font-bold tracking-wide ml-2">Hi there, I am Beejay</h6>
        <h1 className="text-7xl text-myblue mb-4 font-extrabold">A Front-end Developer</h1>
        <p className="text-mygray font-normal text-[1rem] w-[75%]">
          Welcome to my space on the web. <span className="font-bold">Frontend development <br></br>is my forte;</span> I provide innovative solutions and build interactive applications, while supporting Chelsea FC
        </p>
        <div className="hero_btns mt-4 flex gap-8 ">
            <button className="btn font-semibold bg-[#FAA632] text-white py-2 px-8 rounded border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer" type="button">Hire me</button>
            <a className="btn btn bg-mygray text-white font-semibold py-2 px-8 rounded border text-center  transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer " href="#" type="button">Download Resume</a>
        </div>
      </div>
      <div className="hero-right w-1/2">
        <img src={devimg} alt="" className="hero_vector" />
      </div>
    </div>
  );
};

export default Hero;
