import React from 'react';
import Comment from './Comment';

export default function CommentList(props) {
  const comment = props.commentsList.map(currComment => {
    return (
      <Comment
        name={currComment.name}
        email={currComment.email}
        body={currComment.body}
        key={currComment.id}
      />
    );
  });
  return comment;
}
