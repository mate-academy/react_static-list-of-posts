import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';
import CommentList from '../CommentList';

const Post = ({
  title,
  body,
  user,
  comment,
}) => (
  <>
    <h2>
      {title}
    </h2>
    <p>
      {body}
    </p>
    <User {...user} />
    <CommentList comment={comment} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Post;
