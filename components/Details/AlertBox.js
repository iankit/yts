import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

export const AlertBox = (props) => {

  const makeUrl = (t, movieTitle) => {
    const trackers = [
    'udp://open.demonii.com:1337/announce',
    'udp://tracker.openbittorrent.com:80',
    'udp://tracker.coppersurfer.tk:6969',
    'udp://glotorrents.pw:6969/announce',
    'udp://tracker.opentrackr.org:1337/announce',
    'udp://torrent.gresille.org:80/announce',
    'udp://p4p.arenabg.com:1337',
    'udp://tracker.leechers-paradise.org:6969',
    ];

    if (props.type == 'torrent') {
      return t.url;
    } else if ( props.type == 'magnet') {
      let trs = '';
      trackers.forEach((t) => trs += '&tr='+t);
      const url = `magnet:?xt=urn:btih:${t.hash}&dn=${movieTitle}${trs}`;
      return url;
    }
  }

  const onLinkPress = (t, title) => {
    Linking.openURL(makeUrl(t, title));
    props.toggleAlert('');
  }

  return (
    <View style={styles.alert}>
      <Text style={styles.quality} >Quality Options</Text>
      { props.movieDetails.torrents.map((t, i) =>  <Text key={i} style={styles.text} onPress={() => onLinkPress(t, props.movieDetails.title) }>{t.quality}</Text>) }
    </View>
  )
}

const styles = StyleSheet.create({
  alert: {
    marginTop: '40%',
    paddingTop: '5%',
    paddingBottom: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'white',
    marginBottom: '40%',
  },
  quality: {
    paddingLeft: 20,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 20
  }
});
