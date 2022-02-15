import React from 'react';

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

type CommentType = {
  comment: Comment;
};

export const CommentList: React.FC<CommentType> = ({ comment }) => {
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <div className="commentList">
      <h3 className="commentList__name">{name}</h3>
      <p className="commentList__body">{body}</p>
      <a href={email} className="commentList__email">
        {email}
      </a>
    </div>
  );
};
