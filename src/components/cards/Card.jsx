import React from "react";

function Card({ id, title, url, description }) {
  return (
    <div key={id} className="border flex flex-col p-8">
      <img src={url} alt={title} />
      <div className="text-[20px] mt-[20px] mb-[20px]">{title}</div>
      <div className="text-[15px] mb-[25px] text-[#6a6a6a]">{description}</div>
    </div>
  );
}

export default Card;
