import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <li key={post.id} className="PostList__item">
        <PostInfo post={post} />
      </li>
    ))}
  </div>
);
