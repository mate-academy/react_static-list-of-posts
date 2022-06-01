import React from 'react';
import { PreparedPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <div className="container is-widescreen">
    {preparedPosts.map(post => (
      <div key={post.id}>
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);
