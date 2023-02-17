import React from 'react';
import { PostWithAllDate } from '../../types/postWithAllDate';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PostWithAllDate[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {
      posts && posts.map((object: PostWithAllDate) => (
        <PostInfo post={object} key={object.id} />
      ))
    }
  </div>
);
