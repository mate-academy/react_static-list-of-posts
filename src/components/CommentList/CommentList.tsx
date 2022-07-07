import React from 'react';
import { Comment } from '../../interfaces/interfaces';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comment: Comment[] | undefined;
};

export const CommentList: React.FC<Props> = ({ comment = [] }) => (
  <>
    <ul>
      {comment.map(comm => (
        <li key={comm.id}>
          <CommentInfo
            name={comm.name}
            body={comm.body}
            email={comm.email}
          />
        </li>
      ))}
    </ul>
  </>
);
