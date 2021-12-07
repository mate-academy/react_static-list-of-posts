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

    {(comments.length > 0) ? (
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <p>0 comments</p>
    )}
  </>
);

export default CommentList;
