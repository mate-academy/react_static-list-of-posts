import React from 'react';

import { Comment } from '../Comment';
import { commentPropType } from '../propTypes/comment';

export const CommentList = ({ comment }) => (
  <>
    {
      comment.map(commentary => (
        <Comment {...commentary} key={commentary.id} />
      ))
    }
  </>
);

CommentList.propTypes = commentPropType;
