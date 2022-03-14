import React from 'react';
import { PostRequired } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type PostListProps = {
  posts: PostRequired[],
};

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <ul className="postList">
    {
      posts.map(post => (
        <li key={post.id} className="postList__item">
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
