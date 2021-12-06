import React from 'react';

import { PostInfo } from '../PostInfo';
import { PrepPost } from '../../types/prepPosts';

type Props = {
  posts: PrepPost[];
};

export const PostList:React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id} className="post">
          <PostInfo post={post} />
        </article>
      ))}
    </div>
  );
};
