import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type Props = {
  allPosts: Post[],
};

export const PostList: React.FC<Props> = ({ allPosts = [] }) => (
  <ol className="PostList">
    {allPosts.map(onePost => (
      <PostInfo post={onePost} key={onePost.id} />
    ))}
  </ol>
);
