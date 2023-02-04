import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  const postList
  = posts.length > 0 ? (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  ) : (
    ''
  );

  return <div className="PostList">{postList}</div>;
};
