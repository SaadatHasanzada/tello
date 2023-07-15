import React from "react";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import style from "./style.module.scss";

const CommentContainer = () => {
  return (
    <div className={style.commentContainer}>
      <Comment />
      <Comment />
      <CommentForm />
    </div>
  );
};

export default CommentContainer;
