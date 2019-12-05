import PropTypes from 'prop-types';
import React from 'react';
import Comment from './Comment';

const CommentList = ({ findcommet }) => (
  <section className="commentSection">
    {
      findcommet.map(comment => (
        <div key={Math.random()}>
          <Comment />
          <p>
            {comment.email}
          </p>
          <p>
            {comment.body}
          </p>
        </div>
      ))
    }
  </section>
);

CommentList.propTypes = (
  { findcommet: PropTypes.arrayOf(PropTypes.any).isRequired }
);

export default CommentList;
