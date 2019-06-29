import React from 'react';

function Comment(props) {
  return (
    <div >
        <span>Name: </span> {props.cmnt.name}
    </div>
  );
}

export default Comment;