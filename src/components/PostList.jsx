import React, { Component } from 'react';
import PostItem from './PostItem';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      users: this.props.users,
      comments: this.props.comments
    };
  }

  componentWillMount() {
    const users = this.state.users.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    this.setState(() => ({ users }));
  }

  getComments(id) {
    const filteredComments = this.state.comments
      .filter(item => item.postId === id);
    return filteredComments;
  }

  render() {
    return (
      <div>
        {this.state.posts.map(item =>
          <PostItem key={item.id} post={item}
            user={this.state.users[item.userId]}
            comments={this.getComments(item.id)} />)}
      </div>
    );
  }
}
