import React from 'react';
import './App.scss';
import Card from 'react-bootstrap/Card';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/index';

const preparedPost = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <Card
      bg="success"
      text="white"
      style={{ width: '18rem' }}
      className="ml-4 mb-2"
    >
      <Card.Header><Card.Title>Static list of posts</Card.Title></Card.Header>
      <Card.Body>
        <Card.Title> Posts: </Card.Title>
        <Card.Text>
          {' '}
          {posts.length}
          {' '}
        </Card.Text>
        <Card.Title> Comments: </Card.Title>
        <Card.Text>
          {' '}
          {comments.length}
          {' '}
        </Card.Text>
        <Card.Title> Users: </Card.Title>
        <Card.Text>
          {' '}
          {users.length}
          {' '}
        </Card.Text>
      </Card.Body>
    </Card>

    <PostList postList={preparedPost} />
  </div>
);

export default App;
