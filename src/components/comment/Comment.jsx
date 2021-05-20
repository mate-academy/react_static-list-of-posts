import React from 'react';
import PropTypes from 'prop-types';

export function Comment({ name, body, email }) {
  const emailLink = `mailto:${email}`;

  return (
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
        <div className="blockquote-footer">
          {'Author: '}
          <a href={emailLink}>{email}</a>
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
