import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './Components/PostList';

function capitalize(string: string) {
  return `${string.charAt(0).toUpperCase() + string.slice(1)}.`;
}

const preparedPosts = posts.map(item => {
  const user = users.filter(person => item.userId === person.id);
  const commentForId = comments.filter(comm => item.id === comm.postId);
  const comment = commentForId.map(comm => ({
    ...comm,
    name: capitalize(comm.name),
    body: capitalize(comm.body),
  }));

  return {
    userName: user,
    commentText: comment,
    ...item,
    title: capitalize(item.title),
    body: capitalize(item.body),
  };
});

const App: React.FC = () => (
  <>
    <h1>Static list of posts</h1>
    <div className="App">
      <PostList postsArray={preparedPosts} />
    </div>
  </>
);

export default App;
