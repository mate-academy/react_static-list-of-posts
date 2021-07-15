import React from 'react';
import './Comments.scss';

export const Comments = (props) => {
  const newObj = (Object.entries(props));

  return (
    <div>
      {
        newObj.map(item => (
          <>
            <p key={item.name}>
              Name:
              {item[1].name}
            </p>
            <div className="just__line"> </div>
            <p key={item.body}>
              {item[1].body}
            </p>
            <p key={item.email}>
              Email:
              {item[1].email}
            </p>
          </>
        ))
      }
    </div>
  );
};
