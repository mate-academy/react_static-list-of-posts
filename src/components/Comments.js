import React from "react";
import Comment from "../components/Comment";
import { comments } from "../data/comments";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.filtredComments = comments.filter(c => c.postId === this.props.id);
    this.commentsList = this.filtredComments.map(
      c => (c = <Comment name={c.name} body={c.body} email={c.email} id={c.postId}/>)
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
