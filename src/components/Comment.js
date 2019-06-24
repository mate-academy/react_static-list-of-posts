import React from 'react';

function Comment(props) {
  return (
    <section>
      <p>{props.text}</p>
      <span><strong>{props.author}</strong>, </span>
      <span><a href={props.mailto}>{props.email}</a></span>
    </section>
  )
}

export default Comment;
