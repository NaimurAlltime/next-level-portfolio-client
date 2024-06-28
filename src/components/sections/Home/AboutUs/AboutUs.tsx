import { Button } from "antd";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="md:flex items-center justify-center w-full md:h-[60vh] h-full mb-12">
      <div className="w-full md:w-1/2 bg-[#ee945c] md:h-[60vh] h-full ">
        <div className="md:mx-20 mx-7 mt-8 md:mt-24 py-4 md:py-0">
          <h2 style={{ color: "#43121d" }} className="text-3xl font-semibold">
            Car Rental Marrakech Airport - SHRCars
          </h2>
          <p className="mt-3 mb-4">
            Looking for a ride in Marrakech or a car rental marrakech airport?
            SHRCars got your back! We&apos;ve got cars for all, be it business or
            pleasure. Take your pick from our modern fleet – economy, compact,
            sedan, SUV, minivan, luxury. Affordable rates, top-notch service,
            and easy online booking await you. Pick up at the airport, drop off
            anywhere in Morocco. Smooth driving all the way!
          </p>
          <div className="mt-4 mb-3">
            <button className="bg-[#3a88cb] hover:bg-blue-900 text-white rounded-md px-3 py-1.5">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          className="md:h-[60vh] h-full  w-full"
          src="https://i.ibb.co/jv13LMN/istockphoto-1208725993-612x612.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
