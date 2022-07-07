import React from 'react';

import { PreparedPost } from '../../api/types/PreparedPost';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ol>
    {posts.map(post => {
      return (

        <li key={post.id} className="card">
          <PostInfo post={post} />
        </li>
      );
    })}
  </ol>
);
