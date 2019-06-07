import React, {Component} from 'react';
import {posts} from '../posts';
import User from './User';
import CommentList from './CommentList';

class Post extends Component {
  constructor(props) {
    super(props);
    this.post = posts.find(post => post.id === this.props.id);
  }

  render() {
    return (
      <div>
        <h2>{this.post.title}</h2>
        <span>{this.post.body}</span>
        <User id={this.post.userId}/>
        <CommentList id={this.post.id}/>
        <hr/>
      </div>
    );
  }
}

export default Post;
