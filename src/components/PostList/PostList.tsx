import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <div className="PostList">
        {posts.map(
          post => <PostInfo key={post.id} post={post} />,
        )}
      </div>
    </>
  );
};
