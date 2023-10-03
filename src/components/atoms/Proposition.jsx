import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Proposition = ({ isChoose, chooseHandler }) => {
  return (
    <div className="flex items-center gap-5 border border-gray-300 p-3">
      <div
        onClick={chooseHandler}
        className={`flex flex-col items-center justify-center w-8 h-8 rounded-full border  border-gray-300 ${
          isChoose && " text-white bg-green-600"
        }`}
      >
        {isChoose && <AiOutlineCheck size={20} />}
      </div>
      <p className="text-md text-gray-500">Paul Biya </p>
    </div>
  );
};

export default Proposition;
