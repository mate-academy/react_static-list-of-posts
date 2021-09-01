import React from 'react';
import { Comments } from '../../types/Comment/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  commentsForPost: Comments[];
}

export const CommentList: React.FC<Props> = (props) => {
  const { commentsForPost } = props;

  return (
    <>
      Comments:
      {commentsForPost.map((commentItem: Comments) => (
        <div className="comment" key="comment.id">
          <CommentInfo commentItem={commentItem} />
        </div>
      ))}
    </>
  );
};
