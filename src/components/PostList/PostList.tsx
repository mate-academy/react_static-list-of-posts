import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

interface Props {
  postList: Post[];
}

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="post__list">
    {
      postList.map((postItem) => (
        <PostInfo postItem={postItem} key={postItem.id} />
      ))
    }
  </ul>
);
