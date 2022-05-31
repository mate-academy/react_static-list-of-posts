import React from 'react';
import './PostList.scss';
import { PreparedPosts } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';

interface Props {
  preparedPosts: PreparedPosts[];
}

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post__list">
    {
      preparedPosts.map(post => (
        <li
          key={post.id}
          className="post__item"
          data-cy="post-info"
        >
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
