import React from 'react';

type Prop = {
  comment: PostComment,
};

export const CommentInfo: React.FC<Prop> = ({ comment }) => {
  return (
    <li className="commentList__item">
      <h3 className="commentList__user">{comment?.email}</h3>
      <h4 className="commentList__name">{comment?.name}</h4>
      <p className="commentList__text">{comment?.body}</p>
    </li>
  );
};
