import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList: React.FC<{ content: Post[] }> = ({ content }) => {
  return (
    <ul className="post-list">
      {content.map((post: Post) => (
        <li className="post" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
