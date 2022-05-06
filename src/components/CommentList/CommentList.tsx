import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = (props) => {
  const {
    comments,
  } = props;

  return (
    <ul className="comment-list" data-cy="comments-list">
      <h3 className="comments-list__title">Comments:</h3>
      {
        comments.map((everyComment) => (
          <li
            className="comment-list__item"
            key={everyComment.id}
          >
            {
              comments.length && (
                <CommentInfo comments={everyComment} />
              )
            }
          </li>
        ))
      }
    </ul>
  );
};
