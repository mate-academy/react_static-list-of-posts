import { FC } from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import FullPost, { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { PostList } from './components/PostList/PostList';

function preparePosts(posts: Post[], comments: Comment[], users: User[]): FullPost[] {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

const preparedPosts = preparePosts(postsFromServer, commentsFromServer, usersFromServer);

const App: FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
