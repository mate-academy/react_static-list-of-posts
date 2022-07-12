import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../type';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="commentList">
    {comments.map(comment => (
      <>
        <li className="commentBody" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      </>
    ))}
  </ul>
);
