import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  prepared: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { prepared } = props;

  return (
    <ul className="PostList">
      {prepared.map(post => (
        <li className="PostItem">
          <PostInfo key={post.id} post={post} />
        </li>
      ))}
    </ul>
  );
};
