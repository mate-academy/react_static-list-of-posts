import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    <ul className="postlist__items">
      {posts.map(post => (
        <li className="postlist__item" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>
);
