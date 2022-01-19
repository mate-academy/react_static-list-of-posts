import React from 'react';

import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <div className="post_title">{post.title}</div>
    <div className="post_body">{post.body}</div>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);
