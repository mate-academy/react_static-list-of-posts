import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comment: Comment[] | null,
};

export const CommentList: React.FC<Props> = (props) => {
  const {
    comment,
  } = props;

  return (
    <>
      <ul className="comment-list" data-cy="comments-list">
        <h3 className="comments-list__title">Comments:</h3>
        {
          comment
            ? comment.map((everyComment) => (
              <li
                className="comment-list__item"
                key={everyComment.id}
              >
                <CommentInfo comment={everyComment} />
              </li>
            ))
            : 'No comments'
        }
      </ul>
    </>
  );
};
