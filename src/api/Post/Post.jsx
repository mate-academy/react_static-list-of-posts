import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ title, body }) => (
  <>
    <div className="post-title">
      {title}
    </div>
    <div className="post">
      {body}
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
