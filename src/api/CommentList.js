import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comment }) => (
  comment.map(items => <Comment item={items} />)
);

CommentList.propTypes = { comment: PropTypes.objectOf.isRequired };
export default CommentList;
