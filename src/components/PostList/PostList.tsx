import React from 'react';
import './PostList.scss';
import PostInfo from '../PostInfo';
import { Prepared } from '../../react-app-env';

type Props = {
  preparedPosts: Prepared[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => {
  return (
    <ul className="list">
      {preparedPosts.map((post:Prepared) => (<PostInfo key={post.id} post={post} />))}
    </ul>
  );
};
