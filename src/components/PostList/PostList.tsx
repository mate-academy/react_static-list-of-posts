import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <ul className="list">
      {posts.map(post => (
        <li className="list__item" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
