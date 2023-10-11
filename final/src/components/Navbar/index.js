import React, { useContext, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

export default function NavBar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  return (
    <div
      className="flex justify-between items-center px-14 h-14 opacity-95 top-0 z-50 w-full bg-[#F3F3F3] py-10"
      style={{
        boxShadow: "0px 1px 20px 4px rgba(0, 0, 0, 0.19)",
      }}
    >
      <div className="flex gap-8 items-center text-2xl">
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600 mr-5" />
            <span
              className="text-xl font-bold text-[#FF1717] "
              style={{
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              YouTube Videos Sharing
            </span>
          </div>
        </Link>
      </div>

      <div className="flex gap-5 items-center text-xl">
        <div>
          {isLoggedIn ? (
            <Link
              to="/share"
              className="w-[100px] h-[40px] bg-[#7648F8] rounded-lg px-6 py-2 text-white"
            >
              SHARE
            </Link>
          ) : (
            <Link
              to="/login"
              className="w-[100px] h-[40px] bg-[#7648F8] rounded-lg px-6 py-2 text-white"
            >
              LOGIN
            </Link>
          )}
        </div>
        <div className="text-end">
          {isLoggedIn ? (
            <>
              <p
                onClick={() => setShowLogout(!showLogout)}
                className="text-sm flex flex-col"
              >
                Welcome {localStorage.getItem("email")}
                {showLogout ? (
                  <button
                    className="bg-white z-10  text-black text-[10px] right-14 w-16"
                    style={{
                      boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.25)",
                    }}
                    onClick={() => logout()}
                  >
                    Log out
                  </button>
                ) : (
                  ""
                )}
              </p>
            </>
          ) : (
            <Link to="/register" className="text-[#7648F8] ">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
