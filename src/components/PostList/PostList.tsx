import React from 'react';
import { Post } from '../../types/Post';
import PostInfo from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[],
};

const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post_list">
    {posts.map(post => (
      <li key={post.id} className="post_item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

export default PostList;
