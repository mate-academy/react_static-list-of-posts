import React from 'react';
import './CommentInfo.scss';

interface Prop {
  comment: Comment;
}

export const CommentInfo: React.FC<Prop> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <>
      <h2 className="comment__name">
        {name}
      </h2>
      <div className="comment__mail">
        {email}
      </div>
      <div className="comment__body">
        {body}
      </div>
    </>
  );
};
