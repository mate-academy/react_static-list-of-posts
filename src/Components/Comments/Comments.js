import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ comments }) => (
  <>
    <h3 className="post__comments--name">{comments.name}</h3>
    <p>{comments.body}</p>
    <p>
      Comments by
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="link">{comments.email}</a>
    </p>
  </>
);

Comments.propTypes
  = {
    comments: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default Comments;
