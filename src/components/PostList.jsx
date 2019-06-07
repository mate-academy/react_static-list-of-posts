import React, {Component} from 'react';
import PostItem from './PostItem';
import User from './User'

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
        {this.state.posts.map((item, index) => (
          <PostItem
            key={index}
            post={item}
            name={this.state.users[item.userId.name]}
            user={<User info={this.state.users[item.userId] || {}} />}
            comments={this.getComments(item.id)}
          />
        ))}
      </div>
    );
  }
}
