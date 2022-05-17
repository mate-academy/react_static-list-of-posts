import React from 'react';
import { PreparedPosts } from '../../types/Types';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: PreparedPosts[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList" data-cy="post-info">
    {posts.map(post => (
      <li key={post.id} className="PostList__items">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
