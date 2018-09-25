import React, { Component } from 'react';
import './addToHomePrompt.scss';

class AddToHomePrompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPrompt: true,
      deferredPrompt: null,
    };
  }

  componentDidMount() {
    this.state.listener = window.addEventListener(
      'beforeinstallprompt',
      this.handlePrompt,
    );
  }

  componentWillUnmount() {
    this.state.listener = window.removeEventListener(
      'beforeinstallprompt',
      this.handlePrompt,
    );
  }

  handlePrompt(e) {
    e.preventDefault();
    this.setState({
      deferredPrompt: e,
      showPrompt: true,
    });
  }

  handleClick() {
    // hide our user interface that shows our A2HS button
    this.setState({ showPrompt: false });
    // Show the prompt
    this.state.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.state.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      this.setState({ deferredPrompt: null });
    });
  }

  render() {
    return (
      <div className="m-addToHomePrompt">
        {this.state.showPrompt === true && (
          <button className="btn btn-info" onClick={e => this.handleClick(e)}>
            Add to Home Screen
          </button>
        )}
      </div>
    );
  }
}

export default AddToHomePrompt;
