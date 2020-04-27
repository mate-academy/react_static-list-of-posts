import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ item }) => {
  const { title, body } = item;

  return (
    <>
      <h2>
        {title}
      </h2>
      <p>
        {body}
      </p>
      <User item={item} />
      <CommentList item={item} />
    </>
  );
};

Post.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Post;
