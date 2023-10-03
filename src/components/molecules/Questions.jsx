import React, { useState } from "react";
import Logo from "../atoms/Logo";
import Status from "../atoms/Status";
import Proposition from "../atoms/Proposition";
import Button from "../atoms/Button";

function Questions() {
  const [isChoose, setIsChoose] = useState(false);
  const chooseHandler = () => {
    setIsChoose(!isChoose);
  };
  return (
    <div className="px-5 py-4">
      <Logo color="#f1f1f1" />
      <div className="flex items-center gap-5 w-full py-8">
        <Status />
        <Status />
        <Status />
        <Status />
        <Status />
        <Status />
      </div>
      <div>
        <h1 className="text-xl text-gray-700 text-center">
          Qui est le premier président du Cameroun ?
        </h1>
        <div className=" space-y-5 py-10">
          <Proposition isChoose={isChoose} chooseHandler={chooseHandler} />
          <Proposition isChoose={isChoose} chooseHandler={chooseHandler} />
          <Proposition isChoose={isChoose} chooseHandler={chooseHandler} />
        </div>
        <Button>
          <p className="text-lg text-white text-center">Suivant</p>
        </Button>
      </div>
    </div>
  );
}

export default Questions;
