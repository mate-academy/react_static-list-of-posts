import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

interface PostListProps {
  postList: Post[]
}

export const PostList: React.FC<PostListProps> = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo key={post.id} postInfo={post} />
    ))}
  </div>
);
