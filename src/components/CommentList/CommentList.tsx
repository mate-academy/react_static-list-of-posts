import React from 'react';

import { CommentTypes } from '../../types/CommentTypes';

import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: CommentTypes[];
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <div className="post__comments comments">
    <p className="comments__title">Comments</p>

    <div className="comments__list list">
      {comments.map(({
        id, name, email, body,
      }) => (
        <>
          <div className="list__box box">
            <CommentInfo
              key={id}
              name={name}
              email={email}
              body={body}
            />
          </div>
        </>
      ))}
    </div>
  </div>
);
