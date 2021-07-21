import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <p>
      <span>posts: </span>
      {posts.length}
    </p>

    <p>
      <span>comments: </span>
      {comments.length}
    </p>

    <p>
      <span>Users: </span>
      {users.length}
    </p>
    <PostList />
  </div>
);

const PostList = () => (
  <ol className="postList list-group list-group-numbered">
    {preparedPosts.map(post => (
      <li className="list-group-item list-group-item-action">
        <ul className="post list-group" key={post.id}>
          <li className="list-group-item list-group-item-action">
            <h1 className="title">
              {post.title}
            </h1>
          </li>
          <li className="list-group-item list-group-item-action">
            {post.body}
          </li>
          <li className="list-group-item list-group-item-action">
            <ul className="user list-group">
              <li className="list-group-item list-group-item-action">
                {post.user.name}
              </li>
              <li className="list-group-item list-group-item-action">
                {post.user.email}
              </li>
              <li className="list-group-item list-group-item-action">
                {`${post.user.address.street} ${post.user.address.suite}`
                + `${post.user.address.city} ${post.user.address.zipcode}`}
              </li>
            </ul>
          </li>
          <li className="list-group-item list-group-item-action">
            <ol className="commentList list-group list-group-numbered">
              {post.comments.map(comment => (
                <li className="comment list-group-item-action">
                  <ul>
                    <li className="list-group-item list-group-item-action">
                      <strong>Name: </strong>
                      {comment.name}
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <strong>Message: </strong>
                      {comment.body}
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <strong>Email: </strong>
                      {comment.email}
                    </li>
                  </ul>
                </li>
              ))}
            </ol>
          </li>
        </ul>
      </li>
    ))}
  </ol>
);

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

export default App;
