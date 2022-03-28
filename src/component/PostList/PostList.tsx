import React from 'react';

import './PostList.scss';

import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: PreparedPost[]
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="container">
    <ul className="posts">
      {posts.map((post) => (
        <li
          key={post.id}
          className="posts__item post"
        >
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>
);
