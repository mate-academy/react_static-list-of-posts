import React from 'react';
import { Comments } from '../types/Comment';

type Props = {
  comment: Comments[],
};

const CommentsInfo: React.FC<Props> = ({ comment }) => (
  <>
    {comment.map(com => (
      <li key={com.id}>
        <p>{`${com.name} - ${com.email}`}</p>
        <p>{com.body}</p>
      </li>
    ))}
  </>
);

export default CommentsInfo;
