import React from 'react';
import './CommentList.scss';
import { ComentType } from '../../types/ComentType';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: ComentType[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(coment => (
      <CommentInfo
        comment={coment}
        key={coment.id}
      />
    ))}
  </div>
);
