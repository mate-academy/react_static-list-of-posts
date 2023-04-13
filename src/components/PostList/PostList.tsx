import React from 'react';
import { ArrangedPost } from '../../types/ArrangedPost';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: ArrangedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <React.Fragment key={post.id}>
        <PostInfo post={post} />
      </React.Fragment>
    ))}
  </div>
);
