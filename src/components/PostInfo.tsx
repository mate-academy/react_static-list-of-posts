import React from 'react';

import './PostInfo.scss';

import Post from '../types/Post';

import UserInfo from './UserInfo';
import CommentList from './CommentList';

type Props = {
  post: Post,
};

const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    {post.user ? <UserInfo user={post.user} /> : 'no info'}
    <h2 className="post__title">
      {post.title}
    </h2>
    <p className="post__body">
      {post.body}
    </p>
    <CommentList comments={post.comments} />
  </div>
);

export default PostInfo;
