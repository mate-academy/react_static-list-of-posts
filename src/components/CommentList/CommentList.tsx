import React from 'react';
import { ListOfComments } from '../../types/ListOfComments';
import CommentInfo from '../CommentInfo/CommentInfo';
import './CommentList.scss';

const CommentList: React.FC<ListOfComments> = ({ listOfComments }) => (
  <ul className="commentsList" data-cy="comments-list">
    {listOfComments.map((comment) => {
      return (
        <>
          <li className="commentItem" key={comment.id}>
            <CommentInfo {...comment} />
          </li>
        </>
      );
    })}
  </ul>
);

export default CommentList;
