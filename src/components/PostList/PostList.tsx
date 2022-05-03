import React from 'react';

import { Post } from '../../types/Post';

import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: Post[]
};

export const PostList:React.FC<Props> = ({ preparedPosts }) => (
  <ul className="postList preparedPosts" data-cy="post-info">
    {preparedPosts.map((post) => (
      <li key={post.id} className="postItem">
        <PostInfo
          post={post}
        />
      </li>
    ))}
  </ul>
);
