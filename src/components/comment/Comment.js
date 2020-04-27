import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ name, email, body }) => (
  <>
    <div className="comment">
      <div className="comment__name comment__indentation">
        <strong>Comment by:</strong> {name}<br />
      </div>
      <div className="comment__email comment__indentation">
        <strong>Email:</strong>
        <a
          href={`mailto:${email}`}
          className="comment__email-link comment__indentation"
        >
          {email}
        </a>
      </div>
    </div>
    <div className="comment__text comment__indentation">
      {body}
    </div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
