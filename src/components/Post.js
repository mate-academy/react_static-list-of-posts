import React from 'react';
import './Post.css'
import User from "./User";

function Post(props) {
    const {title, body, id, userId, users} = props;
    console.log(users[userId])
    const userObj = users[userId]
    return (
        <div className="post_container">
            <p className="title">{title}</p>
            {/*<p className="id">{id} </p>*/}
            {/*<p className="userId">{userId}</p>*/}
            <p className="body">{body}</p>
            <User
                name={users[userId].name}
                email={users[userId].email}
                city={users[userId].address.city}
            />


        </div>
    )
}
export default Post;
