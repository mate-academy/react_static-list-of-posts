import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: Post[]
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post-list">
    {preparedPosts.map(preparedPost => (
      <li data-cy="post-info">
        <PostInfo post={preparedPost} />
      </li>
    ))}
  </ul>
);
