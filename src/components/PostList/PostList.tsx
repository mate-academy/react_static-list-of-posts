import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo';
import { PreparedPost } from '../../app.typedef';

interface Props {
  posts: PreparedPost[]
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => {
      return (
        <li key={post.id} className="post-list__post">
          <PostInfo post={post} />
        </li>
      );
    })}
  </ul>
);
