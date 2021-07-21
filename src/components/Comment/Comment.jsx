import React from 'react';
import { ComentTypes } from '../../types';

export function Comment({ comment }) {
  const { name, body, email } = comment;

  return (
    <>
      <li><h4>{name}</h4></li>
      <p>{body}</p>
      <p>{email}</p>
    </>
  );
}

Comment.propTypes = {
  comment: ComentTypes.isRequired,
};
