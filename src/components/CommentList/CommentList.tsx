import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/index';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.length > 0
          // eslint-disable-next-line max-len
          ? comments.map((comment) => <CommentInfo comment={comment} key={comment.id} />)
          : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
