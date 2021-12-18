import React from 'react';
import PostInfo from '../PostInfo/PostInfo';
import { Comments } from '../types/Comment';
import { User } from '../types/User';

type Post = {
  id: number,
  title: string,
  body: string,
  user: User | undefined,
  comment: Comments[],
};

type Props = {
  posts: Post[],
};

const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

export default PostList;
