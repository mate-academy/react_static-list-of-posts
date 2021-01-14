import React from 'react';
import PropTypes from 'prop-types';
import { commentsType } from '../types/propTypesCollection';

export const Comment = ({ remark }) => (
  <div className="comment">
    <div>
      {remark.name}
    </div>

    <div>
      {remark.body}
    </div>

    <div>
      {remark.email}
    </div>
  </div>
);

Comment.propTypes = {
  remark: PropTypes.arrayOf(commentsType).isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
