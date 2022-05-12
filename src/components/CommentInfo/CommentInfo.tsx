import React from "react";
import { CommentType } from "../../types/CommentType";
import './CommentInfo.scss';

type Props = {
  comment: CommentType | null,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <p className="email">Email: {comment?.email}</p>
);
