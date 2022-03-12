import React from 'react';
import { Post } from '../types/interfaces';
import { PostInfo } from './PostInfo';

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-list__item">
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

type Props = {
  posts: Post[]
};
