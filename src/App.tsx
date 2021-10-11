import React from 'react';

import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

interface Post {
  id: number,
  title: string,
  body: string,
  user?: User,
  comments?: Comment[],
}

interface Comment {
  id: number,
  name: string,
  body: string,
  email: string,
}

interface User {
  id: number,
  name: string,
  email: string,
}

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => (user.id === post.userId)),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="postList">
      {preparedPosts.map(post => (
        <div className="postInfo">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <div className="userInfo">
            {post.user && (
              <p>
                {post.user.name}
                {post.user.email}
              </p>
            )}
          </div>
          <div className="commentList">
            {post.comments && (post.comments.map(comment => (
              <div className="commentInfo">
                Comments #
                {comment.id}
                <p>
                  <div className="commentInfo__name">
                    {comment.name}
                  </div>
                  <div className="commentInfo__body">
                    {comment.body}
                  </div>
                  <div className="commentInfo__email">
                    {comment.email}
                  </div>
                </p>
              </div>
            )))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default App;
