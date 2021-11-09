import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

type PostInfoProps = {
  post: Post;
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => (
  <div className="post-info">
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <p>{post.user && <UserInfo user={post.user} />}</p>
    <CommentList comments={post.comments} />
  </div>
);
