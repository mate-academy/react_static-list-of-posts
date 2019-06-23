import React from "react";
import Post from "../components/Post";
import { posts } from "../data/posts";

export default class ListOfPosts extends React.Component {
  constructor(props) {
    super(props);
    this.postList = [];
    posts.forEach(post =>
      this.postList.push(
        <Post userId={post.userId} title={post.title} body={post.body} key={post.title} id={post.id}/>
      )
    );
  }
  render() {
    return <div>{this.postList}</div>;
  }
}
