import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';

export const CommentList = ({ commentsFilter }) => (
  <div className="comments">
    {commentsFilter.map(comment => (
      <div className="comment__item">
        <Comment {...comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  commentsFilter: PropTypes.arrayOf.isRequired,
};
