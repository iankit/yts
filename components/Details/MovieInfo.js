import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export const MovieInfo = (props) => {
  return (
    <View style={styles.outerWrapper}>
      <View style={styles.movieInfo}>
        <View style={styles.infoContainer}>
          <Image
            style={styles.infoImage}
            source={{uri: props.medium_cover_image}}
          />
          <View style={styles.details}>
            <View style={[styles.row, styles.padUpDown]}>
              <Text style={styles.titleDetails}>{props.title}</Text>         
            </View>
            <View style={[styles.row, styles.padUpDown]}>
              <Text style={styles.label}>Language: </Text>
              <Text style={styles.value}>{props.language}</Text>         
            </View>
            <View style={[styles.row, styles.padUpDown]}>
              <Text style={styles.label}>Runtime: </Text>
              <Text style={styles.value}>{`${props.runtime} minutes`}</Text>          
            </View>
            <View style={[styles.row, styles.padUpDown]}>
              <Text style={styles.label}>IMBD Rating: </Text>
              <Text style={styles.value}>{`${props.rating}/10`}</Text>          
            </View>
            <View style={[styles.row, styles.padUpDown]}>
              <Text style={styles.label}>Genre: </Text>
              <Text style={styles.value}>{props.genres.reduce((a="", i) => a+", "+i )}</Text>          
            </View>
            <View style={[styles.row, styles.padUpDown]}>
              <Text style={styles.label}>Seed: </Text>
              <Text style={styles.value}>{props.torrents[0].seeds}</Text>          
            </View>
            <View style={[styles.row, styles.padUpDown]}>
              <Text style={styles.label}>Leech: </Text>
              <Text style={styles.value}>{props.torrents[0].peers}</Text>           
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.pad10, styles.description]}>
        <View style={[styles.row, styles.pad10, styles.buttonGroup]}>
          <Icon.Button
            name="download"
            borderRadius={2}
            size={22}
            color="#242424"
            backgroundColor="#e88c30"
            background={TouchableNativeFeedback.Ripple('#915110', false)}
            onPress={() => props.toggleAlert('torrent') }>
            <Text style={styles.button}>Torrent</Text>
          </Icon.Button>
          <Icon.Button
            name="magnet"
            borderRadius={2}
            size={22}
            color="#242424"
            backgroundColor="#e88c30"
            background={TouchableNativeFeedback.Ripple('#915110', false)}
            onPress={() => props.toggleAlert('magnet') }>
            <Text style={styles.button}>Magnet</Text>
          </Icon.Button>
        </View>
        <View>
          {
            props.description_full.length > 0 ?
              <View>
                <Text style={styles.descriptionLabel}>Description:</Text>
                <Text style={styles.descriptionText}>
                  {props.description_full}
                </Text>
              </View>
              : null
          }
        </View>
      </View>
      <View style={[styles.row, styles.pad10, styles.ytsButton]}>
        <Icon.Button
          name="yc-square"
          borderRadius={2}
          iconStyle={{color: 'gray'}}
          size={20}
          color="white"
          backgroundColor="#e5e5e5"
          onPress={() => Linking.openURL(props.url)}>
            <Text style={styles.button}>YTS</Text>
        </Icon.Button>
        <Icon.Button
          name="imdb"
          iconStyle={{color: 'gray'}}
          borderRadius={2}
          size={20}
          color="white"
          backgroundColor="#e5e5e5"
          onPress={() => Linking.openURL(`http://www.imdb.com/title/${props.imdb_code}`)}>
          <Text style={styles.button}>IMDB</Text>
        </Icon.Button>
        </View>
    </View>
  );
}
