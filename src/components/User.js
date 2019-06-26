import React from 'react';
import '../data/users'
import './User.css'

function User(props) {
    const {name, email, city} = props;
    return (
       <div className="user_container">
           <span>{name}</span>
           <span><a href={email}>{email}</a></span>
           <span>{city}</span>
       </div>
    );
}

export default User;