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
          ? comments.map((comment) => {
            return (
              <>
                <div className="comments__comment" key={comment.id}>
                  <h3 className="comments__name">{comment.name}</h3>
                  <p className="comment__body">{comment.body}</p>
                  <a href="email.com" className="comment__email">{comment.email}</a>
                </div>
              </>
            );
          })
          : null}
      </div>
    </div>

  );
};
