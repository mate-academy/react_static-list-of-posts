import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment'

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsVisibble: "comments-main-div disable",
    };
  }

  render() {
    const {title, body, comments, user: {name}} = this.props.post;

    const photoUrl = `https://source.unsplash.com/collection/190727/"
      ${Math.round(Math.random() * (500 - 450) + 450)}x
      ${Math.round(Math.random() * (450 - 400) + 400)}
      /?food,game,car,nature,animal`;

    return (
      <div className="post">
      <div className="authorName"><strong>{name}</strong></div>
      <div className="photo"><img src={photoUrl} className="main-image" alt='post' /></div>
      <div className="title"><strong>{title}</strong></div>
      <div className="bodyText">{body}</div>
      <div className="commentsVisible"
        onClick={() => {
          if (this.state.commentsVisibble === "comments-main-div disable") {
            this.setState({commentsVisibble: "comments-main-div active"})
            console.log(this.state.commentsVisibble);
          } else {
            this.setState({commentsVisibble: "comments-main-div disable"})
            console.log(this.state.commentsVisibble);
          }
        }}>
        <strong>Watch comments ({comments.length})</strong></div>
      <div className={this.state.commentsVisibble}>
      {
        comments.map(comment => (
          <Comment
            comment={comment}
            key={comment.id}
          />
        ))
      }
      </div>
    </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}


export default Post;
