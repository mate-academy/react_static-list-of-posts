import React from 'react';
import { Comment, ListProp } from '../../typedefs';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList: React.FC<ListProp<Comment>> = (listProp) => (
  <ul>
    {listProp.list.map(comment => (
      <li key={comment.id} className="comment">
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>
);
