import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

interface PostListProps {
  posts: Post[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {
        posts.map((post : Post) => <PostInfo key={post.id} post={post} />)
      }
    </>
  );
};
