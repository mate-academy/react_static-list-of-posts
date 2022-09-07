import React from 'react';
import { CommentFromServer } from '../../types/CommentFromServer';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: CommentFromServer[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <div className="CommentList">
      {comments.map((comment) => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  </>
);
