import React from 'react';
import './CommentInfo.scss';

type Props = {
  name:string,
  body:string,
  email:string,
};

export const CommentInfo:React.FC<Props> = ({ name, body, email }) => {
  return (
    <li className="comments--list__item">
      <p>
        <strong>
          Name:
          &nbsp;
        </strong>
        {name}
      </p>
      <p>
        <strong>
          Comment:
          &nbsp;
        </strong>
        {body}
      </p>
      <p>
        <strong>
          Email:
          &nbsp;
        </strong>
        {email}
      </p>
    </li>
  );
};
