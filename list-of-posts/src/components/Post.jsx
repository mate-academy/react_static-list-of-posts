import React, { Component } from 'react'
import User from './User';
import CommentList from './CommentList';

export default class Post extends Component {
  render() {
    const users = this.props.users.find(user => user.id === this.props.posts.userId);
    const comments = this.props.comments.find(comment => comment.postId === this.props.posts.id)
    return (
      <div >
        <h1 key={this.props.key}>Title: {this.props.title} </h1>
        <p>{this.props.body}</p>
        <User
          key={users.id}
          users={users} />
        <CommentList comments={comments} />
      </div>
    )
  }
}
