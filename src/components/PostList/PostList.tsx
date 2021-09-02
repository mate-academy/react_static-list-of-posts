import React from 'react';

import { PostInfo } from '../PostInfo';

import './PostList.scss';

interface Props {
  preparedPosts: Post[];
}

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(post => (
      <section key={post.id} className="post">
        <PostInfo post={post} />
      </section>
    ))}
  </>
);
