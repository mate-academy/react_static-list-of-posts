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
    <ul style={{ listStyleType: 'none' }}>
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo
            post={post}
            users={usersFromServer}
            comments={commentsFromServer}
          />
        </li>
      ))}
    </ul>
  </div>
);
