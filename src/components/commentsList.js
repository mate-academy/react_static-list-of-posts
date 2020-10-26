import React from 'react';

import { commentsListPropTypes } from './propertiesVar';
import { Comment } from './comment';

export const CommentsList = ({ comments }) => (
  <div>
    <ul>
      {comments.map(({ id, name, body, email }) => (
        <li key={id}>
          <Comment name={name} body={body} email={email} />
        </li>
      ))}
    </ul>
  </div>
);

CommentsList.propTypes = commentsListPropTypes;
