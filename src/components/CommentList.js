import React from 'react';
import { Comment } from './Comment';
import { comments } from '../data/comments';


export const CommentList = props => {
    const {
        id
    } = props;

    let arrForId = comments.filter(function (comment, i, comments){
            return comment.postId === id;
        });
    return (
        <div >
            {arrForId.map((comment, i) => {
                return (
                    <Comment body={comment.body} name={comment.name} email={comment.email}/>
        );
    })}
        </div>
    );
};
