import React from "react";

const Category = ({ logo, name, active = false }) => {
  const buttonClass = `flex items-center gap-2 border py-3 justify-center rounded-[100px] w-[217px] md:min-w-fit min-w-[217px] hover:border-[#389ED9] hover:text-[#389ED9] ${
    active
      ? "border-[#389ED9] text-[#389ED9]"
      : "border-[#636363] text-[#636363]"
  }`;

  return (
    <button className={buttonClass}>
      {logo}
      <span>{name}</span>
    </button>
  );
};

export default Category;
