import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPosts } from '../../types';

interface Props {
  posts: PreparedPosts[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => {
      return (
        <li key={post.id} className="post-list__item">
          <PostInfo post={post} />
        </li>
      );
    })}
  </ul>
);
