import React from "react";

const Heading1 = ({ title, subtitle, center, className }) => {
  return (
    <div className={`${center ? "text-center" : "text-start"} ${className}`}>
      <div className="text-2xl font-bold">{title}</div>
      {subtitle && (
        <div className={`font-medium mt-2 text-neutral-500 `}>{subtitle}</div>
      )}
    </div>
  );
};

export default Heading1;
