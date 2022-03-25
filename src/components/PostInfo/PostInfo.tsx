import React from 'react';
import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <h2 className="post__title">{post.title}</h2>
    <div className="post__body">{post.body}</div>
    {post.user && <UserInfo user={post.user} />}
    <CommentList comments={post.comments} />
  </div>
);
