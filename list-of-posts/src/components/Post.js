import React from 'react';

function Post(props) {
  return (
    <div>
      <p><b>Title:</b> {props.title}</p>
      <p>Text: {props.body}</p>
    </div>
  );
}

export default Post;
