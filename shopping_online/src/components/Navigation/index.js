import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex mt-10">
        <img src="image/logo.png" alt="" srcset="" className="w-10 h-10" />
        <p className="text-black font-podkova text-28 font-normal mt-3 ml-2">
          Shopping Online
        </p>
      </div>
      <div>
        <div className="mt-10 flex ml-2">
          <img src="image/Home.png" alt="" srcset="" />
          <p className="text-black font-podkova text-28 font-normal ml-4 mt-1">
            <Link to={"/home"}>Home</Link>
          </p>
        </div>
        {!isLoggedIn ? (
          <button
            className="w-[260px] h-[44px] flex-shrink-0 rounded-lg bg-[#08C03C] mt-10"
            onClick={(event) => {
              event.preventDefault();
              props.updateModal();
            }}
          >
            <p className="text-white font-podkova text-28 font-semibold">
              Login
            </p>
          </button>
        ) : (
          <div>
            <div className="mt-10 flex ml-2">
              <img src="image/User_alt.png" alt="" srcset="" />
              <p className="text-black font-podkova text-28 font-normal ml-4 mt-1">
                <Link to={"/profile"}>Profile</Link>
              </p>
            </div>
            <button
              className="bg-red-400 py-2 px-7 rounded-3xl mt-10"
              onClick={(event) => {
                event.preventDefault();
                logout();
              }}
            >
              Log out
            </button>
          </div>
        )}
      </div>
      <div>
        <div className="mt-96 w-60 h-60 bg-green-100"></div>
      </div>
    </div>
  );
};
