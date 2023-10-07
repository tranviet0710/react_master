import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const id = localStorage.getItem("userId");
    const getUserData = async () => {
      await axios
        .get("https://dummyjson.com/users/" + id)
        .then((res) => {
          if (res) {
            setUser(res.data);
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    };
    getUserData();
  }, []);
  return (
    user !== undefined && (
      <div className="px-5 py-5">
        <div className="w-[120px] h-[120px] border rounded-[500px]">
          <img src={user?.image} alt="" srcset="" />
        </div>
        <div className="mt-16">
          <div className="flex">
            <div>
              <p className="text-[#1C1C1C] text-[28px] font-semibold leading-normal">
                First Name:
              </p>
              <input
                type="text"
                className="w-[405px] h-[70px] rounded-[5px] bg-[#fff] border-2 border-[#858585]"
                placeholder="Mehrab"
                value={user?.firstName}
              />
            </div>
            <div className="ml-[62px]">
              <p className="text-[#1C1C1C] text-[28px] font-semibold leading-normal">
                Last Name:
              </p>
              <input
                type="text"
                className="w-[405px] h-[70px] border-2 border-[#858585] rounded-[5px] bg-[#fff]"
                placeholder="     Bozorgi"
                value={user?.lastName}
              />
            </div>
          </div>
          <div>
            <p className="text-[#1C1C1C] text-[28px] font-semibold leading-normal mt-4">
              Email:
            </p>
            <input
              type="text"
              className="w-[873px] h-[70px] border-2 border-[#858585] rounded-[5px] bg-[#fff]"
              placeholder="     Bozorgi"
              value={user?.email}
            />
          </div>
          <div>
            <p className="text-[#1C1C1C] text-[28px] font-semibold leading-normal mt-4">
              Address:
            </p>
            <input
              type="text"
              className="w-[873px] h-[70px] border-2 border-[#858585] rounded-[5px] bg-[#fff]"
              placeholder="     hhhh"
              value={user?.address?.address}
            />
          </div>
          <div>
            <p className="text-[#1C1C1C] text-[28px] font-semibold leading-normal">
              Contact Number:
            </p>
            <input
              type="text"
              className="w-[873px] h-[70px] border-2 border-[#858585] rounded-[5px] bg-[#fff]"
              placeholder="     58077.79"
              value={user?.phone}
            />
          </div>
          <div className="flex">
            <div>
              <p className="text-[#1C1C1C] text-[28px] font-semibold leading-normal">
                City:
              </p>
              <input
                type="text"
                className="w-[405px] h-[70px] border-2 border-[#858585] rounded-[5px] bg-[#fff]"
                placeholder="     Mehrab"
                value={user?.address?.city}
              />
            </div>
            <div className="ml-[62px]">
              <p className="text-[#1C1C1C] text-[28px] font-semibold leading-normal">
                State:
              </p>
              <input
                type="text"
                className="w-[405px] h-[70px] border-2 border-[#858585] rounded-[5px] bg-[#fff]"
                placeholder="     Bozorgi"
                value={user?.address?.state}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
