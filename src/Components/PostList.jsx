import React, { Component } from 'react';
import Post from './Post.jsx';

export default class PostList extends Component {
  render() {
    return (
      <div className="post">
        {this.props.posts.map(post =>
          <Post post={post}
            key={post.id}
            users={this.props.users}
            comments={this.props.comments}
          />)}
      </div>
    )
  }
}
