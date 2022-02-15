import React from 'react';
import { Comment } from '../types/Comment';
import { CommentsInfo } from './CommentsInfo/CommentsInfo';

type Props = {
  comms:Comment[];
};

export const CommentsList:React.FC<Props> = ({ comms }) => (
  <ul className="comments__list">
    {comms.map(comm => {
      return (
        <li key={comm.id}>
          <CommentsInfo
            name={comm.name}
            body={comm.body}
            email={comm.email}
          />
        </li>
      );
    })}
  </ul>
);
