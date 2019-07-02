import React from 'react';
import Post from './Post'
import CommentList from './CommentList'
import './PostList.css'

function PostList(props) {
    const {users, comments, posts} = props;
    return (
    posts.map(post => {
        return (
            <div className="wrapper">
                <Post
                    title={post.title}
                    id={post.id}
                    userId={post.userId}
                    body={post.body}
                    users = {users}
                />
                Comments:
                <CommentList
                    comments={comments[post.id]}
                />

            </div>
        )
    }
    ))
}

export default PostList;
