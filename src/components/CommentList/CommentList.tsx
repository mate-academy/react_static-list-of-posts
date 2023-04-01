import React from 'react';
import { Comment } from '../../types/types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  list: Comment[];
  idOfPost: number;
};

export const CommentList: React.FC<Props> = ({ list, idOfPost }) => {
  const array = list.filter(
    comment => comment.postId === idOfPost,
  );

  if (array.length > 0) {
    return (
      <ul className="CommentList">
        {array.map(
          comment => (
            <li className="CommentItems">
              <CommentInfo comment={comment} key={comment.id} />
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
