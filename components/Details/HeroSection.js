import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export const HeroSection = (props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${props.yt_trailer_code}`)} >
        <Image
          style={styles.heroImage}
          source={{uri: props.background_image}}>
          <View style={styles.playIcon}>
            <Icon name="play-circle" size={50} color="white" />
          </View>
          <Text style={styles.heroText}>Watch Movie Trailor</Text>
        </Image>
      </TouchableNativeFeedback>
    </View>
  );
}
