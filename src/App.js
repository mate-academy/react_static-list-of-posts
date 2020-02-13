import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/Postlist/PostList';

const App = () => {
  const postsInformation = posts.map(post => (
    {
      ...post,
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id),
    }
  ));

  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList postsInformation={postsInformation} />
    </div>
  );
};

App.defaultProps = {
  post: {},
  user: {},
};

App.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
  }),

  user: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default App;
