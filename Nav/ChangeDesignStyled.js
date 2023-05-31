import styled from "styled-components";

export const Nav = styled.div`
  position: relative;
`;

export const NavBox = styled.div`
  position: fixed;
  padding: 0 2% 0 5%;
  box-sizing: border-box;
  width: 102%;
  z-index: 999;
`;

export const NavScroll = styled(NavBox)`
  background-color: #ffffff;
  opacity: 0.9;
`;

export const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  @media only screen and (max-width: 530px) {
    height: 70px;
  }
  @media only screen and (max-width: 310px) {
    height: 50px;
  }
`;

export const NavLogo = styled.img`
  height: 37px;
  @media only screen and (max-width: 1280px) {
    height: 34px;
  }
  @media only screen and (max-width: 530px) {
    height: 30px;
  }
  @media only screen and (max-width: 310px) {
    height: 25px;
  }
`;

export const NavContainer = styled.div`
  li {
    display: inline-block;
    padding: 0 20px;
    font-size: 17px;
  }
  @media only screen and (max-width: 1150px) {
    display: none;
    position: absolute;
  }
`;

export const NavLi = styled.li`
  color: #ffffff;
  margin-bottom: 13px;
  cursor: pointer;
`;

export const NavLiWhite = styled(NavLi)`
  color: black;
`;
export const NavNum = styled.img`
  width: 19%;
  padding: 2% 0 0 3%;
`;

export const Menubar = styled.img`
  display: none;
  @media only screen and (max-width: 1150px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    margin-right: 3%;
    cursor: pointer;
  }
  @media only screen and (max-width: 530px) {
    height: 30px;
  }
  @media only screen and (max-width: 310px) {
    height: 25px;
  }
`;

export const NavToggle = styled.div`
  @media only screen and (max-width: 1150px) {
    position: absolute;
    right: 0;
    border: 1px solid transparent;
    width: 100%;
    justify-content: center;
    display: flex;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }
  @media only screen and (max-width: 850px) {
    padding: 1.5% 0;
  }
  @media only screen and (max-width: 480px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const NavToggleWrap = styled.div`
  li {
    list-style: none;
    line-height: 50px;
    font-size: 20px;
    font-family: fontBold;
    color: #e5e5e3;
    cursor: pointer;
    :hover {
      color: #000000;
    }
  }
  @media only screen and (max-width: 850px) {
    li {
      line-height: 42px;
      font-size: 17px;
    }
  }
  @media only screen and (max-width: 480px) {
    li {
      line-height: 38px;
      font-size: 15px;
    }
  }
`;
