import React from 'react';

import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../type/Comments';

type Props = {
  comments: Comments[] | null,
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (comments === null
    ? (<b data-cy="NoCommentsMessage">No comments yet</b>)
    : (
      <div className="CommentList">
        {comments.map(comment => (
          <React.Fragment key={comment.id}>
            <CommentInfo comment={comment} />
          </React.Fragment>
        ))}
      </div>
    )
  );
};
