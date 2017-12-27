import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      words: 0,
      chinese: 0,
    };
  }

  handleChange(event) {
    const { value } = event.target;
    const words = value.length;
    let chinese = 0;

    // Special regexp, come from google
    const temp = value.match(/[\u4e00-\u9fa5]/g);
    if (temp) {
      chinese = temp.length;
    }

    this.setState({
      value,
      words,
      chinese,
    });
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label
              htmlFor="textarea1"
            >請輸入你的文章
            </label>
            <textarea
              className="form-control"
              id="textarea1"
              rows="3"
              onChange={e => this.handleChange(e)}
              value={this.state.value}
            />
          </div>
        </form>
        <p>中文：{this.state.chinese}</p>
        <p>總字數：{this.state.words}</p>
      </div>
    );
  }
}

export default Input;
