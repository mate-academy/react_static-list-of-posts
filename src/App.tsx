import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { CommentTypes } from './types/commentTypes';
import { PostTypes } from './types/postTypes';
import { UserTypes } from './types/userTypes';

interface PostWithUserAndComments extends PostTypes {
  user: UserTypes | null;
  comments: CommentTypes[];
}

function mapPostsByUser(
  posts: PostTypes[], comments: CommentTypes[] | undefined, users: UserTypes[],
): PostWithUserAndComments[] {
  return posts.map((post: PostTypes) => {
    const userForPost: UserTypes | null = users.find(
      (user: UserTypes) => user.id === post.userId,
    ) || null;
    const postComments: CommentTypes[] = (comments ?? []).filter(
      (comment: CommentTypes) => comment.postId === post.id,
    );

    return {
      ...post,
      user: userForPost,
      comments: postComments,
    };
  });
}

const postWithUserAndComments = mapPostsByUser(
  postsFromServer, commentsFromServer, usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList possts1={postWithUserAndComments} />

  </section>
);
