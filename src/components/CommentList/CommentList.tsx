import React from 'react';
import { Comment } from '../../types/types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  list: Comment[];
  idOfPost: number;
  key: number;
};

export const CommentList: React.FC<Props> = ({ list, idOfPost, key }) => {
  if (list.length > 0) {
    return (
      <ul className="CommentList">
        {list.map(
          comment => (
            <li className="CommentItems" key={key}>
              <CommentInfo comment={comment} idOfPost={idOfPost} />
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
