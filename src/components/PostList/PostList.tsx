import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

import { PreaperedPost } from '../../types/PreaperedPost';

import './PostList.scss';

type Props = {
  posts: PreaperedPost[]
};

export const PostList:React.FC<Props> = ({ posts }) => {
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
