import React from 'react';
import PostInfo from '../PostInfo/PostInfo';
import { Post } from '../../_types/post';

import './PostList.scss';

type Props = {
  posts: Post[];
};

const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);

export default PostList;
