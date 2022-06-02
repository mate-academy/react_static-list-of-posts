import React from 'react';
import './PostList.scss';
import { FullPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';

interface Props {
  listOfPosts: FullPost[];
}

export const PostList: React.FC<Props> = ({ listOfPosts }) => (
  <ul className="posts-list">
    {listOfPosts.map(postItem => (
      <li className="posts-list__item" key={postItem.id}>
        <PostInfo postCard={postItem} />
      </li>
    ))}
  </ul>
);
