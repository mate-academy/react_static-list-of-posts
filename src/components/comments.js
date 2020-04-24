import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ item }) => (
  item.comment.map(comm => (
    <div className="post__comment comment" key={comm.id}>
      <p className="comment__name">{comm.name}</p>
      <p className="comment__body">{comm.body}</p>
      <a href="gmail.com" className="comment__link">
        <p className="comment__email">{comm.email}</p>
      </a>
    </div>
  ))
);

Comments.propTypes = {
  item: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comments;
