import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-2 w-1/4 items-center">
        <Image height={44} width={44} src={"/logo.png"} alt="logo" />
        <h1 className="text-2xl font-bold text-blue">Aqari360</h1>
      </div>
      <div className="items-center w-3/5 justify-between flex capitalize text-blue font-bold  ">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>All properties</Link>
        <Link href={"#"}>brokers</Link>
        <Link href={"#"}>contact us</Link>
        <Link
          href={"#"}
          className="rounded-basic bg-green hover:bg-darkgreen text-white px-4 py-2 cursor-pointer "
        >
          Submit property
        </Link>
        <div className="flex items-center gap-2">
          <Image src={"/lang.png"} height={24} width={24} alt="lang" />
          <h2 className="text-lg">عربي</h2>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={"/user.png"} height={32} width={32} alt="user" />
          <Image src={"/arrow.png"} height={12} width={12} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
