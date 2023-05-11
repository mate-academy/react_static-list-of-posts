import React from 'react';
import './PostList.scss';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = (props) => {
  const { posts } = props;

  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
