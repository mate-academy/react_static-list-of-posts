import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="postsList">
    {posts.map(post => (
      <li key={post.id} className="postsList__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
