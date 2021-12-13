import React from 'react';

import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="comments">
      <div className="comments__title">
        Comments:
      </div>
      {comments.map(({
        id, name, body, email,
      }) => (
        <div className="comments__item comment" key={id}>
          <CommentInfo name={name} body={body} email={email} />
        </div>
      ))}
    </div>
  );
};
