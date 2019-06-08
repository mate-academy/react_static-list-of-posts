import React from "react";
import { users } from "../data/users";
import User from "../components/User";
import Comments from "../components/Comments";
import "../styles/post.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.author = users.find(user => {
      return user.id === this.props.userId;
    });
  }

  render() {
    console.log(this.props.userId);
    return (
      <div className="post" key={this.props.userId}>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <User
          name={this.author.name}
          address={this.author.address}
          email={this.author.email}
        />
        <Comments id={this.props.userId} />
      </div>
    );
  }
}

export default Post;
