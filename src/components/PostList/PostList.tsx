import React from 'react';
import './PostList.scss';
import { PreparedPost } from '../../types';
import { PostInfo } from '../PostInfo';

type Props = {
  preparedPosts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post-list">
    {preparedPosts.map(preparedPost => (
      <li className="post-list__item" key={preparedPost.id}>
        <PostInfo preparedPost={preparedPost} />
      </li>
    ))}
  </ul>
);
