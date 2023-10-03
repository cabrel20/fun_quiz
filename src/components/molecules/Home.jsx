import React from "react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import hero from "../../assets/images/hero.png";

const Home = ({ onClick }) => {
  return (
    <div className="bg-linear h-screen">
      <div className="px-5 py-4">
        <Logo color="text-gray-950" />
        <div className="py-16 space-y-5">
          <h1 className="text-2xl text-bold">Bienvenu sur Quizzi</h1>
          <p className="text-md text-gray-500">
            Testez vos connaissances au maximum, pour etre le master.
          </p>
        </div>
        <img className="pb-5" src={hero} alt="hero image" />
        <Button onClick={onClick}>
          <p className="text-center">Commencez</p>
        </Button>
      </div>
    </div>
  );
};

export default Home;
