import React from 'react';

import {CommentShape} from '../types';

const Comment = ({name, body, email}) => (
  <>
    <h3>Name: {name}</h3>
    <p>Text: {body}</p>
    <a href={`mailto:${email}`}>EMail</a>
  </>
)

Comment.propTypes = {
  comment: CommentShape,
}

export default Comment;
