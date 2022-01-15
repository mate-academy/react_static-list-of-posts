import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommetList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    comments,
    title,
    body,
  } = post;

  return (
    <>
      <div className="post">
        <h2 className="post__title">{title}</h2>
        <p className="post__description">{body}</p>
        {user && <UserInfo user={user} />}
      </div>
      <CommentList comments={comments} />
    </>
  );
};
