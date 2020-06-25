import React from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.css';
import { CommentShape } from '../ComponentsShapes';

export const CommentList = ({ commentList }) => (
  <>
    {commentList.map(comment => (
      <React.Fragment key={comment.id}>
        <div className="post__comment">
          <Comment
            email={comment.email}
            name={comment.name}
            body={comment.body}
          />
        </div>
      </React.Fragment>
    ))
    }
  </>
);

CommentList.propTypes = CommentShape.isRequired;
