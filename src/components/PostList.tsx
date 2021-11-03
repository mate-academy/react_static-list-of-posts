import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(onePost => (
      <div className="post-div" key={onePost.id}>
        <PostInfo post={onePost} />
      </div>
    ))}
  </>
);
