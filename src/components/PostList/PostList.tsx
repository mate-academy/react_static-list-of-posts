import React from 'react';
import { CompletePost } from '../../types/CompletePost';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: CompletePost[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </>
);
