import React from 'react';
import './CommentList.scss';
import { Comments } from '../../types/interfaces';
import { CommentInfo } from '../CommentInfo';

type CommentListType = {
  comment: Comments[];
};

export const CommentList: React.FC<CommentListType> = ({ comment }) => (
  <ul className="CommentList" data-cy="comments-list">
    {
      comment.map((elem) => (
        <CommentInfo
          key={elem.id}
          postId={elem.postId}
          id={elem.id}
          name={elem.name}
          body={elem.body}
          email={elem.email}
        />
      ))
    }
  </ul>
);
