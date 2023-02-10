import React from 'react';
import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    <li>
      {posts.map(post => <PostInfo post={post} key={post.id} />)}
    </li>
  </ul>
);
