import React from 'react';
import { FullPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: FullPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="postList">
    {preparedPosts.map(post => (
      <li
        key={post.id}
        data-cy="post-info"
        className="postList__item"
      >
        <PostInfo
          post={post}
        />
      </li>
    ))}
  </ul>
);
