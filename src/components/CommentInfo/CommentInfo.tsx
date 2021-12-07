import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comments: Comment[];
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    {comments.map(({
      name, body, email, id,
    }) => (
      <div key={id} className="comment">
        <h4 className="comment__title">{name}</h4>

        <p className="comment__body">{body}</p>
        {'Email: '}
        <a href={`mailto: ${email}`} className="comment__email">{email}</a>
      </div>
    ))}
  </div>
);
