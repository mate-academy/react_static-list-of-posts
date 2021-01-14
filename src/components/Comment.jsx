import React from 'react';
import { CommentType } from './Types';

export const Comment = ({ name, body, email }) => (
  <>
    <p>
      {`${name}, <${email}> commented:`}
    </p>

    <p>
      {body}
    </p>
  </>
);

Comment.propTypes = CommentType;
