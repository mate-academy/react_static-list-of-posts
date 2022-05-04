import React from 'react';

import { PreparedPost } from '../../types/types';

import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="container" data-cy="post-info">
      <ul className="postList">
        {posts.map(post => (
          <li className="postList__item" key={post.id}>
            <PostInfo post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
