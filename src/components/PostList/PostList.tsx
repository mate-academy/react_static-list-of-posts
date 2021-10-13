import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

export type Props = {
  posts: Post[];
};

export const PostList: React.FC <Props> = (props) => {
  const { posts } = props;

  return (
    <ul className="list">
      {posts.map(post => (
        <li
          key={post.id}
          className="list__item"
        >
          <PostInfo element={post} />
        </li>
      ))}
    </ul>
  );
};
