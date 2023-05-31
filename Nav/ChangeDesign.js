import React, { useState, useEffect, useRef } from "react";
import * as S from "./NavStyled";
import { Width } from "../../styles/common";

const Nav = ({
  isShowMenu,
  setIsShowMenu,
  onMoveBrand,
  onMoveprogram,
  onMovefranchisee,
  onMovefindFranchisee,
  onMovebusiness,
}) => {
  // 마우스 스크롤시 Nav 색상변경
  const [scrollPosition, setScrollPosition] = useState(0);
  const navRef = useRef(null);
  const navToggleRef = useRef(null);
  // 외부 클릭시 토글 사라짐
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  //마우스 스크롤시 토글 사라짐
  useEffect(() => {
    const handleScroll = () => {
      const navToggle = navToggleRef.current;

      if (navToggle) {
        const navToggleRect = navToggle.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > navToggleRect.bottom) {
          navToggle.style.display = "none";
        } else {
          navToggle.style.display = "block";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={navRef}>
      <S.Nav>
        {scrollPosition < 100 ? (
          <S.NavBox>
            <S.NavWrap>
              <S.NavLogo src="/images/Nav/NavLogo.png" alt="다비수 로고" />
              <S.NavContainer>
                <S.NavLi onClick={onMoveBrand}>브랜드 소개</S.NavLi>
                <S.NavLi onClick={onMoveprogram}>학습 프로그램</S.NavLi>
                <S.NavLi onClick={onMovefranchisee}>가맹 안내</S.NavLi>
                <S.NavLi onClick={onMovefindFranchisee}>가맹점 찾기</S.NavLi>
                <S.NavLi onClick={onMovebusiness}>사업설명회</S.NavLi>
                <S.NavNum src="/images/Nav/NavNum.png" />
              </S.NavContainer>
              <S.Menubar
                src="/images/Nav/NavMenu.png"
                alt="메뉴"
                onClick={() => setIsShowMenu(!isShowMenu)}
              />
            </S.NavWrap>
            {isShowMenu && (
              <S.NavToggle ref={navToggleRef}>
                <S.NavToggleWrap>
                  <li onClick={onMoveBrand}>브랜드 소개</li>
                  <li onClick={onMoveprogram}>학습 프로그램</li>
                  <li onClick={onMovefranchisee}>가맹 안내</li>
                  <li onClick={onMovefindFranchisee}>가맹점 찾기</li>
                  <li onClick={onMovebusiness}>사업설명회</li>
                </S.NavToggleWrap>
              </S.NavToggle>
            )}
          </S.NavBox>
        ) : (
          <S.NavScroll>
            <S.NavWrap>
              <S.NavLogo src="/images/Kim/PlusLogo.png" alt="다비수 로고" />
              <S.NavContainer>
                <S.NavLiWhite onClick={onMoveBrand}>브랜드 소개</S.NavLiWhite>
                <S.NavLiWhite onClick={onMoveprogram}>
                  학습 프로그램
                </S.NavLiWhite>
                <S.NavLiWhite onClick={onMovefranchisee}>
                  가맹 안내
                </S.NavLiWhite>
                <S.NavLiWhite onClick={onMovefindFranchisee}>
                  가맹점 찾기
                </S.NavLiWhite>
                <S.NavLiWhite onClick={onMovebusiness}>사업설명회</S.NavLiWhite>
                <S.NavNum src="/images/Nav/NavNum.png" />
              </S.NavContainer>
              <S.Menubar
                src="/images/Nav/MenuWhite.png"
                alt="메뉴"
                onClick={() => setIsShowMenu(!isShowMenu)}
              />
            </S.NavWrap>
            {isShowMenu && (
              <S.NavToggle ref={navToggleRef}>
                <S.NavToggleWrap>
                  <li onClick={onMoveBrand}>브랜드 소개</li>
                  <li onClick={onMoveprogram}>학습 프로그램</li>
                  <li onClick={onMovefranchisee}>가맹 안내</li>
                  <li onClick={onMovefindFranchisee}>가맹점 찾기</li>
                  <li onClick={onMovebusiness}>사업설명회</li>
                </S.NavToggleWrap>
              </S.NavToggle>
            )}
          </S.NavScroll>
        )}
      </S.Nav>
    </div>
  );
};

export default Nav;
