import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.scss';

class Post extends Component {
  state = {
    isOpen: false,
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { title, body, user, comments } = this.props;
    const showComments = this.state.isOpen
      && <CommentList comments={comments} />;

    return (
      <div className="post-item">
        <h2>{title}</h2>
        <p>{body}</p>
        <User {...user} />
        <button
          onClick={this.handleClick}
          className="post-button"
          type="button"
        >
          {this.state.isOpen ? 'Hide comments' : 'Show me comments'}
        </button>
        {showComments}
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Post;
