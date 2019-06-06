import React from 'react';
import './PostList.css';
import Post from './Post'
import {posts} from '../posts';
import {users} from '../users';


function PostList() {
    const usersObj = users.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = currentValue;
        return accumulator;
    },{});

    return posts.map(item => {

        return <Post title = {item.title}
                     body = {item.body}
                     postId = {item.id}
                     user = {usersObj[item.userId]}
                     key = {item.id}
        />
    });
}

export default PostList;