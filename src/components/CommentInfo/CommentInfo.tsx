import React from 'react';
import { Comment } from '../../types/Comment';
import './CommetInfo.scss';

type Props = {
  commentData: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { commentData } = props;
  const { name, email, body } = commentData;

  return (
    <div className="comment">
      <h5 className="comment__title">{name}</h5>
      <p className="comment__email">
        {'By: '}
        {email}
      </p>
      <p className="comment__body">{body}</p>
    </div>
  );
};
