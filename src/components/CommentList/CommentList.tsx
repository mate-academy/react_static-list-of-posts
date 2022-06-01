import React from 'react';
import CommentInfo from '../CommentInfo';
import { Comment } from '../../types/comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      <ul className="comment_list">
        {comments.map(message => (
          <li key={message.id} className="comment_item">
            <CommentInfo {...message} />
          </li>
        ))}
      </ul>
    </>
  );
};
