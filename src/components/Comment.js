import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <>
    <div className="comment">
      <p className="author">
        Сomment author:&nbsp;
        {name}
      </p>
      <p>{body}</p>
      <p className="email">
        Email:&nbsp;
        {email}
      </p>
    </div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
