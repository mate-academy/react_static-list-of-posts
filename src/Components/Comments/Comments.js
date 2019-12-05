import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ comments }) => (
  <>
    <h3 className="post__comments--name">{comments.name}</h3>
    <p>{comments.body}</p>
    <p className="comments__text">
      Comments by&nbsp;
      <a href={comments.email} className="link">
        {comments.email}
      </a>
    </p>
  </>
);

Comments.propTypes
  = {
    comments: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default Comments;
