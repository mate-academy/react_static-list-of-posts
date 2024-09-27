import React, { Component } from 'react';

export default function User(props) {
  return (
    <div className="author-email">
      <span> - <strong>{props.users.name}</strong></span>
      <span>{props.users.email}</span>
    </div>
  )
}
