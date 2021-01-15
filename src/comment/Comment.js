import React from 'react';
import PropTypes from 'prop-types';
import { commentsType } from '../types/propTypesCollection';

import './Comment.scss';

export const Comment = ({ comment }) => (
  <div className="comment">
    <div>
      {comment.name}
    </div>

    <div>
      {comment.body}
    </div>

    <div>
      {comment.email}
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape(commentsType).isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
