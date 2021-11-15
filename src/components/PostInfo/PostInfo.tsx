import React from 'react';

import { Post } from '../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="container">
    <UserInfo name={post.user?.name} email={post.user?.email} />
    <div className="context">
      <div className="title">
        {post.title}
      </div>
      <div className="text">
        {post.body}
      </div>
      <CommentList comments={post.comments} />
    </div>
  </div>
);
