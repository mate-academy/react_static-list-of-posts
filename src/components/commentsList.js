import React from 'react';

import { commentsProperties } from './propertiesVar';

export function CommentsList({ comments }) {
  return (
    <div>
      <ul>
        {comments.map(({ id, name, body, email }) => (
          <li key={id}>
            <h4>
              {name}
            </h4>
            {body}
            <br />
            <a href="https://mail.google.com/">
              {email}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

CommentsList.propTypes = commentsProperties;
