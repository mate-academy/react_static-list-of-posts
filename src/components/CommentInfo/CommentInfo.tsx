import React from 'react';

type Props = {
  postComment: PostComment,
};

export const CommentInfo: React.FC<Props> = ({ postComment }) => (
  <li key={postComment.id}>
    <p>{postComment.name}</p>
    <p>{postComment.body}</p>
    <a href={`mailto:${postComment.email}`}>{postComment.email}</a>
  </li>
);
