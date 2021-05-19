import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="list-group mt-3">
    <div className="list-group-item">
      <h4 className="display-6">{name}</h4>
      <blockquote className="blockquote">
        <p className="lead p-3">
          <i>
            &quot;
            {body}
            &quot;
          </i>
        </p>
      </blockquote>
      <figcaption className="blockquote-footer">
        {'Author: '}
        {email}
      </figcaption>
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
