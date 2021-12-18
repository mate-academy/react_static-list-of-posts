import React from 'react';
import CommentsInfo from '../CommentInfo/CommentInfo';
import { Comments } from '../types/Comment';

type Props = {
  comment: Comments[],
};

const CommentsList: React.FC<Props> = ({ comment }) => (
  <ul>
    <h4>Comments:</h4>
    <CommentsInfo comment={comment} />
  </ul>
);

export default CommentsList;
