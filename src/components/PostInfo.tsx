import React from 'react';
import UserInfo from './UserInfo';
import CommentList from './CommentList';
import { PreparedPostType } from '../types';

import './PostInfo.scss';

type Props = {
  post: PreparedPostType,
};

const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post__content">
      {post.user
        ? <UserInfo user={post.user} />
        : ''}
      <h2 className="post__title">{post.post.title}</h2>
      <p className="post__body">{post.post.body}</p>
    </div>
    <CommentList comments={post.comments} />
  </>
);

export default PostInfo;
