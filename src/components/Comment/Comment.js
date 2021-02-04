import React from 'react';
import { CommentType } from '../../types';

export const Comment = ({ name, body, email }) => (
  <>
    <p>
      <strong>
        {name}
      </strong>
    </p>
    <p>
      <i>{body}</i>
    </p>
    <p>
      <i>
        {email}
      </i>
    </p>
  </>
);

Comment.propTypes = CommentType;
