import React from "react";

export default function Box() {
  return (
    <div style={{ position: "absolute", bottom: 0, right: 0 }}>
      <div className="w-[100px] h-[100px] top-0 left-0 bg-white rounded-[100px] shadow-[0px_10px_20px_10px_#00000040]">
        <div className="relative  top-[44px] left-[47px]">
          <div className="relative ">
            <img alt="Image" src="images/Cart.png" />
            <div className="absolute w-[40px] h-[40px] top-0 left-[67px] bg-[#fd5959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
            <div className="absolute top-[7px] left-[81px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Podkova-Bold',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
