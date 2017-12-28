import React, { Component } from 'react';

import { getContent } from '../../../api/text';
import './index.scss';

const Markmirror = typeof window !== 'undefined' && typeof window.navigator !== 'undefined' ?
  require('react-markmirror').default : undefined;

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      html: '',
      preview: true,
      chinese: 0,
    };
  }

  async handleChange(code) {
    const { html } = await getContent(code);
    const temp = code.match(/[\u4e00-\u9fa5]/g);
    let chinese = 0;

    if (temp) {
      chinese = temp.length;
    }

    this.setState({ code, html, chinese });
  }

  async togglePreview() {
    this.setState({ preview: !this.state.preview });
  }

  render() {
    return (
      <div className="container count-page">
        <div className="row">
          <div className="col-12">
            <h2>字數統計</h2>
            <p>中文字：{this.state.chinese}</p>
            <button
              onClick={() => this.togglePreview()}
              className="btn btn-info"
            >預覽
            </button>
          </div>
          <div className="col-6">
            {Markmirror &&
              <Markmirror
                value={this.state.code}
                onChange={code => this.handleChange(code)}
              />}
          </div>

          {this.state.preview &&
            <div className="col-6">
              <div
                dangerouslySetInnerHTML={{ __html: this.state.html }}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Count;
