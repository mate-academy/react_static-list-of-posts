import React from 'react';
import { PostComment } from '../../appTypeDefs';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface CommentListProps {
  postComments: PostComment[];
}

export const CommentList: React.FC<CommentListProps> = ({ postComments }) => {
  return (
    <>
      {postComments.map(postComment => (
        <section className="Comment" key={postComment.id}>
          <CommentInfo comment={postComment} />
        </section>
      ))}
    </>
  );
};
