import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPost } from '../../type/preparedPost';
import './PostList.scss';

type Props = {
  posts: PreparedPost[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post">
    {posts.map(post => (
      <li key={post.id} className="post--item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
