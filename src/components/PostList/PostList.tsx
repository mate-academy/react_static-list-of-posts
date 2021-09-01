import React from 'react';
import { Post } from '../../Types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <ul className="list">
      {posts.map(element => (
        <li key={element.id} className="list__item">
          <PostInfo post={element} />
        </li>
      ))}
    </ul>
  );
};
