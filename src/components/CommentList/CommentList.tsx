import React from 'react';
import { Coment } from '../../types/Coment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Coment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  comments.length ? (
    <div className="CommentList">
      {comments.map(coment => (
        <CommentInfo coment={coment} key={coment.id} />
      ))}
    </div>
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  )
);
