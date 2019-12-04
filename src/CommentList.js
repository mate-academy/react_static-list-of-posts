import PropTypes from 'prop-types';
import React from 'react';
import comments from './api/comments';

const CommentList = ({ comment }) => {
  const findcommet = comments.find(commentId => (
    commentId.postId === comment.id
  ));

  return (
    <section className="commentSection">
      <h2 className="headers">
        comments
      </h2>
      <h3 className="headers">
        {findcommet.name}
      </h3>
      <p>
        {findcommet.email}
      </p>
      <p>
        {findcommet.body}
      </p>
    </section>
  );
};

CommentList.propTypes = (
  { comment: PropTypes.objectOf(PropTypes.any).isRequired }
);

export default CommentList;
