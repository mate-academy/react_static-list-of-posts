import React from 'react';

function User (props) {
    return (
        <p>
            {props.author.name},
            <strong>email: </strong> {props.author.email},
            <strong>Address:</strong> {props.author.address.street}, {props.author.address.suite}, {props.author.address.city}
        </p>
    )
}

export default User;
