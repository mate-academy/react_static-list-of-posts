import React from 'react';
import 'bulma/css/bulma.min.css';

import postsAPI from './api/posts';
import commentsAPI from './api/comments';
import usersAPI from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

const App: React.FC = () => {
  const preparedPosts: Post[] = postsAPI.map(post => {
    const user = usersAPI.find(({ id }) => id === post.id) || null;
    const comments = commentsAPI.filter(({ postId }) => postId === post.id);

    return {
      ...post,
      user,
      comments,
    };
  });

  return (
    <div className="section">
      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;
