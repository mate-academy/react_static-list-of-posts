import React from 'react';

import { PostInfo } from '../PostInfo';
import { Data } from '../../types';

type Props = {
  posts: Array<Data>;
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {
      posts.map(post => (
        <li className="PostInfo" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))
    }
  </div>
);
