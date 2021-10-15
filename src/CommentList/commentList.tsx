import React from 'react';
import { CommentInfo } from '../CommentInfo/componentInfo';
import { Comments } from '../types/Post';
import './commentList.scss';

type Props = {
  comments: Comments[];
};
export const CommentList: React.FC<Props> = ({ comments }) => {
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
