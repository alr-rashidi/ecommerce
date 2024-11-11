import React from "react";
import './global.css'

type RootLayoutType = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
