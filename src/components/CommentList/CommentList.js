import React from 'react';
import { TypeOfCommentsList } from '../../types';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))
    }
  </div>
);

CommentList.propTypes = TypeOfCommentsList.isRequired;
