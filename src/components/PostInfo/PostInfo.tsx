import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props > = ({ post }) => {
  return (
    <div className="post">
      <p className="post__title">
        <b>Title:</b>
        {' '}
        {post.title}
      </p>

      <p className="post__body">
        <b>Post:</b>
        {' '}
        {post.body}
      </p>

      {post.user && (
        <UserInfo user={post.user} />
      )}
      {post.comments && (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};
