import React from 'react';
import { Post } from '../../types/type';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  preparedPosts: Post[];
}

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="posts">
    {
      preparedPosts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))
    }
  </ul>
);
