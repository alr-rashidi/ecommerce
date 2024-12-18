import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return <div>{children}</div>;
};

export default layout;
