import React from 'react';
import PostList from './components/PostList';
import { comments } from './comments';
import { users } from './users';
import { posts } from './posts';


function App() {
  const postList = posts.map(post => ({...post,
    user: users.find(user => user.id === post.userId),
    postComments: comments.filter(comment => comment.postId === post.id) }));
  return (
    <div className="App">
      <PostList postList={postList} />
    </div>
  );
}

export default App;
