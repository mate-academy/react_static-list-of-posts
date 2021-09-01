import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  commentsDataList: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { commentsDataList } = props;

  return (
    <div className="comments">
      <h3 className="comments__heading">Comments: </h3>

      <ul className="comments__list">
        {
          commentsDataList.map(comment => (
            <li key={comment.id} className="comments__item">
              <CommentInfo commentData={comment} />
            </li>
          ))
        }

      </ul>
    </div>
  );
};
