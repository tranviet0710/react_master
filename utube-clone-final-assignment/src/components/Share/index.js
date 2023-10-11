import NavBar from "../Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";
const Share = () => {
  const navigate = useNavigate();
  const [url, setURL] = useState();
  const handleShareVideo = (event) => {
    event.preventDefault();
    console.log(localStorage.getItem("accessToken"));
    axios
      .post(
        "http://localhost:5001/api/videos",
        { url: url },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            data: "application/json",
          },
        }
      )
      .then((res) => {
        toast(res.message);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="max-h-screen h-full">
        <div>
          <NavBar />
        </div>
        <div className="w-full flex items-center justify-center mt-32">
          <div className="w-[665px] h-[355px] border border-[#7648F8] p-10">
            <div className="flex justify-center">
              <p className="font-bold text-[#0E0E0E] ">
                Share youtube video by URL
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <div className="w-4/5 flex items-center justify-between">
                <p className="font-bold">URL</p>
                <input
                  className="border border-1 w-[385px] h-[48px]"
                  value={url}
                  onChange={(e) => setURL(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="w-4/5">
                <button
                  className="w-full bg-[#7648F8] text-white py-2"
                  onClick={handleShareVideo}
                >
                  SHARE
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Share;
