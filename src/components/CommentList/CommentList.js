import React from 'react';
import './CommentList.scss';
import { CommentListShape } from '../shapes/CommentListShape';
import { CommentShape } from '../shapes/CommentShape';

export const CommentList = ({ comments, hasShownComments }) => (
  <ul className="CommentList" hidden={!hasShownComments}>
    {
      comments.map(comment => (
        <li key={comment.id} className="CommentList__item">
          <Comment {...comment} />
        </li>
      ))
    }
  </ul>
);

const Comment = ({ name, body, email }) => (
  <>
    <p className="CommentList__name">{name}</p>
    <p className="CommentList__text">{body}</p>
    <p>{`Email: ${email}`}</p>
  </>
);

CommentList.propTypes = CommentListShape;
Comment.propTypes = CommentShape;
