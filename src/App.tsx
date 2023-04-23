import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

type InitialPosts = Omit<Post, 'user' | 'comments'>;

function getInformativePosts(initialPosts: InitialPosts[]): Post[] {
  return initialPosts.map(post => ({
    ...post,
    user: usersFromServer.find(userFind => userFind.id === post.userId) || null,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));
}

const posts: Post[] = getInformativePosts(postsFromServer);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
