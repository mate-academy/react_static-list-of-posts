import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ item }) => (
  <span><b>Post comment: </b>{item.body}<br/>
  <b>Comment author: </b>{item.name}
  <b> email: </b>{item.email}
  </span>
  );

Comment.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Comment;
