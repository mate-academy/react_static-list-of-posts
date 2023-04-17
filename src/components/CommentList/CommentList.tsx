import React from 'react';
import { Comment } from '../../types/types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  list: Comment[];
};

export const CommentList: React.FC<Props> = ({ list }) => {
  if (list.length > 0) {
    return (
      <ul className="CommentList">
        {list.map(
          comment => (
            <li className="CommentItems" key={comment.id}>
              <CommentInfo comment={comment} />
            </li>
          ),
        )}
      </ul>
    );
  }

  return (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  );
};
