import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../types';

export const Comment = function Comment({ name, body, email }) {
  return (
    <React.Fragment>
      <p>
        <strong>{name}</strong>
      </p>
      <p>
        <p>
          {body}
        </p>
        <p className="tag is-link is-normal">
          {`Commented by: ${email}`}
        </p>

      </p>

    </React.Fragment>
  );
};

Comment.propTypes = PropTypes.shape(CommentType).isRequired;
