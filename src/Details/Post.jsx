import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';
import './Post.css';

function Post({ tittle, body, user, comments }) {
  return (
    <div className="post">
      <h3>{tittle}</h3>

      <div>
        <b>Info: </b>
        {body}
      </div>

      <User user={user} />
      <CommentList comments={comments} />
    </div>
  );
}

Post.propTypes = {
  tittle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
