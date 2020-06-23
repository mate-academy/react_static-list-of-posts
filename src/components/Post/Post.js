import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ title, body }) => (
  <>
    <h5 className="card-title">{`Topic: ${title}`}</h5>
    <div className="card-body">
      <p className="card-text">{body}</p>
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export { Post };
