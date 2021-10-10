import React from 'react';
import { Comment } from '../../types';

type Props = {
  data: Comment[];
};
export const Comments: React.FC<Props> = ({ data: comments }) => (
  <>
    <p>Comment section</p>
    <ul className="comment-list">
      {comments.map((comment) => {
        return (
          <li className="comment-item" key={comment.id}>
            {`Comment email: ${comment.email}`}
          </li>
        );
      })}
    </ul>
  </>
);
