import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type PostsProps = {
  posts: Post[];
};

export const PostList: React.FC<PostsProps> = ({
  posts,
}) => (
  <ul className="PostList">
    {
      posts.map(post => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
