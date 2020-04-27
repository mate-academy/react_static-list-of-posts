import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ item }) => {
  const { name, body, email } = item;

  return (
    <li className="li__inside">
      <p>{name}</p>
      <p>{body}</p>
      <p>{email}</p>
    </li>
  );
};

CommentList.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentList;
