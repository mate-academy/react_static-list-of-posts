import React from 'react';
import { Post } from '../../Types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="cards">
    {posts.map(article => (
      <PostInfo info={article} />
    ))}
  </div>
);

export default PostList;
