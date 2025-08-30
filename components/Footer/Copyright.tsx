import React from "react";

export const Copyright = () => {
  return (
    <div className="text-center lg:text-left">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Codanity. All Rights Reserved.
      </p>
    </div>
  );
};
