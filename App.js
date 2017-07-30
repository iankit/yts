import React from 'react';
import { StatusBar } from 'react-native';
import AppRoutes from './route';

const _XHR = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;
XMLHttpRequest = _XHR;

export default class App extends React.Component {
  render() {
    return (
      <AppRoutes />
    );
  }
}
