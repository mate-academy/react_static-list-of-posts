import React from 'react';
import { Comment } from '../../types/Types';
import './CommentInfo.scss';

type Props = {
  comments: Comment[] | null,
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <div className="CommentInfo">
    <ul className="CommentInfo--List">
      {comments?.map(comment => (
        <div className="CommentInfo--List_Style" key={comment.id}>
          <li className="CommentInfo--List_Item">
            {`${comment.body}`}
          </li>
          <a className="CommentInfo--Email" href="email">
            {`${comment.email}`}
          </a>
        </div>
      ))}
    </ul>
  </div>
);
