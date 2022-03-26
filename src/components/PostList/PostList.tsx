import React from 'react';

import { FullPost } from '../../types/FullPost';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: FullPost[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="posts">
    {preparedPosts.map((post) => (
      <li className="posts__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
