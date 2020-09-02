import React from 'react'
import PropTypes from 'prop-types';
import '../comment/comment.css';

function Comment({body, name, email, id}) {
  return (
    <>
      <div className="comment__info">
        <p className="comment__email">
          <a href="#">
            {email}
          </a>
        </p>
        <h3 className="comment__name">
          {name}
        </h3>
      </div>
      <p class="comment__content">
        {body}
      </p>
    </>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Comment;

