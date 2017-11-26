import React, { Component } from 'react';
import { getContent } from '../../api/text';
import './toc.scss';

const TableItem = ({ name }) => (
  <li>
    <a href={`#${name}`}>{name}</a>
  </li>
);

const Table = ({ items }) => (
  <ul>
    {items.map(item => <TableItem name={item} key={item} />)}
  </ul>
);

class TableOfContent extends Component {
  constructor(props) {
    super(props);
    this.post = this.props.post;
    this.state = {
      toc: [],
      isTop: true,
    };
  }
  async componentDidMount() {
    const { toc } = await getContent(this.post);
    this.setState({ toc });
  }

  render() {
    return (
      <div
        className="col-lg-2 d-none d-lg-block order-11 toc-wrap"
      >
        <Table items={this.state.toc} />
      </div>
    );
  }
}

export default TableOfContent;
