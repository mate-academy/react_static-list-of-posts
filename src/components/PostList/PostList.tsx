import React from 'react';

import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

type Props = {
  posts: Post[];
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
