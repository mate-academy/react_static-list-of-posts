import React from 'react';
import Comment from '../Comment';
import CommentShape from '../../Types';

const CommentList = ({ comments, postId }) => (
  <>
    <span>Comment TEST</span>
    <span>
      {comments.filter(comm => comm.postId === postId).map(person => (
        <Comment
          name={person.name}
          email={person.email}
          body={person.body}
        />
      ))}
    </span>
  </>
);

CommentList.propTypes = CommentShape.isRequired;

export default CommentList;
