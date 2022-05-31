import React from 'react';
import './CommentList.scss';
import {CommentInfo} from "../CommentInfo/CommentInfo";

type Props = {
  comments: Comments[]
}

export const CommentList: React.FC<Props> = ({ comments}) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo comment={comment}/>
      </li>
    ))}
  </ul>
);
