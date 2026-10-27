import React from 'react';

import { CommentType } from '../../types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: CommentType[];
};

export const CommentList: React.FC<Props> = ({ comments }) =>
  comments.map(comment => <CommentInfo key={comment.id} comment={comment} />);
