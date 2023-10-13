"use client";
import React, { useState } from "react";

function Switcher() {
  const [selected, setSelected] = useState("Sale");
  const options = ["Sale", "Rent", "Daily Rent", "Auction"];
  return (
    <div className="w-max flex items-center gap-0 text-lg  text-green bg-white rounded-basic font-bold border-2 border-form_gray">
      {options.map((option) =>
        selected == option ? (
          <div
            className={`bg-green text-center cursor-pointer text-white min-w-24 px-6 py-2  ${
              option == "Auction"
                ? "rounded-l-none rounded-r-basic"
                : option == "Sale"
                ? "rounded-r-none rounded-l-basic"
                : "rounded-none"
            } `}
          >
            {" "}
            {option}{" "}
          </div>
        ) : (
          <div
            onClick={() => {
              setSelected(option);
            }}
            className={`min-w-24 text-center px-6 py-2  cursor-pointer   `}
          >
            {option}
          </div>
        )
      )}
    </div>
  );
}

export default Switcher;
