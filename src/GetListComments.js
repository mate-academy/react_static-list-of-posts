import React from 'react';

export default function GetListComments (comments) {
  return comments.props.map( (comment, index) => {
    return <li key={index + comment.body}>{comment.body}</li>
  })
}
