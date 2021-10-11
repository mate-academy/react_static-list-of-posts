import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments:Comments[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="commentsListWrapper">
      <h3 className="commentsTitle">Comments:</h3>
      <ul className="commentsList">
        {
          comments.map(comment => {
            return (
              <li className="postListItem">
                <CommentInfo key={comment.id} comment={comment} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};
