import React from 'react';

import { PostInfo } from '../PostInfo/PostInfo';

import { Post } from '../../types/Posts';

import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostsList: React.FC<Props> = ({ posts }) => (
  <ul className="postsList">
    {posts.map(post => (
      <li className="postsList__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
