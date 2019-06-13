import React from 'react';
import { Post } from "./Post";

export const PostList = props => {
    const {
        posts,
        users,
    } = props;
    const usersMap = users.reduce((acc, user) => ({...acc, [user.id]: user}), {});
    const postsWithUsers = posts.map(post => ({...post, user: usersMap[post.userId]}));
    
    return (
            <div>
                {postsWithUsers.map((postsWithUser) => {
                    return (
                        <Post key={postsWithUser.id} {...postsWithUser} />
                );
            })}
            </div>
            );
        };
