import React, { Component, Fragment } from 'react';
import { arrayOf, shape, number, string } from 'prop-types';
import Wrapper from '../../Wrapper/Wrapper';
import User from '../../User/User';
import CommentList from '../../CommentList/CommentList';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state ={
      wrapped: null
    };

    this.toggleWrapping = this.toggleWrapping.bind(this);
  }

  static propTypes = {
    title: string.isRequired,
    body: string.isRequired,
    comments: arrayOf(
      shape({
        id: number,
        name: string,
        email: string,
        body: string
      }).isRequired),
    user: shape({
      name: string,
      email: string,
      address: string
    }).isRequired
  };

  toggleWrapping() {
    this.setState(prevState => ({
      wrapped: !prevState.wrapped
    }))
  };

  render() {
    const {
      title,
      body,
      comments,
      user: {
        name,
        email,
        address
      }
    } = this.props;

    return (
      <Wrapper
        header={(<h2 className="post-title">{title}</h2>)}
        user={(<User name={name} email={email} address={address}/>)}
        body={(
          <div className="post-body">{body}</div>
        )}
        onStapleClick={comments !== null ? this.toggleWrapping : null}
      >
        <Fragment>
          {
            this.state.wrapped
            && Boolean(comments)
            && (<CommentList comments={comments} />)
          }
        </Fragment>
      </Wrapper>
    );
  }
}

export default Post;
