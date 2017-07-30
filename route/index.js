import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../containers/HomeScreen';
import DetailScreen from '../containers/DetailScreen';

const AppRoutes = StackNavigator({
  Welcome: { screen: HomeScreen },
  Details: { screen: DetailScreen }
});

export default AppRoutes;