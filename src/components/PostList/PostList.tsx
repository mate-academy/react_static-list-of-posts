import React from 'react';
import { Post } from '../../Types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

interface PostsListProps {
  posts: Post[];
}

export const PostList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map((post) => {
        return <PostInfo key={post.id} post={post} />;
      })}
    </div>
  );
};
