import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.gun = this.props.gun;
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.gun.get('username').put({
      name: this.state.name,
    }, (ack) => {
      if (ack.err) {
        console.error(ack.err);
      }
    });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
