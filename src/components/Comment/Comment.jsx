import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <div className="Comment__author">
      <h5 className="Comment__name">
        {name}
      </h5>
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </div>
    <p className="Comment__body">
      {body}
    </p>
  </>
);

Comment.propTypes = ({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});
