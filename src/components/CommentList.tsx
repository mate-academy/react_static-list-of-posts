import React from 'react';
import { CommentInfo } from './CommentInfo';
import { Comments } from '../types/Comments';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="Comments">
    <p className="commentsTitle">Comments:</p>
    <ul className="commentsList">
      {comments.map(comment => (
        <li className="commentItem" key={comment.id}>
          <CommentInfo {...comment} />
        </li>
      ))}
    </ul>
  </div>
);
