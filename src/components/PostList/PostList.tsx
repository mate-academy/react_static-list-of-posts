import React from 'react';

import './PostList.scss';

import Post from '../../types/Post';

import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map((post) => (
      <li key={post.id} className="PostList__item">
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);
