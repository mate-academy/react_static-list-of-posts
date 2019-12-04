import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comment }) => (
  <div>
    {' '}
COMMENTS
    {comment
      .map(curCom => <Comment curCom={curCom} key={curCom.id} />)}
  </div>

);

CommentList.propTypes = { comment: PropTypes.objectOf(PropTypes) };
CommentList.defaultProps = { comment: 'no comment' };
export default CommentList;
