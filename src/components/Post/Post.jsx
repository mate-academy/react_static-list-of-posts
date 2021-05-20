import React from 'react';
import PropTypes from 'prop-types';
import { CommentsList } from '../CommentsList/CommentsList';

export const Post = ({ title, body, comments }) => (
  <>
    <h2>
      {title}
    </h2>

    <p>
      {body}
    </p>

    <br />

    <CommentsList comments={comments} />
  </>
);

const TypeComments = PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

  comments: PropTypes.arrayOf(TypeComments).isRequired,
};
