import React from "react";
import Post from "../components/Post";
import { posts } from "../data/posts";

export default class ListOfPosts extends React.Component {
  constructor(props) {
    super(props);
    this.postList = [];
    posts.forEach(p =>
      this.postList.push(
        <Post userId={p.userId} title={p.title} body={p.body} key={p.id} />
      )
    );
  }
  render() {
    return <div>{this.postList}</div>;
  }
}
