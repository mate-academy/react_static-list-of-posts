import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  postsArray: Post[];
};

export const PostList: React.FC<Props> = ({ postsArray }) => (
  <>
    {postsArray.map(post => (
      <div className="post" key={post.id}>
        <PostInfo post={post} />
      </div>
    ))}
  </>
);
