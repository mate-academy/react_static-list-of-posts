import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ item }) => {
  const { name, body, email } = item.comments;

  return (
    <>
      <p>{name}</p>
      <p>{body}</p>
      <p>{email}</p>
    </>
  );
};

CommentList.propTypes = {
  item: PropTypes.string.isRequired,
};

export default CommentList;
