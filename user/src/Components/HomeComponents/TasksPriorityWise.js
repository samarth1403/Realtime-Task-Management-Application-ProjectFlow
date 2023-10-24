import React from "react";
import { BiRefresh } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const TasksPriorityWise = ({ priorityWiseTasks }) => {
  return (
    <div className="shadow-md shadow-blue-500/50 border border-gray-300 rounded-md p-4 my-2 flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[400px]">
      <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] min-[320px]:mb-6 sm:mb-8">
        <p className="font-roboto text-lg font-medium">
          All Tasks - Priority Wise
        </p>
        <button>
          <BiRefresh size="25px" />
        </button>
      </div>
      <div className="flex flex-col flex-no-wrap">
        <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] shadow-md p-2 rounded-md">
          <div className="flex flex-col flex-no-wrap justify-center items-start my-4">
            <p className="font-roboto text-lg font-normal">Priority - P1</p>
            <p className="font-roboto text-md font-medium">
              {priorityWiseTasks.p1PriorityTasks}
            </p>
          </div>
          <Link to={"/all-tasks/priority/P1"}>
            <BsFillEyeFill size="20px" className="text-blue-500" />
          </Link>
        </div>
        <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] shadow-md p-2 rounded-md">
          <div className="flex flex-col flex-no-wrap justify-center items-start my-4">
            <p className="font-roboto text-lg font-normal">Priority - P2</p>
            <p className="font-roboto text-md font-medium">
              {priorityWiseTasks.p2PriorityTasks}
            </p>
          </div>
          <Link to="/all-tasks/priority/P2">
            <BsFillEyeFill size="20px" className="text-blue-500" />
          </Link>
        </div>
        <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] shadow-md p-2 rounded-md">
          <div className="flex flex-col flex-no-wrap justify-center items-start my-4">
            <p className="font-roboto text-lg font-normal">Priority - P3</p>
            <p className="font-roboto text-md font-medium">
              {priorityWiseTasks.p3PriorityTasks}
            </p>
          </div>
          <Link to={"/all-tasks/priority/P3"}>
            <BsFillEyeFill size="20px" className="text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};
