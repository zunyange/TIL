import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../../../config";

const PagenationPlain = ({ explain, setExplain }) => {
  const [currentExplainPage, setCurrentExplainPage] = useState(1);

  const startPage = (Math.ceil(currentExplainPage / 5) - 1) * 5 + 1;
  const endPage =
    startPage + 4 > explain.total_pages ? explain.total_pages : startPage + 4;
  const seperatePage = new Array(endPage - startPage + 1).fill(startPage);

  const changepage = (index) => {
    setCurrentExplainPage(index + 1);
  };

  const prevPage = () => {
    if (currentExplainPage > 1) {
      setCurrentExplainPage(currentExplainPage - 1);
    }
  };

  const nextPage = () => {
    if (currentExplainPage < explain.total_pages)
      setCurrentExplainPage(currentExplainPage + 1);
  };

  const firstPage = () => {
    setCurrentExplainPage(1);
  };

  const lastPage = () => {
    setCurrentExplainPage(explain.total_pages);
  };

  useEffect(() => {
    fetch("https://dev.saedaron.com/api/franchise/schedule.php")
      .then((res) => res.json())
      .then((data) => {
        setExplain(data);
      });
  }, []);

  const fetchToData = () => {
    fetch(`${API.plan}page=${currentExplainPage}`)
      .then((res) => res.json())
      .then((data) => {
        setExplain(data);
      });
  };

  useEffect(() => {
    fetchToData();
  }, [currentExplainPage]);

  return (
    <PageWrap>
      <Pagination>
        <PaginationLeftSide
          onClick={firstPage}
          src="images/Oh/arrow-double.png"
          alt="왼쪽 끝"
        />
        <PaginationButton
          onClick={prevPage}
          src="images/Oh/arrow.png"
          alt="이전"
        />
        {seperatePage.map((pageBaseNumber, index) => {
          const pageNumber = pageBaseNumber + index;
          if (pageNumber > explain.total_pages) return null;
          return (
            <CurrentPage
              style={currentExplainPage === pageNumber ? redStyle : null}
              key={pageNumber}
              onClick={() => changepage(pageNumber - 1)}
            >
              {pageNumber}
            </CurrentPage>
          );
        })}
        <PaginationButtonRight
          onClick={nextPage}
          src="images/Oh/arrow.png"
          alt="다음"
        />
        <PaginationSide
          onClick={lastPage}
          src="images/Oh/arrow-double.png"
          alt="오른쪽 끝"
        />
      </Pagination>
    </PageWrap>
  );
};
const PageWrap = styled.div`
  padding: 10px 0;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 3%;
  font-size: 20px;
  cursor: pointer;
`;

const PaginationButtonRight = styled.img`
  width: 17x;
  height: 17px;
  cursor: pointer;
`;

const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

const PaginationButton = styled(PaginationButtonRight)`
  transform: rotate(180deg);
  position: relative;
`;

const PaginationSide = styled.img`
  width: 19x;
  height: 19px;
  cursor: pointer;
`;

const PaginationLeftSide = styled(PaginationSide)`
  transform: rotate(180deg);
  position: relative;
`;

const redStyle = {
  color: "white",
  backgroundColor: "#006593",
  border: "1px solid #006593",
  borderRadius: "50%",
  width: "23px",
  height: "23px",
};

export default PagenationPlain;
