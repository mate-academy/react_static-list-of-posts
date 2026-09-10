import React from 'react';
import { type Comment, type User } from '../../types';
import /* array */ comments from '../../api/comments';
import /* array */ posts from '../../api/posts';
import /* array */ users from '../../api/users';
import { PostInfo } from '../PostInfo';

export interface PreparedPostTypes {
  comments: Comment[];
  id: number;
  title: string;
  user: User | undefined;
  userId: number;
  body: string;
}

export const preparedPost: PreparedPostTypes[] = [...posts].map(post => {
  const postComments: Comment[] = [];

  for (const comment of comments) {
    if (post.id === comment.postId) {
      postComments.push(comment);
    }
  }

  let postUser: User | undefined;

  for (const user of users) {
    if (post.userId === user.id) {
      postUser = user;
    }
  }

  const postObj = {
    ...post,
    comments: postComments,
    user: postUser,
  };

  return postObj;
});

export const PostList: React.FC = () => {
  return (
    <div className="PostList">
      {preparedPost.map(post => {
        return <PostInfo post={post} key={post.id} />;
      })}
    </div>
  );
};
