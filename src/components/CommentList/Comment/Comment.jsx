import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ oneComment }) => (
  <div className="commentaries">
    Commentaries:
    <p className="commentName">{oneComment.name}</p>
    <p className="commentText">{oneComment.body}</p>
    <p className="commentEmail">{oneComment.email}</p>
  </div>
);

Comment.propTypes = {
  oneComment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
