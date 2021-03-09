import React from 'react';
import './CommentList.scss';

import { Comment } from '../Comment';
import { TypeComments } from '../../Types/types';

export function CommentList({
  comments,
}) {
  const renderedComments = comments.map((comment) => {
    const { body, email, id, name } = comment;

    return (
      <Comment
        key={id}
        body={body}
        email={email}
        name={name}
      />
    );
  });

  return (
    <>
      <p className="comment__text">Comments:</p>
      <ul className="comment__list">
        {renderedComments}
      </ul>
    </>
  );
}

CommentList.propTypes = {
  comments: TypeComments.isRequired,
};
