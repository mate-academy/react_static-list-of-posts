import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(post => (
      <div key={post.id} className="post">
        <PostInfo post={post} />
      </div>
    ))}
  </>
);
