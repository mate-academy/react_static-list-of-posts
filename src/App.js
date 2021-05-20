import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPostList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="App__title">STATIC LIST OF POSTS</h1>
    <PostList posts={preparedPostList} />
  </div>
);

export default App;

// const preparedPostList = posts.map(post => ({
//   ...post,
//   user: users.find(user => user.id === post.userId),
//   comments: comments.filter(comment => comment.postId === post.id),
// }));

// const App = () => (
//   <div className="App">
//     <h1>STATIC LIST OF POSTS</h1>
//     <PostList posts={preparedPostList} />
//   </div>
// );

// export default App;

// const PostList = ({ posts }) => (
//   <div>
//     {posts.map(post => (
//       <Post {...post} key={post.id} />
//     ))}
//   </div>
// );

// const Post = ({ title, body, user, comments }) => (
//   <div>
//     <h2>{title}</h2>
//     <p>{body}</p>
//     <User {...user} />
//     <CommentList comments={comments} />
//   </div>
// );

// const User = ({ name, email, address: { city, street } }) => (
//   <div>
//     <p>{name}</p>
//     <p>{email}</p>
//     <p>{`${city}: ${street}`}</p>
//   </div>
// );

// const CommentList = ({ comments }) => (
//   <div>
//     {comments.map(comment => (
//       <div key={comment.id}>
//         <Comment {...comment} />
//       </div>
//     ))}
//   </div>
// );

// const Comment = ({ name, body, email }) => (
//   <div>
//     <h3>{name}</h3>
//     <p>{body}</p>
//     <p>{email}</p>
//   </div>
// );
