import React from 'react';

export default function Comment(props) {
  return (
    <div key={props.name} className="comment">
      <h2>{props.name}</h2>
      <p>{props.body}</p>
      <a href={"mailto:" + props.email}>{props.email}</a>
    </div>
  );
}
