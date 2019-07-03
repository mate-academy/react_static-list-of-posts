import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Comment = ({ item }) => (
  <div className="comment-list__comment">
    <User email={item.email} />
    <div>
      <h4>{item.name || null}</h4>
      <p>{item.body}</p>
    </div>
  </div>
);

Comment.propTypes = {
  item: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
