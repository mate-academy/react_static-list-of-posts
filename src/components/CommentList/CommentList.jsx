import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

import './CommentList.scss';

export const CommentList = ({ cmts }) => (
  <div className="Comment-list">
    <h5 className="comment-list_title">Comments</h5>
    {cmts.map(cmt => (
      <Comment
        key={cmt.id}
        cmts={cmt}
      />
    ))}
  </div>
);

CommentList.propTypes = {
  cmts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
