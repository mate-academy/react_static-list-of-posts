import React from 'react';

import { Post } from '../../types/Post';

import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: Post[]
};

export const PostList:React.FC<Props> = ({ preparedPosts }) => (
  <ul className="posts-list" data-cy="post-info">
    {preparedPosts.map((post) => (
      <li key={post.id} className="posts-list__item post">
        <PostInfo
          post={post}
        />
      </li>
    ))}
  </ul>
);
