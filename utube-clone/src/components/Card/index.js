import React from "react";
import { Link } from "react-router-dom";

export default function Card({ video }) {
  return (
    <div className="w-64 h-60 flex gap-3 flex-col">
      <div className="">
        <Link to="">
          <img src={video.thumbnail} className="h-44 w-72" alt="thumbnail" />
        </Link>
      </div>
      <div className="relative"></div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={video.thumbnail}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clamp-2">
              {video.title}
            </a>
          </h3>
          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-white">
                {video.sharedBy.firstName} {video.sharedBy.lastName}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {video.viewCount} views
              </span>
              <span>{video.likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}