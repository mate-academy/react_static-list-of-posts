import React from 'react';

function User(props) {
  return(
    <section className = "post_author">
      <p><strong>{props.author}</strong>: <span><a href={props.mailto}>{props.email}</a></span></p>
      <section className = "post_author_adress">
          <span><strong>Adress: </strong></span>
          <span>{props.street} str.,</span>
          <span> {props.suite},</span>
            <span>
              <span> {props.city}:</span>
              <span class="geo"> {props.lat}:{props.lng},</span>
            </span>
          <span> zipcode: {props.zipcode}</span>
      </section>
    </section>
  )
}

export default User;
