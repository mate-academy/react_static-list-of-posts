import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostWithUserAndComments } from '../../types/PostWithUserAndComments';

interface PostsProps {
  posts: PostWithUserAndComments[]
}

export const PostList: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
