import React from 'react';
import PostsList from './PostsList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function App() {
  const getPostsFull = (postList, userList, commentList) => {
    const postArr = [...postList];

    return postArr.map((post) => {
      const user = userList.find(person => person.id === post.userId);
      const postComments = commentList
        .filter(comment => comment.postId === post.id);

      return {
        ...post,
        user,
        postComments,
      };
    });
  };

  const preparedPosts = getPostsFull(posts, users, comments);

  return (
    <div className="App">
      <PostsList posts={preparedPosts} />
    </div>
  );
}

export default App;
