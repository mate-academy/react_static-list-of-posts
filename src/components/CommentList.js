import React from 'react';
import Comment from './Comment';

function CommentList(props) {
    const {comments} = props;
    console.log(comments)
    return (
        comments.map(comment => {
            return (
                <div>
                    <ul>
                    <Comment
                        body={comment.body}
                        name={comment.name}
                        email={comment.email}
                    />
                    </ul>
                </div>
            );
        })
    );

}

export default CommentList;
