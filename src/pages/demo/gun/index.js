import React, { Component } from 'react';
import { Map } from 'immutable';
import { isBrowser } from '../../../api';
import Analytics from '../../../components/Analytics';
import NameForm from '../../../components/NameForm';

const Gun = isBrowser() ? require('gun/gun') : () => 0;

const getData = map =>
  map.valueSeq().filter(x => (x.title && x.countTotal));

class GunPage extends Component {
  constructor(props) {
    super(props);
    this.gun = Gun('https://gun-ndbtgvyfxy.now.sh/gun');
    this.state = {
      name: '',
      map: Map(),
    };
  }

  componentDidMount() {
    this.update();
  }

  update() {
    this.gun.get('username').on((data) => {
      this.setState({ name: data.name });
    });

    // Get the value of each post
    this.gun.get('posts').map().on((post, id) => {
      this.setState(prevState => ({
        ...prevState,
        map: prevState.map.set(id, post),
      }));
    });
  }

  render() {
    const { name, map } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Gun Demo Page</h2>
            <NameForm gun={this.gun} name={this.name} />
            <div>
              Your name: {name}
            </div>
          </div>
        </div>

        <h3>Posts</h3>
        <Analytics data={getData(map)} />
      </div>
    );
  }
}

export default GunPage;
