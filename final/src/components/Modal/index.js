import React, { useContext, useEffect, useState } from "react";

import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
export default function Modal(props) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [star, setStar] = useState(props.star);
  const [submitBtn, setSubmitBtn] = useState(false);
  useEffect(() => {
    console.log(props.star);
    setId(props.id);
  }, []);
  const ratingChanged = (newRating) => {
    setStar(newRating);
    if (submitBtn === false) {
      setSubmitBtn(true);
    }
  };
  // useState(() => {
  //   axios
  //     .get("http://localhost:5001/api/rating", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         data: "application/json",
  //       },
  //       params: {
  //         videoId: props.id,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.data === null) {
  //         setStar(1);
  //       } else {
  //         setStar(parseInt(res.data.data.star));
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const rate = () => {
    console.log("star", star);
    axios
      .post(
        "http://localhost:5001/api/rating",
        {
          videoId: id,
          star: star,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            data: "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Rating ", id);
        navigate("/home");
        // console.log("rating sucessfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="w-[686px] h-[259px] bg-[#FFF] p-10 shadow-2xl">
        <div className="flex justify-end">
          <p className="font-bold text-2xl">
            <button
              onClick={(e) => {
                e.preventDefault();
                props.closeModal();
              }}
            >
              X
            </button>
          </p>
        </div>
        <div className="flex justify-center">
          <div className="font-bold"> How do you feel about this video?</div>
        </div>
        <div>
          <hr className="my-3"></hr>
        </div>
        <div className="flex justify-center">
          <ReactStars
            value={star}
            classNames={"text-xl justify-center"}
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div className="flex justify-center mt-6">
          {submitBtn ? (
            <button
              className="bg-[#7648F8] text-white p-2 rounded-lg"
              onClick={rate}
            >
              Submit
            </button>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
}
