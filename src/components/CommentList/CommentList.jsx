import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ cmts }) => (
  <>
    <h5 className="comments">Comments</h5>
    {cmts.map(cmt => (
      <Comment
        key={cmt.id}
        cmts={cmt}
      />
    ))}
  </>
);

CommentList.propTypes = {
  cmts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
