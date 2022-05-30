import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface Props {
  postComments: Comments[];
}

export const CommentList: React.FC<Props> = ({ postComments }) => (
  <>
    {postComments.map(el => (
      <div key={el.id} className="comment">
        <CommentInfo singleComment={el} />
      </div>
    ))}
  </>
);
