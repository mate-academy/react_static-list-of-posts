import React from 'react';

import './PostList.scss';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <div data-cy="post-info" className="post" key={post.id}>
          <PostInfo {...post} />
        </div>
      ))}
    </>
  );
};
