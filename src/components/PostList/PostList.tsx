import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  list: Post[]
};

export const PostList: React.FC<Props> = ({ list }) => (
  <div className="PostList">
    <ul>
      {list.map(post => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>
);
