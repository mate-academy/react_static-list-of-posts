import React from 'react';
import { ComObj } from '../../type';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList: React.FC <ComObj> = (
  {
    comms,
  },
) => (
  <ul>
    {comms.map(com => (
      <li key={com.id}>
        <CommentInfo {...com} />
      </li>
    ))}
  </ul>

);
