import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="user" key={this.props.name}>
        <h4>{this.props.name}</h4>
        <p>{this.props.address["city"]}</p>
        <a href={"mailto: " + this.props.email}>{this.props.email}</a>
        <div>~~~~~~~~~~~~~Comments~~~~~~~~~~~~~~~~</div>
      </div>
    );
  }
}

export default User;
