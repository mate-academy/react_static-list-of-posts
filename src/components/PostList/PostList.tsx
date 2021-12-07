import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

import { PreparedPost } from '../../types/PreparedPost';

import './PostList.scss';

type Props = {
  posts: PreparedPost[]
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
