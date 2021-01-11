import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ cmts }) => (
  <>
    <h3>Comment list</h3>

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
