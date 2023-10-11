import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function WatchCard({ data }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex gap-3 mt-5 text-black text-sm">
      <div className="relative min-w-fit">
        <img
          className="h-[300px] w-[491px] object-fit rounded-lg"
          src={data.thumbnail}
          alt="thumbnail"
        />
      </div>
      <div className="flex gap-1 flex-col justify-between">
        <h4 className="text-sm">
          <a href="#" className="line-clamp-4 font-bold">
            {data.title}
          </a>
        </h4>
        <div className="mt-2 mb-2">
          <a className="bg-[#ECEBEB] p-2 text-[12px] text-[#0E0E0E]">
            DESCRIPTION
          </a>
        </div>
        <div className="mt-2 mb-2">
          <p
            className={`text-justify text-[16px]  ${toggle && "line-clamp-4"}`}
          >
            {data.description}
          </p>
          <span
            className="ml-1 underline font-bold cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "more" : "hide"}
          </span>
        </div>
        <div className="text-sm text-gray-400 flex items-center">
          <div className="mt-2 mb-2">
            <a className="bg-[#ECEBEB] p-2 text-[12px] text-[#0E0E0E]">
              PUBLISHED AT
            </a>
          </div>
          <p className="ml-4">{data.sharedBy.createdAt}</p>
        </div>
        <div className="text-sm text-gray-400 flex items-center">
          <div className="mt-2 mb-2">
            <a className="bg-[#ECEBEB] p-2 text-[12px] text-[#0E0E0E]">
              PUBLISHED BY
            </a>
          </div>
          <p className="ml-4">{data.sharedBy.email}</p>
        </div>
      </div>
    </div>
  );
}
