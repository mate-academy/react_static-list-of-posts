import React from 'react';
import { Comment } from '../../interface/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comment">
    {comments.map(comment => (
      <div
        className="comment-post"
        key={comment.id}
      >
        <span className="comment-post--title">{`${comment.name}`}</span>
        <br />
        <span className="comment-post--body">{`Comment: ${comment.body}`}</span>
        <br />
        <br />
        <span className="comment-post--email">{`commentator's e-mail: ${comment.email}`}</span>
      </div>
    ))}
  </div>
);
