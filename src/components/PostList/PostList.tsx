import React from 'react';
import { PreparedPosts } from '../../types/interfaces';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: PreparedPosts[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div>
    {posts.map(post => (
      <div
        className="post-list"
        key={post.id}
        data-cy="post-info"
      >
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);
