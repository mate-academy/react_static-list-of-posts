import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPost } from '../../types/PreparedPost';

import './PostList.scss';

type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="Posts">
    {posts.map(post => (
      <li key={post.id} className="Posts__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
