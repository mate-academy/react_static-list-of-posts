import React from 'react';

import './PostList.scss';

import { PostInfo } from '../PostInfo';

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
          <div className="list__separator" />
        </li>
      ))}
    </ul>
  );
};
