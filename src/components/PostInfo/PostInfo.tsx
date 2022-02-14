import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/post';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="postInfo">
    <h2 className="postInfo__title">{post.title}</h2>
    <h3 className="postInfo__body">{post.body}</h3>
    {post.user && (
      <UserInfo post={post.user} />
    )}
    <CommentInfo comments={post.comments} />
  </div>
);
