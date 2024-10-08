import React, { useRef } from "react";
import { Button } from "./ui/button";
import Links from "./Links";

const Header = () => {
  return (
    <div className="flex items-center gap-3 p-2 shadow-sm rounded-full w-[900px] mx-auto justify-between border-[1px] relative">
      <div className="flex">
        <h1 className="text-xl font-bold px-3">Heritage</h1>
      </div>
      <div>
        <div className="space-x-9">
          <Links />
        </div>
      </div>

      <Button className=" rounded-full hover:bg-white hover:text-black hover:border-black hover:border-[3px]">
        Hire Me
      </Button>
    </div>
  );
};

export default Header;
