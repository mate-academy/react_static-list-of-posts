import React from 'react';

import { commentType } from '../../Types';

export function Comment({ name, body, email }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{body}</p>
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </>
  );
}

Comment.propTypes = {
  ...commentType.isRequired,
};
