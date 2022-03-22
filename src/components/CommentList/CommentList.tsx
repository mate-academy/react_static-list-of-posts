import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Omit<Comment, 'postId'>[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    <h3 className="CommentList__title">
      Comments
    </h3>

    <ul className="CommentList__list">
      {
        comments.map(comment => (
          <li
            className="CommentList__list-item"
            key={comment.id}
          >
            <CommentInfo comment={comment} />
          </li>
        ))
      }
    </ul>
  </div>
);
