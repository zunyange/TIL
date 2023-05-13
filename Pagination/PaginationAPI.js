import React, { useEffect, useState } from "react";
import { API } from "../../../../config";

// 1-1. API 로 데이터 받을 때

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const startPage = (Math.ceil(currentPage / 5) - 1) * 5 + 1;
  const endPage =
    startPage + 4 > data.total_pages ? data.total_pages : startPage + 4;
  const seperatePage = new Array(endPage - startPage + 1).fill(startPage);

  const changepage = (index) => {
    setCurrentPage(index + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < data.total_pages) setCurrentPage(currentPage + 1);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(data.total_pages);
  };

  useEffect(() => {
    fetch("https://dev.saedaron.com/api/franchise/schedule.php")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const fetchToData = () => {
    fetch(`${API.plan}page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchToData();
  }, [currentPage]);

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
          if (pageNumber > data.total_pages) return null;
          return (
            <CurrentPage
              style={currentPage === pageNumber ? redStyle : null}
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

const redStyle = {
  color: "white",
  backgroundColor: "#006593",
  border: "1px solid #006593",
  borderRadius: "50%",
  width: "23px",
  height: "23px",
};

export default Pagination;
