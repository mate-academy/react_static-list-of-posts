import React from 'react';
import { Comment } from '../../types';

type Prop = {
  postComments: Comment[];
};

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const CommentList: React.FC<Prop> = ({ postComments }) => {
  return (
    <ul className="CommentList">
      {postComments.map((comment: Comment) => (
        <li key={comment.id} className="comment">
          <h3>{comment.name}</h3>
          <div className="comment__info">
            <div>
              {randomDate(new Date(2010, 0, 1), new Date()).toDateString()}
            </div>
            <div>
              {comment.email}
            </div>
          </div>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};
