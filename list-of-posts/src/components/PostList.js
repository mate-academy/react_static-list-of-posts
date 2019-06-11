import React, { Component } from 'react'
import Post from './Post';

export default class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => 
        <Post 
          key={post.id} 
          title={post.title} 
          body={post.body} 
          users={this.props.users} 
          posts={post}
          comments={this.props.comments}
          />)}
      </div>
    )
  }
}
