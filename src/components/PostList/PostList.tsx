import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import '../../Post.scss';

type Props = {
  posts: Post[]
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ul className="Post Post__list">
    {posts && posts.map(post => (
      <li key={post.id} className="Post__item">
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
