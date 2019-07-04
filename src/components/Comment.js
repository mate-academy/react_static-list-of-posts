import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => (
  <span><b>Post comment: </b>{props.item.body}<br/>
  <b>Comment author: </b>{props.item.name}
  <b> email: </b>{props.item.email}
  </span>
  );

Comment.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Comment;
