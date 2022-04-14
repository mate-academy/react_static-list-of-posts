import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentsList.scss';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    <ul className="comments-list">
      <h2 className="comments-list--title">
        Comments:
      </h2>
      {comments.map(comment => (
        <li className="comment-item" key={comment.id}>
          <CommentInfo
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ))}
    </ul>
  </div>
);
