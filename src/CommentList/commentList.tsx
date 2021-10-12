import React from 'react';
import { CommentInfo } from '../CommentInfo/componentInfo';
import { Comments } from '../types/Post';
import './commentList.scss';

type Props4 = {
  comments: Comments[];
};
export const CommentList: React.FC<Props4> = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key="comment.id" className="pageElem">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
