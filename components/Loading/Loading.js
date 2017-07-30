import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './styles';

export const Loading = (props) => {
  return (
    <ActivityIndicator
      animating={props.animating}
      style={styles.loading}
      color="#512da7"
      size="large"
    />
  );
}