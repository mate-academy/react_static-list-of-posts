// Libraries
import React from 'react';

// Data
import commentsFromServer from '../../api/comments';

// Types
import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';

// Components
import { PostInfo } from '../PostInfo';

// Functions
function getComments(postId: number): Comment[] {
  const foundComments
    = commentsFromServer.filter(comment => comment.postId === postId);

  return foundComments;
}

type Props = {
  posts: Post[];
};

// Component
export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map((post: Post) => (
      <PostInfo
        title={post.title}
        userEmail={post.user?.email}
        userName={post.user?.name}
        body={post.body}
        comments={getComments(post.id)}
        key={post.id}
      />
    ))}
  </ul>
);
