import React from 'react';

import { UserInfo } from '../UserInfo/index';
import { CommentList } from '../CommentList';

import { Post } from '../../types/Post';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {' Posted by  '}
      <UserInfo user={post.user} />
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <CommentList comments={post.comments} />
  </div>
);
