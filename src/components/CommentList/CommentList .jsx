import React from 'react';
import { Comment } from './Comment';

export const CommnentList = ({ comments }) => (
  comments.map(currentCommnent => <Comment oneComment={currentCommnent} />)
);
