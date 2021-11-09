import React from 'react';
import { Post } from '../../types/type';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {
      posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))
    }
  </ul>
);
