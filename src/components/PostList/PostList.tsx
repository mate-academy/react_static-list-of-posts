import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

import './PostList.scss';

type PostsList = {
  posts: Post[],
};

export const PostList:React.FC<PostsList> = ({ posts }) => (
  <ul className="postList">
    {
      posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))
    }
  </ul>
);
