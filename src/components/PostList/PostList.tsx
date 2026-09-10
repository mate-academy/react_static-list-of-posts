import React from 'react';
import { type Comment } from '../../types/Comment';
import { type User } from '../../types/User';
import /* array */ comments from '../../api/comments';
import /* array */ postsFromApi from '../../api/posts';
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

export const preparedPost: PreparedPostTypes[] = [...postsFromApi].map(post => {
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

type PostListProps = {
  posts: PreparedPostTypes[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
