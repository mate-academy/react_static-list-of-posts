import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Commentary[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(element => (
      <li className="CommentList__comment" key={element.id}>
        <CommentInfo comments={element} />
      </li>
    ))}
  </ul>
);
