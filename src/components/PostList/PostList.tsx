import React from 'react';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { Comment } from '../../types/comment';
import { FullPost } from '../../react-app-env';
import postsFromServer from '../../api/posts';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';
import { PostInfo } from '../PostInfo';

const preparePosts = (
  posts: Post[],
  users: User[],
  comments: Comment[],
): FullPost[] => {
  return posts.map((post) => ({
    ...post,
    user: users.find((user) => user.id === post.userId),
    comments: comments.filter((comment) => (
      comment.postId === post.id
    )),
  }));
};

const preparedPosts = preparePosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const PostList: React.FC = () => (
  <div className="PostList">
    {preparedPosts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
