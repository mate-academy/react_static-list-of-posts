import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Posts = {
  posts: Post[];
};

export const PostList: React.FC<Posts> = ({ posts = [] }) => (
  <ul className="PostList">
    {posts.map(({
      id,
      title,
      user,
      body,
      comments,
    }) => (
      <li className="PostInfo" key={id}>
        <PostInfo
          title={title}
          user={user}
          body={body}
          comments={comments}
        />
      </li>
    ))}
  </ul>
);
