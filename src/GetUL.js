import React from 'react';
import './App.css';

import GetListComments from './GetListComments';

export default function GetUL (props) {
  return props.posts.map( post => {
    const {title, body} = post;
    const {name, email} = post.user;
    const {street, suite, city, zipcode} = post.user.address;
    const {lat, lng} = post.user.address.geo;
    return (
      <ul>
        <li>
          <p>{title}</p>
          <p>{body}</p>
          <p>{name}</p>
          <p>{email}</p>
          <p>{`${street} ${suite} ${city}
          ${zipcode}
          ${lat}
          ${lng}`}</p>
          <ul>
            <GetListComments props={post.comments} />
          </ul>
        </li>
      </ul>
    )
  });
}
