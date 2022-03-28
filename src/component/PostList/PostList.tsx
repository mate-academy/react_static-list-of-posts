import React from 'react';

import './PostList.scss';

import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo';

interface Props {
  preparedPosts: PreparedPost[]
}

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <div className="container">
    <ul className="posts">
      {preparedPosts.map((post) => (
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
