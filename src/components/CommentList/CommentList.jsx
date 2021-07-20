import React from 'react';
import { Coment } from '../Comment';

export function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(coment => (
        <li>
          <Coment coment={coment} />
        </li>
      ))}
    </ul>
  );
}
