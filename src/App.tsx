import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';

type InitialPosts = Omit<Post, 'user' | 'comments'>;

function findUserById(users: User[], userId: number): User | null {
  return users.find(userFind => userFind.id === userId) || null;
}

function findCommentsByPostId(comments: Comment[], postId: number): Comment[] {
  return comments.filter(comment => comment.postId === postId);
}

function getInformativePosts(initialPosts: InitialPosts[]): Post[] {
  return initialPosts.map(post => ({
    ...post,
    user: findUserById(usersFromServer, post.userId),
    comments: findCommentsByPostId(commentsFromServer, post.id),
  }));
}

const posts: Post[] = getInformativePosts(postsFromServer);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
