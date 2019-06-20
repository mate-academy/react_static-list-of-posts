import React from 'react';

export default function User(props) {
  const { name } = props.info;
  return (
    <div className="user">
      <p>{name}</p>
    </div>
  );
}
