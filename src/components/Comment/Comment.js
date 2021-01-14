import React from 'react';
import { TypeComment } from '../../types';

export const Comment = ({ opinion }) => (
  <>
    <p>{opinion.body}</p>
    <p>
      <span>{opinion.name}</span>
      {' '}
      <br />
      <span>{opinion.email}</span>
    </p>
  </>
);

Comment.propTypes = TypeComment;
