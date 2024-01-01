import React from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";
import TravelImage from "../assets/travelling-image.jpg";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <div className="lg:grid lg:grid-rows-[8%,70%,1fr] w-full h-screen">
        <div className="h-14 lg:h-full">
          <Navbar />
        </div>
        <div className=" lg:grid mt-10 lg:mt-0 lg:grid-cols-2">
          <div className="flex justify-center items-center">
           <div className="mx-4">
           <h1 className="capitalize text-[2rem] font-bold">MOHAMMED SIFAN KP</h1>
            <p className="text-xl font-semibold">Python Django / React Developer</p>
            <p className="mt-2">
              I am writing to express my strong interest in the Python-Django
              Developer role. As a passionate and self-taught Full Stack
              Developer with expertise in Python, Django, React, PostgreSQL, DSA
              as well as web development, I am confident in my ability to make
              valuable contributions to your team.Additionally, I possess skills
              in programming, templating, CSS and testing and I am proficient in
              Git.
            </p>
           </div>
          </div>
          <div className="card flex justify-center h-96 lg:h-full  items-center m-1 rounded-lg image-1">
            <div className="text-center">
              <h1 className="text-[3rem] text-white mb-5 font-extrabold">
                Explore More...
              </h1>
              <button className="border py-2 px-6 text-white font-bold text-md bg-orange-600 rounded-3xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 border shadow-md">
            <Footer/>
        </div>
      </div>
    </>
  );
}

export default Home;
