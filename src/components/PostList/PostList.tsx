import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

import './PostList.scss';

type PostsList = {
  postList: Post[],
};

export const PostList:React.FC<PostsList> = ({ postList }) => (
  <ul className="postList">
    {
      postList.map(post => (
        <PostInfo post={post} key={post.id} />
      ))
    }
  </ul>
);
