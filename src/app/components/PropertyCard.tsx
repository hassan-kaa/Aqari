import Image from "next/image";
import React from "react";

function PropertyCard() {
  return (
    <div className="flex items-start p-4 gap-4 justify-between w-[770px] h-[270] rounded-basic bg-white ">
      <Image
        src={"/property.jpg"}
        alt={"image"}
        height={245}
        width={340}
        className="rounded-basic"
      />
      <div className="flex flex-col gap-4 justify-between h-full text-sm">
        <h1 className="text-xl font-bold text-blue">C central Hotel</h1>
        <div className="flex gap-2 text-lightblue items-center">
          <Image alt="location" src={"/arrow.png"} height={16} width={16} />
          <p className="text-sm">United Arab Emirates, Dubai Beach</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quia
          tempore architecto debitis vero, id fugiat dolore obcaecati,
          blanditiis nesciunt sed nulla ipsam. Eos eaque quia sint quasi
          accusamus voluptatum.
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
