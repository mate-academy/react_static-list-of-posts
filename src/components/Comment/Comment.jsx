import React from 'react';
import PropTypes from 'prop-types';

import '../Comment/comment.scss';

const Comment = ({ name, body, email}) => (
  <div className='comment'>
    <p>{body}</p>
    <p className>
      {name}
      <br />
      <a href={`mailto: ${email}`}>{email}</a>
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
