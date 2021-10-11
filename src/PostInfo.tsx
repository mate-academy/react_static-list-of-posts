import React from 'react';
import { PreparePost } from './types/PreparePost';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: PreparePost,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    commentsBox,
  } = post;

  return user && (
    <div className="block">
      <h2 className="header">{title}</h2>
      <UserInfo user={user} />
      <p className="text">{body}</p>
      <h3 className="Comments">Comments:</h3>
      <CommentList commentsBox={commentsBox} />
    </div>
  );
};
