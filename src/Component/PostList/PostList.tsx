import React from 'react';
import { Post } from '../../Types';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};
export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <div>
        <ul>
          {posts.map((post) => (
            <PostInfo
              post={post}
              key={post.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
