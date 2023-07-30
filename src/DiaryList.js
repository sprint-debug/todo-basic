import React, { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <section className="list-container">
      <h2 className="list-title">일기 리스트</h2>
      <p className="list-description">
        {diaryList.length}개의 일기가 있습니다.
      </p>
      <ul>
        {diaryList.map((it, idx) => (
          <li>
            <DiaryItem key={`diaryitem_${it.id}`} {...it} />
          </li>
        ))}
      </ul>
    </section>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
