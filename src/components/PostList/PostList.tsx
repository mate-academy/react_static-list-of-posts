import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

interface Props {
  postsList: Post[],
}

export const PostList: React.FC<Props> = ({ postsList }) => (
  <ul className="list">
    {
      postsList.map(post => (
        <li className="list__item" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
