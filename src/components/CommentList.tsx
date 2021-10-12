import React from "react";
import { Comment } from "../Types";
import { CommentInfo } from "./CommentInfo";

export const CommentList: React.FC<{comments:Comment[]}> = ({comments}) => (
  <div className="posts__comments comments">
    {comments.map((comment) => <CommentInfo comment={comment}/>)}
  </div>

)