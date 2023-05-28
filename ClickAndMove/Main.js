import React, { useState } from "react";
import MainKim from "../Main/MainKim/MainKim";
import MainMun from "../Main/MainMun/MainMun";
import MainOh from "../Main/MainOh/MainOh";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const brand = React.useRef(null);
  const program = React.useRef(null);
  const franchisee = React.useRef(null);
  const findFranchisee = React.useRef(null);
  const business = React.useRef(null);

  const onMoveBrand = () => {
    brand.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onMoveprogram = () => {
    program.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onMovefranchisee = () => {
    franchisee.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onMovefindFranchisee = () => {
    findFranchisee.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onMovebusiness = () => {
    business.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav
        isShowMenu={isShowMenu}
        setIsShowMenu={setIsShowMenu}
        onMoveBrand={onMoveBrand}
        onMoveprogram={onMoveprogram}
        onMovefranchisee={onMovefranchisee}
        onMovefindFranchisee={onMovefindFranchisee}
        onMovebusiness={onMovebusiness}
      />
      <MainKim brand={brand} program={program} />
      <MainMun franchisee={franchisee} />
      <MainOh findFranchisee={findFranchisee} business={business} />
      <Footer />
    </div>
  );
};
export default Main;
