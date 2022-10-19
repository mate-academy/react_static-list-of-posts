import React from 'react';
import { Post } from '../../types/Post';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  postedList: Post[]
};

export const PostList: React.FC<Props> = ({ postedList }) => (
  <ul className="PostList">
    {postedList.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
