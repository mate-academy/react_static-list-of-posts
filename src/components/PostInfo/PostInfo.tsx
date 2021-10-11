import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <div className="post">
      <p className="post__title">
        <strong>Title:</strong>
        {' '}
        {post.title}
      </p>
      <p className="post__body">
        <strong>Post:</strong>
        {' '}
        {post.body}
      </p>
      {post.user && (
        <UserInfo user={post.user} />
      )}
      {post.comments && (
        <CommentList commentsIt={post.comments} />
      )}
    </div>
  );
};
