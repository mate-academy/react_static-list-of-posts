import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';
import { typeComment } from '../../types';

const CommentList = ({ comments }) => (
  <>
    <p>Comments:</p>
    <ul>
      {comments.map(comment => (
        <Comment comment={comment} key={comments.id} />
      ))
      }
    </ul>
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(typeComment).isRequired,
};

export default CommentList;
