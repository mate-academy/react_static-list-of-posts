import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo">
      <h4 className="CommentInfo__title">{name}</h4>
      <p className="CommentInfo__text">{body}</p>
      <a className="CommentInfo__from" href={`mailto:${email}`}>{email}</a>
    </div>
  );
};
