import React from 'react';
import { Comment } from '../../types/types';
import { CommentInfo } from '../CommentInfo';

type Props = {
  list: Comment[];
  idOfPost: number;
};

export const CommentList: React.FC<Props> = (props) => {
  const array = props.list.find(
    comment => comment.postId === props.idOfPost
    && <CommentInfo comment={comment} key={comment.id} />,
  );

  if (array === undefined) {
    return (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    );
  }

  return (
    <>
      {props.list.map(
        comment => comment.postId === props.idOfPost
        && <CommentInfo comment={comment} key={comment.id} />,
      )}
    </>
  );
};
