import { FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import Button from "../ui/button";

const Buttons = () => {
  const loggedIn = true;

  if (!loggedIn) {
    return (
      <Button variant="primary" size="sm">
        Login
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4 h-full">
      <IoCartOutline className="cursor-pointer size-6" />
      <FaUserCircle className="cursor-pointer h-full w-max" />
    </div>
  );
};

export default Buttons;
