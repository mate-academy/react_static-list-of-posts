import React from 'react';
import { Post } from '../../typedefs';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id} className="posts__item">
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
