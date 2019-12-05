import PropTypes from 'prop-types';
import React from 'react';

const CommentList = ({ findcommet }) => (
  <section className="commentSection">
    {
      findcommet.map(comment => (
        <div key={Math.random()}>
          <h3 className="headers">
            {comment.name}
          </h3>
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
  { findcommet: PropTypes.objectOf(PropTypes.any).isRequired }
);

export default CommentList;
