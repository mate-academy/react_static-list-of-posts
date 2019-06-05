import React from 'react';

function User(props) {
  let adress = '';
  if (props.adress) {
    adress = <p className='post-author__adress'>Adress:{props.adress}</p>;
  }
  return (
    <article>
      <p className='post-author__name'>Name: {props.name}</p>
      <p className='post-author__email'>Email: {props.email}</p>
      <p className='post-author__adress'>{adress}</p>
    </article>
  );
}

export default User;
