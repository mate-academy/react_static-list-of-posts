import React from 'react';

function Comment({name, body, email}) {
  return (
    <>
      <h3>
        {name}
      </h3>

      <p>
        {email}
      </p>

      <p>
        {body}
      </p>
    </>
  )
}

export default Comment;
