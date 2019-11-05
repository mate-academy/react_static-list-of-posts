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
        <li className='info'>
          <div className='titel'>
            <p>{title}</p>
            <p>{body}</p>
          </div>
          <div className='user'>
            <p>{name}</p>
            <p>{email}</p>
          </div>
          <div className='data'>
            <p>
              {`${street} ${suite} ${city}
              ${zipcode} ${lat} ${lng}`}
            </p>
          </div>
        </li>
        <ul className='comments'>
            <GetListComments props={post.comments} />
          </ul>
      </ul>
    )
  });
}
