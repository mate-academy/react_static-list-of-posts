import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ title, body }) => (
  <>
    <article className="post">
      <h2 className="post__header">{title}</h2>
      <p className="post__text">{body}</p>
    </article>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default Post;
