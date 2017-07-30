import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;