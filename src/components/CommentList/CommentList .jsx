import React from 'react';
import { Comment } from './Comment';

export const CommnentList = ({ comments }) => (
  comments.map(com => <Comment key={com.id} oneComment={com} />)
);
