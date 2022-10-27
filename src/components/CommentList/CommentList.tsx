import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[],
}

export const CommentList: React.FC<Props> = (props) => {
  if (props.comments.length === 0) {
    return (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <ul className="CommentList">
      {props.comments.map(comment => (
        <li
          className="CommentInfo"
          key={comment.id}
        >
          <CommentInfo {...comment} />
        </li>
      ))}
    </ul>
  );
};
