import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ curCom }) => {
  const { email, body } = curCom;

  return (
    <div className="comment">
      <h5>{email}</h5>
      <h5>{body}</h5>
    </div>

  );
};

Comment.propTypes = { curCom: PropTypes.objectOf(PropTypes) };
Comment.defaultProps = {
  curCom: {
    email: 'no email',
    body: 'no content',
  },
};

export default Comment;
