import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/postType';

type Props = {
  posts: Post[]
};
export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    { posts.map((post) => {
      return (<PostInfo post={post} key={post.id} />);
    })}
  </div>
);
