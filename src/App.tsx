import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import { PostList } from './components/PostList';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';

function getAuthor(id: number): User | null {
  const author = usersFromServer.find(user => user.id === id);

  return author || null;
}

function getComments(id: number): Comment[] {
  const comments = commentsFromServer.filter(comment => comment.postId === id);

  return comments;
}

const modifiedList: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getAuthor(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList list={modifiedList} />
    </div>
  </section>
);
