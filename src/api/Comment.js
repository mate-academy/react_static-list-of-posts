import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ item }) => (
  <>
    <h2 className="comment__name">
      {item.name}
    </h2>
    <p className="comment__body">
      {'"'}
      {item.body}
      {'"'}
    </p>
  </>
);

Comment.propTypes = { item: PropTypes.objectOf.isRequired };
export default Comment;
