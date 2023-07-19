import React from 'react';
import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type TypePosts = {
  post: Post;
};

export const PostList: React.FC<TypePosts> = ({ post }) => (
  <PostInfo post={post} />
);
