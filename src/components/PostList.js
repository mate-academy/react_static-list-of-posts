import React from 'react';
import Post from './Post';
import {users} from './users';
import {posts} from './posts';
import CommentList from './CommentList';

function PostList() {
    return posts.map((item) => {
        const user = users.find(usersItem => item.userId === usersItem.id);
        return (
            <article key={item.title}>
                <Post title={item.title} text={item.body} user={user}/>
                Comments:
                <CommentList id={item.id}/>
            </article>
        )
    })
}

export default PostList;
