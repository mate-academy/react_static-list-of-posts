import React from 'react';

import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comments: Comment[] | null;
};

export const CommentInfo: React.FC<Props> = ({ comments }) => {
  return (
    <div className="comments">
      <div className="comments__container">
        {comments
          && comments.map(({
            id, name, body, email,
          }) => (
            <div className="comments__comment" key={id}>
              <h3 className="comments__name">{name}</h3>
              <p className="comment__body">{body}</p>
              <a href="email.com" className="comment__email">{email}</a>
            </div>
          ))}
      </div>
    </div>

  );
};
