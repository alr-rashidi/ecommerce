import React from "react";

type PropsType = {
  message?: string | null;
};
const ErrorCard = ({ message }: PropsType) => {
  return (
    <div className="p-5 m-3 bg-red-100 text-red-700 rounded-md border border-red-300">
      <h2>Somthing went wrong!</h2>
      <p>{message ?? "Unknown error"}</p>
    </div>
  );
};

export default ErrorCard;
