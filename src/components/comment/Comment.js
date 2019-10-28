import React from 'react';

const Comment = ({comment}) => (
  <div>
    <h6>{comment.name}</h6>
    <h5>{comment.body}<hr /></h5>
  </div>
);

export default Comment;
