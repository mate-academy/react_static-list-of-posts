import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <>
    <section className="post__comments comment">
      <h4 className="comment__title">Comments: </h4>
      {
        comments.map(comment => (
          <div className="comment__main" key={comment.id}>
            <Comment {...comment} />
          </div>
        ))
      }
    </section>
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
