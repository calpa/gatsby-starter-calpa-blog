import React, { Component } from 'react';

import cytoscape from 'cytoscape';

import './route.scss';

const nodes = [
  {
    data: { id: 'FE' },
    position: { x: 100, y: 100 },
  },
  { data: { id: 'HTML' } },
  { data: { id: 'JavaScript' } },
  { data: { id: 'CSS' } },
];
const edges = [
  {
    data: {
      source: 'FE', target: 'HTML', faveColor: '#6cf', strength: 90,
    },
  },
  {
    data: {
      source: 'FE', target: 'JavaScript', faveColor: '#6cf',
    },
  },
  {
    data: {
      source: 'FE', target: 'CSS', faveColor: '#6cf',
    },
  },
];

const elements = [...nodes, ...edges];

class Cytoscape extends Component {
  componentDidMount() {
    cytoscape({
      container: document.getElementById('cy'),
      elements,

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#ededed',
            label: 'data(id)',
          },
        },

        {
          selector: 'edge',
          style: {
            width: 3,
            'line-color': 'data(faveColor)',
            'target-arrow-color': 'data(faveColor)',
            'target-arrow-shape': 'triangle',
          },
        },
      ],

      layout: {
        name: 'grid',
        rows: 1,
      },

    });
  }

  render() {
    return (
      <div id="cy" />
    );
  }
}

export default Cytoscape;
