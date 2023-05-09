import React, { useState, useEffect } from "react";
import * as S from "./ShopFindStyled.js";

const ShopFind = ({ findFranchisee }) => {
  //현재 페이지를 나타내는 currentPage 상태
  const [currentPage, setCurrentPage] = useState(1);
  //한 페이지에 보여지는 아이템 수를 결정하는 itemsPerPage 상태
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [storeList, setStoreList] = useState({ count: 0, result: [] });
  const [pageRange, setPageRange] = useState(5);

  //아이템 수와 현재 페이지 정보를 이용해 보여질 페이지의 데이터를 계산하는 함수
  const getPagination = (totalItems, currentPage, itemsPerPage) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, Math.max(currentPage + 2, pageRange));
    let pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return {
      currentPage,
      totalPages,
      pages,
    };
  };

  const handleClick = (event, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetch("./data/storeData.json")
      .then((res) => res.json())
      .then((data) => setStoreList(data[0]));
  }, []);

  const pagination = getPagination(
    storeList.result && storeList.result.length,
    currentPage,
    itemsPerPage
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = storeList.result.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  //통신할 때
  // useEffect(() => {
  //   fetch(
  //     `${API.find}cate=39%2C40%2C41%2C42&keyword=%EB%8B%A4%EB%B9%84%EC%88%98`
  //   )
  //     .then(res => res.json())
  //     .then(data => setStoreList(data));
  // });

  return (
    <S.StudyRoomWrap ref={findFranchisee}>
      <S.StudyRoomExplain>새다론 공부방 전국 가맹점 안내.</S.StudyRoomExplain>

      <S.StudyRoomDetail>
        <S.RoomMapWrap>
          <S.StudyRoomMap src="/images/OhExplain/ShopFindMap.png" />
        </S.RoomMapWrap>
        <S.FranchiseList>
          <S.FranchiseContent>
            <S.TheNumWrap>
              <S.TheNumFranchise>
                검색 결과 {storeList.count}개
              </S.TheNumFranchise>
            </S.TheNumWrap>
            <S.FranchiseListWrap>
              {currentItems.map(
                ({ id, type, servicenames, name, addr, phone }) => {
                  return (
                    <S.FranchiseBox key={id}>
                      <S.FranchiseImgWrap>
                        <S.FranchiseImg src="/images/OhExplain/shopexplain.png" />
                        <S.StudyRoomtype>{type}</S.StudyRoomtype>
                        <S.StudyRoomService>{servicenames}</S.StudyRoomService>
                      </S.FranchiseImgWrap>
                      <S.FranchiseTitle>{name}</S.FranchiseTitle>
                      <S.FranchiseIn>{addr}</S.FranchiseIn>
                      <S.FranchiseeTelWrap>
                        <S.TelIcon src="/images/Oh/telephone.png" />
                        <S.FranchiseeTel>&nbsp;{phone}</S.FranchiseeTel>
                      </S.FranchiseeTelWrap>
                    </S.FranchiseBox>
                  );
                }
              )}
            </S.FranchiseListWrap>
          </S.FranchiseContent>
          <S.PaginationWrap>
            <ul>
              <li>
                <button onClick={(event) => handleClick(event, 1)}>#</button>
              </li>
              {pagination.pages.map((page) => {
                const minPage = Math.max(
                  pagination.currentPage - Math.floor(pageRange / 2),
                  1
                );
                const maxPage = Math.min(
                  minPage + pageRange - 1,
                  pagination.totalPages
                );
                if (page >= minPage && page <= maxPage) {
                  return (
                    <li key={page}>
                      <button onClick={(event) => handleClick(event, page)}>
                        {page}
                      </button>
                    </li>
                  );
                }
                return null;
              })}
              <li>
                <button
                  onClick={(event) => handleClick(event, pagination.totalPages)}
                >
                  #
                </button>
              </li>
            </ul>
          </S.PaginationWrap>
        </S.FranchiseList>
      </S.StudyRoomDetail>
    </S.StudyRoomWrap>
  );
};

export default ShopFind;
