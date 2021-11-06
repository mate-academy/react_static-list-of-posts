import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import { Post } from '../../types/Post';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, userComments,
  } = post;

  return (
    <div>
      <h2 className="PostInfo__title">{title}</h2>
      <article className="PostInfo__description">{body}</article>
      {user && <UserInfo user={user} />}
      {userComments && <CommentList comments={userComments} />}
    </div>
  );
};
