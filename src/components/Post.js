import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './Commentlist';

const Post = props => (
  <section>
    <h2>
      {props.post.title}
    </h2>
    <p>
      {props.post.body}
    </p>
    <User user={props.post.user} />
    <CommentList comments={props.post.comments} />
  </section>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
    comments: PropTypes.object,
  }).isRequired,
};

export default Post;
