import React from 'react';

// Data
import commentsFromServer from '../../api/comments';

// Types
import { Post } from '../../Types/post';
import { Comment } from '../../Types/comment';

import { PostInfo } from '../PostInfo';

function getCommit(postId: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map((post: Post) => (
      <PostInfo
        title={post.title}
        user={post.user}
        body={post.body}
        comments={getCommit(post.id)}
        key={post.id}
      />
    ))}
  </ul>
);
