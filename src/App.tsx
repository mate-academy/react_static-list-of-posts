import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostInfo } from './components/PostInfo';

const App: React.FC = () => {
  const preparedPosts = posts.map(post => {
    const user = users.find(person => person.id === post.userId) || null;
    const commentList = comments.filter(comment => comment.postId === post.id);

    return { ...post, user, commentList };
  });

  return (
    <div className="App">
      <h1>Static list of posts</h1>

      <div className="Posts">
        { preparedPosts.map(post => (
          <PostInfo post={post} />
        )) }
      </div>
    </div>
  );
};

export default App;
