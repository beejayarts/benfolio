import React from "react";
import { HiCode, HiAnnotation } from "react-icons/hi";
import { SiMaterialdesignicons } from "react-icons/si";

const Services = () => {
  return (
    <div
      id="services"
      className=" mt-16 w-screen  services_section  bg-[#F4F4F4] min-h-[70vh] p-20"
    >
      <div className="max-w-7xl mx-auto h-[fit-content] text-center">
        <div className="services_header w-2/5 mx-auto mb-10">
          <h5 className="text-[#929292] text-center tracking-widest mb-4">
            WHAT I DO
          </h5>
          <h4 className="text-4xl text-myblue font-extrabold mb-4 text-center">
            My Services
          </h4>
          <p className="text-[#595959] mb-4 text-center text-base">
            Here are some of the services I offer and my areas of expertise
          </p>
        </div>
        <div className="service_cards flex gap-4 mx-auto justify-center">
          <div className="card  w-[25%] min-h-[250px] text-center  rounded-xl  bg-myblue  text-white   p-9 border">
            <div className="card_header">
              <HiCode className="text-2xl text-center mx-auto" />
              <h4 className="text-2xl font-bold mb-4 ">Web Development</h4>
            </div>
            <p className="text-base">
              I have the expertise and experience to bring your website to life
              through code and other web technologies, Your website will be up
              and running in no time{" "}
            </p>
          </div>
          <div className="card  w-[25%] min-h-[250px] text-center  rounded-xl  bg-yellow-500  text-white   p-9 border">
            <div className="card_header">
              <SiMaterialdesignicons className="text-2xl text-center mx-auto" />
              <h4 className="text-2xl font-bold mb-4 ">Web Design</h4>
            </div>
            <p className="text-base">
              I have the expertise and experience to bring your website to life
              through code and other web technologies, Your website will be up
              and running in no time{" "}
            </p>
          </div>
          <div className="card  w-[25%] min-h-[250px] text-center  rounded-xl  bg-orange-600  text-white   p-9 border">
            <div className="card_header">
              <HiAnnotation className="text-2xl text-center mx-auto" />
              <h4 className="text-2xl font-bold mb-4 ">Consultancy</h4>
            </div>
            <p className="text-base">
              I have the expertise and experience to bring your website to life
              through code and other web technologies, Your website will be up
              and running in no time{" "}
            </p>
          </div>
        </div>
        {/* <button className="btn mt-7 font-semibold bg-myblue mx-auto text-white py-2 px-8 rounded border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer" type="button">Hire me</button> */}
      </div>
    </div>
  );
};

export default Services;
