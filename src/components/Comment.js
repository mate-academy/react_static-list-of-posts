import React from 'react';
import PropTypes from 'prop-types';

import { CommentPropTypes } from './propTypes/CommentPropTypes';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <div className="Comment__author">
      {`${name.slice(0, 15)} — ${email}`}
    </div>
    <p className="Comment__text">
      {body}
    </p>
  </>
);

Comment.propTypes = PropTypes.shape(CommentPropTypes).isRequired;
