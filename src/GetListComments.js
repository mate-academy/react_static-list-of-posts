import React from 'react';

export default function GetListComments (comments) {
  return comments.props.map( comment => {
    return <li>{comment.body}</li>
  })
}
