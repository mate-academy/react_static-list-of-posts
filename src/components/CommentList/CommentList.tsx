import React from 'react';
import { Coment, CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Coment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="coments">
    {comments.map(comment => (
      <li className="comment" key={comment.id}>
        <CommentInfo
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      </li>
    ))}
  </ul>
);
