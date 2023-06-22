import React from 'react';

import commentsFromServer from '../../api/comments';

import { Post } from '../../Types/post';
import { Comment } from '../../Types/comment';

import { PostInfo } from '../PostInfo';

function getComments(postId: number): Comment[] {
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
        comments={getComments(post.id)}
        key={post.id}
      />
    ))}
  </ul>
);
