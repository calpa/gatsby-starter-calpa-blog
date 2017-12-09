import React, { Component } from 'react';
import { isBrowser } from '../../../api';
import Analytics from '../../../components/Analytics';
import NameForm from '../../../components/NameForm';

const Gun = isBrowser() ? require('gun/gun') : () => 0;

class GunPage extends Component {
  constructor(props) {
    super(props);
    this.gun = Gun('https://gun-ndbtgvyfxy.now.sh/gun');
    this.state = {
      name: '',
      posts: [],
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
    this.gun.get('posts').map().val((post) => {
      this.setState((prevState) => {
        prevState.posts.push(post);
      });
    });
  }

  render() {
    const { name, posts } = this.state;
    return (
      <div>
        <h2>Gun Demo Page</h2>
        <NameForm gun={this.gun} name={this.name} />
        <div>
          Your name: {name}
        </div>
        <h3>Posts</h3>
        <Analytics data={posts} />
      </div>
    );
  }
}

export default GunPage;
