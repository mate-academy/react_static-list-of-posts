import React from 'react';
import PropTypes from 'prop-types';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

import './App.css';
import './components/Post.css';
import './components/Comment.css';
import './components/CommentsList.css';
import './components/Authors.css';
import './components/PostList.css';

const postWithUsersAndComments = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId),
    postComments: comments.filter(comment => comment.postId === post.id),
  }
));

const App = () => (
  <div className="App">
    <PostList />
  </div>
);

const PostList = () => {
  const postBlock = postWithUsersAndComments.map(post => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div className="post-list">
      <h1>Static list of posts</h1>
      {postBlock}
    </div>
  );
};

const Post = props => (
  <section className="post">
    <h3 className="post__header">{props.post.title}</h3>

    <div className="post__content-wrapper">
      <p className="post__body">
        {props.post.body}
      </p>

      <Authors key={props.post.user.id} user={props.post.user} />
      <CommentsList comments={props.post.postComments} />
    </div>
  </section>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
    postComments: PropTypes.array,
  }).isRequired,
};

const Authors = (props) => {
  const address = Object.values(props.user.address)
    .filter(item => typeof item !== 'object')
    .join(', ');

  return (
    <p className="post___author">
      <span>{props.user.username}</span>
      <span>{props.user.email}</span>
      <span>{address}</span>
    </p>
  );
};

Authors.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
  }).isRequired,
};

const CommentsList = (props) => {
  const postComment = props.comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ));

  return (
    <div className="post__comment-list">
      <h4 className="post__comment-list-header">Comments</h4>
      {postComment}
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Comment = props => (
  <div className="post_comment">
    <p className="post__comment-body">{props.comment.body}</p>
    <p className="post__comment-author">
      <span>{props.comment.name}</span>
      <span>{props.comment.email}</span>
    </p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object])).isRequired,
};

export default App;
