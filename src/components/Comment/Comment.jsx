import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <>
    <div className="commentHeader">
      <h4 className="commentName">
        {name}
      </h4>
      <p className="commentEmail">
        {email}
      </p>
    </div>
    <p className="commentBody">
      {body}
    </p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
