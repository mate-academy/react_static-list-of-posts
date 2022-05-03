import React from 'react';
import CommentInfo from './CommentInfo/CommentInfo';
import { Comment } from '../../Types';

type Props = {
  commentsData : Comment[];
};

const CommentList :React.FC<Props> = ({ commentsData }) => {
  return (
    <div>
      <h3>Comment info:</h3>
      {commentsData.map(commentItem => {
        const { name, email, body } = commentItem;

        return (
          <CommentInfo
            name={name}
            email={email}
            body={body}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
