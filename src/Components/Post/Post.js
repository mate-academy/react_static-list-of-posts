import React from 'react';
import PropTypes from 'prop-types';
import CommentsList from '../Comments/CommentsList';
import User from '../User/User';
import './post.css';
import '../Comments/comments.css';

const Post = ({ post }) => (
  <section className="post container">
    <h1 className="post__header">{post.title}</h1>
    <article>{post.body}</article>
    <div>
      <User info={post.user} />
    </div>
    <h3 className="post__comments comments">Comments</h3>
    <div>
      <CommentsList list={post.comments} />
    </div>
  </section>
);

Post.propTypes
  = {
    post: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default Post;
