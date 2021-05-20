import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <span>
      {`User ${name} (${email}) has left the comment:`}
    </span>
    <p>{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
