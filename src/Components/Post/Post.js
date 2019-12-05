import React from 'react';
import PropTypes from 'prop-types';
import Comments from '../Comments/Comments';
import UserList from '../UserList/UserList';
import './post.css';
import '../Comments/comments.css';

const Post = ({ post }) => (
  <section className="post">
    <h1>{post.title}</h1>
    <article>{post.body}</article>
    <div>
      {post.user.map(person => <UserList info={person} />)}
    </div>
    <h3 className="post__comments comments">Comments</h3>
    <div>
      {post.comments.map(item => <Comments comments={item} />)}
    </div>
  </section>
);

Post.propTypes
  = {
    post: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default Post;
