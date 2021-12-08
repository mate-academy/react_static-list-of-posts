import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: Post[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => {
  return (
    <ul className="postList">
      {preparedPosts.map((post) => {
        return (
          <li className="postList__item" key={post.id}>
            <PostInfo post={post} />
          </li>
        );
      })}
    </ul>
  );
};
