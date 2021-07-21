import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <>
    <div className="message">
      <h2 key={name} className="message-header title is-6">
        {`${name[0].toUpperCase()}${name.substring(1)}`}
        <button className="delete" aria-label="delete" type="button" />
      </h2>
      <p key={body} className="content">
        {`${body[0].toUpperCase()}${body.substring(1)}.`}
      </p>
      <p key={email} className="tag is-light">
        Commented by:
        {` ${email}`}
      </p>
    </div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
