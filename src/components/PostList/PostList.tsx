import React from 'react';
import './PostList.scss';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  postsList: Post[];
};

export const PostList: React.FC<Props> = ({ postsList }) => (
  <ul className="post">
    {postsList.map((postItem) => (
      <li key={postItem.id}>
        <PostInfo {...postItem} />
      </li>
    ))}
  </ul>
);
