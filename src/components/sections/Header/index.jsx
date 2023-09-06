import React from "react";
import headerImage from "../../../Images/hearder.jpg";

const Header = () => {
  return (
    <div className="flex items-center justify-center mt-32">
      <img src={headerImage} className="text-center" />
    </div>
  );
};

export default Header;
