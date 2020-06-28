import React from 'react';
import { commentsProp } from '../props';

import './CommentList.css';

export const CommentList = ({ props }) => (
  <div className="CommentList">

    {props.map(({ name, body, email, id }) => {
      const title = (name[0]).toUpperCase()
        + (name).slice(1);

      const message = (body[0]).toUpperCase()
        + (body).slice(1);

      return (
        <div className="CommentList__comment" key={id}>

          <h3 className="CommentList__title">{title}</h3>
          <p>{message}</p>
          <div className="CommentList__mail">
            {email}
          </div>

        </div>
      );
    })}
  </div>
);

CommentList.propTypes = commentsProp.isRequired;
