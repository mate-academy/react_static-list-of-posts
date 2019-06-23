import React from "react";
import Comment from "../components/Comment";
import { comments } from "../data/comments";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.filtredComments = comments.filter(comment => comment.postId === this.props.id);
    this.commentsList = this.filtredComments.map(
      comment => (<Comment name={comment.name} body={comment.body} email={comment.email} key={comment.name}/>)
    );
  }

  render() {
    return (
      <div className="comment" key={this.commentsList}>
        {this.commentsList}
      </div>
    );
  }
}

export default Comments;
