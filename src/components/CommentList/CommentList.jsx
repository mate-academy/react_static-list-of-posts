import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './CommentList.scss';
import { CommentType } from '../Types';

export const CommentList = ({ comments }) => (
  <div>
    <p className="post__comments">Comments:</p>
    <ul>
      {
        comments.map(comment => (
          <Comment {...comment} key={comment.id} />
        ))
      }
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
