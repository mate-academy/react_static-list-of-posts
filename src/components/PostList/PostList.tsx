import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostsT } from '../../types';

type Props = {
  posts: PostsT[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {
      posts.map(postsItem => (
        <PostInfo key={postsItem.id} info={postsItem} />
      ))
    }
  </div>
);
