import React from 'react';

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

type CommentType = {
  comments: Comment | undefined;
};

export const CommentList: React.FC<CommentType> = ({ comments = {} }) => {
  return (
    <div className="commentList">
      <h3 className="commentList__name">{comments.name}</h3>
      <p className="commentList__body">{comments.body}</p>
      <a href={comments.email} className="commentList__email">
        {comments.email}
      </a>
    </div>
  );
};
