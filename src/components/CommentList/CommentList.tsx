import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="post__comments">
    <h3 className="post__comments-title">Comments:</h3>
    <ul className="comments__list">
      {comments.map(comment => (
        <li className="post__comment" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);
