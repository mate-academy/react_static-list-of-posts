import React from 'react';
import { Comments } from '../../types/Comments/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  commentsForPost: Comments[];
}

export const CommentList: React.FC<Props> = (props) => {
  const { commentsForPost } = props;

  return (
    <>
      Comments:
      {commentsForPost
        .map((commentItem: Comments) => <CommentInfo commentItem={commentItem} />)}
    </>
  );
};
