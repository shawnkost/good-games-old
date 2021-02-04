import React from 'react';
import Games from '../components/games';
import GameSort from '../components/gameSort';
import Menu from '../components/menu';
import Navbar from '../components/navbar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: 4,
      menuClicked: false
    };
    this.savePlatform = this.savePlatform.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  savePlatform(value) {
    this.setState({
      platform: value
    });
  }

  openMenu(clicked) {
    this.setState({
      menuClicked: true
    });
  }

  closeMenu(clicked) {
    this.setState({
      menuClicked: false
    });
  }

  render() {
    return (
        <>
          <div className={this.state.menuClicked ? 'blur-container' : 'page-container'}>
            <Navbar onChange={this.openMenu} />
            <GameSort onChange={this.savePlatform} />
            <Games platform={this.state.platform} />
          </div>
          <Menu click={this.closeMenu} menuClicked={this.state.menuClicked} />
        </>
    );
  }
}
