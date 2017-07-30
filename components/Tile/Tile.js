import React from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import styles from './styles';

const Tile = (props) => {
  const movie = props.movie;
  return (
    <TouchableHighlight
      style={styles.tile}
      onPress={() => props.onTilePress(movie)}>
      <View>
        <Image
          style={styles.tileImage}
          source={{uri: movie.medium_cover_image}}
        />
        <Text style={styles.tileText}>{(movie.title_english.length > 50 ? (movie.title_english.slice(0,45)+'. . .') : movie.title_english) + ' (' + movie.year +' )'}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Tile;