import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import '../../Post.scss';

type Props = {
  posts: Post[]
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ul className="post post__list">
    {posts && posts.map(post => (
      <li key={post.id} className="post__item">
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
