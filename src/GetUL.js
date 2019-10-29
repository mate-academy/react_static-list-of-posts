import React from 'react';
import './App.css';

import GetListComments from './GetListComments';

export default function GetUL (posts) {
  return posts.props.map( post => {
    return (
      <ul key={post.id}>
        <li>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <p>{post.user.name}</p>
          <p>{post.user.email}</p>
          <p>{`${post.user.address.street} ${post.user.address.suite} ${post.user.address.city}
          ${post.user.address.zipcode}
          ${post.user.address.geo.lat}
          ${post.user.address.geo.lng}`}</p>
          <ul>
            <GetListComments props={post.comments} />
          </ul>
        </li>
      </ul>
    )
  });
}
