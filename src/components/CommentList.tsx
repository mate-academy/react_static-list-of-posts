import React from 'react';
import { CommentType } from '../types/CommentType';
import { CommentInfo } from './CommentInfo';

interface Props {
  coms: CommentType[];
}

export const CommentList: React.FC<Props> = ({ coms }) => (
  <div className="comment__list">
    {coms.map(com => {
      return (
        <div
          className="comment__content"
          key={com.id}  
        >
          <CommentInfo {...com} />
        </div>
      );
    })}
  </div>
);
