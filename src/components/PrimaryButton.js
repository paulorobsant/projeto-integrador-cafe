import React from "react";
import CX from "classnames";

const PrimaryButton = ({ onClick, label, ...rest }) => {
  return (
    <button
      disabled={rest.disabled || false}
      onClick={onClick}
      className={CX(
        "rounded bg-[#00BFA6] text-white justify-center px-10 py-2 font-bold hover:bg-[#00a791] ",
        rest.large && "w-full"
      )}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
