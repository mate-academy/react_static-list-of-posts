import React from 'react';
import './CommentList.scss';
import { CommentListShape } from '../shapes/CommentListShape';
import { CommentShape } from '../shapes/CommentShape';

export const CommentList = ({ comments, hasShownComments }) => (
  <ul className="CommentList" hidden={!hasShownComments}>
    {
      comments.map(comment => (
        <Comment {...comment} />
      ))
    }
  </ul>
);

const Comment = ({ id, name, body, email }) => (
  <li key={id} className="CommentList__item">
    <p className="CommentList__name">{name}</p>
    <p className="CommentList__text">{body}</p>
    <p>{`Email: ${email}`}</p>
  </li>
);

CommentList.propTypes = CommentListShape;
Comment.propTypes = CommentShape;
