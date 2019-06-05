import React from 'react';
import Comment from './Comment';
import { comments } from '../comments';
import './CommentList.css';

export default function CommentList(props) {
  debugger;
  const currentComments = comments.filter(comment => {
    return comment.postId === props.postId;
  });

  const renderedComments = [];

  currentComments.forEach(comm => {
    renderedComments.push(
      <Comment name={comm.name} email={comm.email} body={comm.body} />
    );
  });
  return <div className='comment-list'>{renderedComments}</div>;
}
