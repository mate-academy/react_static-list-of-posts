import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './Post.scss';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(preparedPost => (
      <li key={preparedPost.id} className="Post">
        <PostInfo preparedPost={preparedPost} />
      </li>
    ))}
  </ul>
);
