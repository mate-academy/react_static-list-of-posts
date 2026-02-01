import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostsType } from './../../types/PostsType';

type Props = {
  posts: PostsType[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        return <PostInfo key={post.id} post={post} />;
      })}
    </div>
  );
};
