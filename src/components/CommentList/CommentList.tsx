import React from 'react';
import style from './CommentList.module.css';
import { Comment } from '../../types/Types';
import CommentInfo from '../CommentInfo/CommentInfo';

interface Props {
  comments: Comment[],
}

const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h4 className={style.commentsTitle}>Comments</h4>
    <ul>
      {comments.map(comment => (
        <li>
          <CommentInfo
            key={comment.id}
            comment={comment}
          />
        </li>
      ))}
    </ul>
  </>
);

export default CommentList;
