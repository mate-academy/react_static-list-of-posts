import React from 'react';
import { CommentInfo } from '../CommentInfo';

type Props = {
  postComments: PostComment[] | null,
};

export const CommentList: React.FC<Props> = ({ postComments }) => (
  <ul>
    {postComments?.map(postComment => (
      <CommentInfo postComment={postComment} />
    ))}
  </ul>
);
