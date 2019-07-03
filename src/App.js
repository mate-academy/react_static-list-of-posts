import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postWithUser = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => comment.postId === post.id),
}));

console.log(postWithUser);
const App = () => (
  <>
    <h1>Static list of posts</h1>
    <PostList posts={postWithUser} />
  </>
);

const PostList = (props) => (
  <>
    {props.posts.map(post => (
      <Post post={post} />
    ))}
  </>
);

const Post = (props) => (
  <section>
    <h2>
      {props.post.title}
    </h2>
    <p>{props.post.body} </p>
    <User user={props.post.user} />
    <CommentList comments={props.post.comments} />
  </section>
);

const User = (props) => (
  <>
    <div>
      author:
      {props.user.name}
    </div>
    <div>
      write me:
      {props.user.email}
    </div>
    <div>
      best regards from:
      {props.user.address.city}
      ,  street:
      {props.user.address.street}
      ,  flat:
      {props.user.address.suite}
      ,  zipcode:
      {props.user.address.zipcode}
    </div>
  </>
);

const CommentList = (props) => (
  <>
    <h5> comments:</h5>
    {props.comments.map(comment => (
      <Comment comment={comment} />
    ))}
  </>
);

const Comment = (props) => (
  <>
    <div>{props.comment.body}</div>
    <div>
      name:
      {props.comment.name}
    </div>
    <div>
      mail:
      {props.comment.email}
    </div>
    <h7> - - - - - - - -</h7>
  </>
);

export default App;
