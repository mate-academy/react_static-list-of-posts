import React from 'react';
import { Posts } from '../../types/types';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  postList: Posts[];
}

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="post__list">
    {
      postList.map((postItem) => (
        <PostInfo postItem={postItem} key={postItem.id} />
      ))
    }
  </ul>
)
