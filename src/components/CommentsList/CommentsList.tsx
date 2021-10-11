import React from 'react';
import './CommentsList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../types/Comment';

type Props = {
  // eslint-disable-next-line react/require-default-props
  comments?: Comment[],
};

export const CommentsList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <ul>
      <h3 className="comments-title">Comments:</h3>
      {comments?.map(item => <li key={item.id}><CommentInfo comment={item} /></li>)}
    </ul>
  );
};
