import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../types';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => (
      <Comment {...comment} />
    ))
    }
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentType)).isRequired,
};
