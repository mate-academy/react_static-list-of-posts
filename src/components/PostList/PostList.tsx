import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <div className="PostList">
          <PostInfo key={post.id} post={post} />
        </div>
      ))}
    </>
  );
};
