import React from 'react';
import { IPostRequired } from '../../types/IPost';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type PostListProps = {
  posts: IPostRequired[],
};

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <ul className="PostList">
    {
      posts.map(post => (
        <li key={post.id} className="PostList__item">
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
