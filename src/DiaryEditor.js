import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const [diary, setDiary] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeDiary = (e) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddButtonClick = () => {
    if (diary.author.length < 1) {
      authorRef.current.focus();
      return;
    }

    if (diary.content.length < 1) {
      contentRef.current.focus();
      return;
    }

    onCreate(diary.author, diary.content, diary.emotion);
    alert("일기가 성공적으로 추가되었습니다");

    setDiary({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  const authorRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <div className="editor-container">
      <h2 className="title">오늘의 일기</h2>
      <div className="input-author">
        <input
          ref={authorRef}
          name="author"
          placeholder="작성자"
          type="text"
          value={diary.author}
          onChange={handleChangeDiary}
        />
      </div>
      <div className="textarea-container">
        <textarea
          ref={contentRef}
          name="content"
          placeholder="일기"
          type="text"
          value={diary.content}
          onChange={handleChangeDiary}
        />
      </div>
      <div className="emotion-container">
        <span>오늘의 감정점수</span>
        <select
          name="emotion"
          value={diary.emotion}
          onChange={handleChangeDiary}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div className="btn-container">
        <button className="btn btn-primary" onClick={handleAddButtonClick}>
          일기 저장하기
        </button>
      </div>
    </div>
  );
};

export default memo(DiaryEditor);
