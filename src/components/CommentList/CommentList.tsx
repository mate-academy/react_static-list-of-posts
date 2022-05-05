import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

import { Comment } from '../../types/Comment';

interface Props {
  props: Comment[],
}

export const CommentList: React.FC<Props> = ({ props }) => (
  <div className="comments">
    {props.map(comment => (
      <div className="comment" key={comment.id}>
        <CommentInfo props={comment} />
      </div>
    ))}
  </div>
);
