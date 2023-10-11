import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ video }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full h-full flex gap-3  items-center mb-5 justify-center">
      <div className="w-4/5">
        {/* <Link to={`/watch/${video.vid}`}> */}
        <img
          src={video.thumbnail}
          className="h-[200px] w-[340px] rounded-lg"
          alt="thumbnail"
        />

        <div className="relative"></div>
        <div className="flex gap-2">
          <div>
            <h3>
              <p className="font-bold mt-2">{video.title}</p>
            </h3>
            <div className="text-sm text-gray-400">
              <div className="mt-2 mb-2">
                <a className="bg-[#ECEBEB] p-2 text-[12px] text-[#0E0E0E]">
                  DESCRIPTION
                </a>
              </div>
              <div className="mt-2 mb-2">
                <p
                  className={`text-justify text-[16px]  ${
                    toggle && "line-clamp-4"
                  }`}
                >
                  {video.description}
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
                <p className="ml-4">{video.sharedBy.createdAt}</p>
              </div>
              <div className="text-sm text-gray-400 flex items-center">
                <div className="mt-2 mb-2">
                  <a className="bg-[#ECEBEB] p-2 text-[12px] text-[#0E0E0E]">
                    PUBLISHED BY
                  </a>
                </div>
                <p className="ml-4">{video.sharedBy.email}</p>
              </div>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}
