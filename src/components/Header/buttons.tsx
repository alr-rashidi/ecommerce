import { FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import Button from "../ui/button";

const Buttons = () => {
  const loggedIn = false;

  if (!loggedIn) {
    return (
      <Button variant="primary" size="sm">
        Login
      </Button>
    );
  }

  return (
    <div className="flex gap-4">
      <IoCartOutline className="cursor-pointer size-6" />
      <FaUserCircle className="cursor-pointer h-full" />
    </div>
  );
};

export default Buttons;
