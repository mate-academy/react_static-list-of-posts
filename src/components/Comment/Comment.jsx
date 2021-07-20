import React from 'react';
import { comentTypes } from '../../types';

export function Coment({ coment }) {
  const { name, body, email } = coment;

  return (
    <>
      <li><h4>{name}</h4></li>
      <p>{body}</p>
      <p>{email}</p>
    </>
  );
}

Coment.propTypes = {
  coment: comentTypes.isRequired,
};
