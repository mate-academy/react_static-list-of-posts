import React from 'react';

import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, userComments,
  } = post;

  return (
    <div>
      <h2 className="Post__title">{title}</h2>
      <article className="Post__description">{body}</article>
      {user && <UserInfo user={user} />}
      {userComments && <CommentList comments={userComments} />}
    </div>
  );
};
