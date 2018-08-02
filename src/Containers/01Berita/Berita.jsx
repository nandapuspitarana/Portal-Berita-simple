import React, { Component } from 'react';
import Header from '../../Components/01Header/Header';
import Kartu from '../../Components/02Kartu/Kartu';
import Bottom from '../../Components/03Bottom/Bottom';
import Aux from '../../hoc/Auxiliary';

export default class Berita extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Kartu />
        <Bottom />
      </Aux>
    );
  }
}
