import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  commentsForPost: Comment[];
}

export const CommentList: React.FC<Props> = (props) => {
  const { commentsForPost } = props;

  return (
    <>
      Comments:
      {commentsForPost.map((commentItem: Comment) => (
        <div>
          <CommentInfo commentItem={commentItem} />
        </div>
      ))}
      <br />
    </>
  );
};
