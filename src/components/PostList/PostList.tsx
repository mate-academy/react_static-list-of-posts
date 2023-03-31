import React from 'react';
import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={post}
        users={usersFromServer}
        comments={commentsFromServer}
      />
    ))}
  </div>
);
