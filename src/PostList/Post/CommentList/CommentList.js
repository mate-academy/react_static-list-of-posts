import React from 'react';
import { commentsShape } from '../props';

import './CommentList.css';

export const CommentList = ({ props }) => (
  <div className="commentList">

    {props.map(({ name, body, email, id }) => {
      const title = (name[0]).toUpperCase()
        + (name).slice(1);

      const message = (body[0]).toUpperCase()
        + (body).slice(1);

      return (
        <div className="commentList__comment" key={id}>

          <h3 className="commentList__title">{title}</h3>
          <p>{message}</p>
          <div className="commentList__mail">
            {email}
          </div>

        </div>
      );
    })}
  </div>
);

CommentList.propTypes = commentsShape.isRequired;
