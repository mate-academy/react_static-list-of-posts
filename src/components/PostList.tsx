import React from 'react';
import comments from '../api/comments';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="post__list">
      {posts.map(post => {
        return (
          <li key={post.id}>
            <PostInfo
              title={post.title}
              body={post.body}
              user={post.user}
              comments={comments}
            />
          </li>
        );
      })}
    </ul>
  );
};
