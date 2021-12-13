import React from 'react';

import { PostInfo } from '../PostInfo/PostIndo';
import { InfoPost } from '../../Types/InfoPost';

import './PostList.scss';

type Props = {
  posts: InfoPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <article key={post.id} className="post">
          <PostInfo {...post} />
        </article>
      ))}
    </div>
  );
};
