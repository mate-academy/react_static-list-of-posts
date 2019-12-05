import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

function getPostsComment() {
  return posts.map(item => ({
    ...item,
    user: users.find(elem => item.userId === elem.id),
    commentsArray: comments.filter(elem => elem.postId === item.id),
  }));
}

const postsComment = getPostsComment();

const App = () => (
  <>
    <div className="App">
      <PostList posts={postsComment} />
    </div>
  </>
);

export default App;
