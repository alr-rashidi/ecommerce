import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

type ItemHeaderPropsType = {
  title: string;
  children: React.ReactNode;
};
const Accordion = ({ title, children }: ItemHeaderPropsType) => {
  const [opened, setOpened] = useState<boolean>(true);

  return (
    <div className="relative overflow-hidden">
      <button
        className="w-full flex items-center justify-between cursor-pointer bg-white border-b border-neutral-300 py-3 font-medium"
        onClick={() => setOpened(prev => !prev)}
        aria-expanded={opened}
      >
        <p className="text-xl">{title}</p>
        <FaAngleDown
          className={`transform transition-transform duration-300 ${opened ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`transition-max-h duration-300 ${opened ? "max-h-screen" : "max-h-0"} overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
