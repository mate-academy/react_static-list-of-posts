import React from 'react';
import './Comments.scss';

export const Comments = (comments) => {
  const changeTypeOfComment = (Object.entries(comments));

  return (
    <ul>
      {
        changeTypeOfComment.map(item => (
          <li key={item.body}>
            <p>
              Name:
              {item[1].name}
            </p>
            <div className="just__line"> </div>
            <p>
              {item[1].body}
            </p>
            <p>
              Email:
              {item[1].email}
            </p>
          </li>
        ))
      }
    </ul>
  );
};
