import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: Post[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post-list">
    {preparedPosts.map(preparedPost => (
      <li key={preparedPost.id}>
        <PostInfo preparedPost={preparedPost} />
      </li>
    ))}
  </ul>
);
