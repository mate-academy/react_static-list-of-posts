import React from 'react';
import Post from "./Post";
import {users} from '../users';
import {posts} from '../posts';
import User from "./User";
import CommentList from "./CommentList";
import '../App.css';

function PostList() {
    let listOfPosts = posts.map(item => {
        let user = users.find(u => {
            return u.id === item.userId;
        });

        return (
        <li className="style" key={item.body}>
            <Post key={user.id} title={item.title} body={item.body}/>
            <User key={item.id.toString}  name={user.name} email={user.email} address={user.address}/>
            <CommentList key={user.name} id={item.id} name={user.name}/>
        </li>
        )
    });

    return (
        <ul>
            {listOfPosts}
        </ul>
    );
}

export default PostList;
