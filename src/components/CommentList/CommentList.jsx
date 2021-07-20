import React from 'react';
import PropTypes from 'prop-types';
import { Coment } from '../Comment';
import { comentTypes } from '../../types';

export function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(coment => (
        <li key={coment.id}>
          <Coment coment={coment} />
        </li>
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(comentTypes).isRequired,
};
