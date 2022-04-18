import React from 'react';
import PostList from './components/PostList/PostList';
import './App.scss';
import { Post } from './types/Post';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => {
  const targetUser = users.find(currentUser => currentUser.id === post.userId);
  const targetCommentsList
    = comments.filter(comment => comment.postId === post.id);

  return ({
    ...post,
    user: targetUser || {
      name: 'Is not defined',
      email: 'Is not defined',
    },
    commentsList: targetCommentsList,
  });
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="appTitle">Static list of posts</h1>
    <PostList postArray={preparedPosts} />
  </div>
);

export default App;
