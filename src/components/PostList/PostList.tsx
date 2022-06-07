import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';
import { PreparedPost } from '../../app.typedef';

interface Props {
  posts: PreparedPost[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
        <li key={post.id} className="post-list__item">
          <PostInfo post={post} />
        </li>
      )
    )}
  </ul>
);
