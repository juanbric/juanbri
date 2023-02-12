import React from "react";
import Spacer from "./Spacer";

const Header = ({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <Spacer size={40} />
      <p className="title mb-2">{category}</p>
      <h2 className="huge-title mb-2">{title}</h2>
      <h2 className="copy-big">{description}</h2>
      <Spacer size={40} />
    </div>
  );
};

export default Header;
