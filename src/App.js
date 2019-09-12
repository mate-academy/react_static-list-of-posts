import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostsList from './components/PostsList/PostsList';

function getPostWithProps(postsArr, usersArr, commentsArr) {
  return postsArr.map(post => ({
    ...post,
    user: usersArr.find(user => user.id === post.userId),
    comments: commentsArr.filter(comments => {

      return comments.postId === post.id
    }
      ),
  }));
}
const preparedProps  = getPostWithProps(posts, users, comments);
const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostsList posts={preparedProps} />
  </div>
);
export default App;
