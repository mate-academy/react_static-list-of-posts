import React from 'react';
import { commentPropTypes } from '../../types';

export const Comment = ({ comment }) => (
  <>
    <li key={comment.id}>
      {`name of person is: `}
      <strong>
        {comment.name}
      </strong>
      <p>
        {`person comment: `}
        <strong>
          {comment.body}
        </strong>
        <p>
          {`person email is: `}
          <strong>
            {comment.email}
          </strong>
        </p>
      </p>
    </li>
  </>
);

Comment.propTypes = {
  comment: commentPropTypes,
};
Comment.defaultProps = {
  comment: '',
};
