import React from "react";
import { CommentType } from "../../types/CommentType";
import { CommentInfo } from "../CommentInfo/CommentInfo";
import './CommentList.scss';

type Props = {
  comments: CommentType[] | null,
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="commentlist">
    {comments?.map(comment => (
      <li className="commentlist__item">
        <CommentInfo comment={comment}/>
        <p><b>{comment?.body}</b></p>
      </li>
    ))}
  </ul>
);
