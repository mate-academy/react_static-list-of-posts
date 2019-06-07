import React, {Component} from 'react';
import {comments} from '../comments';
import Comment from './Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.postComments = comments.filter(comment => comment.postId === this.props.id);
  }

  render() {
    const postCommentsDiv = this.postComments.map((comment, i) => <Comment id={comment.id} key={i}/>);

    return (
      <div>{postCommentsDiv}</div>
    );
  }
}

export default CommentList;
