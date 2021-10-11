import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

import { PreparedPost } from '../../types/PreparedPost';

import './PostList.scss';

type Props = {
  posts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="posts">
    <ul className="posts__list">
      {posts.map((post) => (
        <li>
          <PostInfo
            key={post.id}
            post={post}
          />
        </li>
      ))}
    </ul>
  </div>
);
