import React from 'react';
import { Post } from '../types';
import PostInfo from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id} className="postList">
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
