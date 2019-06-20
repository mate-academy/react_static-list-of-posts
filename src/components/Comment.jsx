import React from 'react';

export default function Comment(props) {
  const { id, name, body } = props.item;
  return (
    <div key={id} className="comment">
      <h5>{name}</h5>
      <p>{body}</p>
    </div>
  );
}
