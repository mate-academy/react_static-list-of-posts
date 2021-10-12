import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => {
  return (
    <ul className="PostList">
      {preparedPosts.map(preparedPost => (
        <li className="PostList__post" key={preparedPost.id}>
          <PostInfo preparedPost={preparedPost} />
        </li>
      ))}
    </ul>
  );
};
