/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



var Main = require('./Component/Main/XMGMain');
 class cccc extends Component {
  render() {
    return (
        <Main />
    );
  }
}

AppRegistry.registerComponent('cccc', () => cccc);
