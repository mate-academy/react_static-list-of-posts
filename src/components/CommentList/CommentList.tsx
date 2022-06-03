import React from 'react';
import { PropsCom } from '../../type';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList: React.FC <PropsCom> = (
  {
    comms,
  },
) => (
  <>
    <h2>Comments:</h2>
    <ul className="commlist">
      {comms.map(com => (
        <li key={com.id} className="commlist__item">
          <CommentInfo comInfo={com} />
        </li>
      ))}
    </ul>
  </>
);
