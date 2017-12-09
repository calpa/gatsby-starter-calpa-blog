import React, { Component } from 'react';

import cytoscape from 'cytoscape';

import './route.scss';

const nodes = [
  { data: { id: 'Front-End' } },
  { data: { id: 'HTML' } },
  { data: { id: 'JavaScript' } },
  { data: { id: 'CSS' } },
];
const edges = [
  {
    data: {
      source: 'Front-End',
      target: 'HTML',
    },
  },
  {
    data: {
      source: 'Front-End',
      target: 'JavaScript',
    },
  },
  {
    data: {
      source: 'Front-End',
      target: 'CSS',
    },
  },
];

const elements = [...nodes, ...edges];

class Cytoscape extends Component {
  componentDidMount() {
    cytoscape({
      container: document.getElementById('cy'),
      elements,

      pan: { x: 0, y: 0 },

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
            'line-color': '#6cf',
          },
        },
      ],

      // TODO: Change layout name by location or other config
      layout: {
        name: 'circle',
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
