import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, TouchableHighlight, StatusBar } from 'react-native';
import { HeroSection, MovieInfo, AlertBox, } from '../components/Details';

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Details',
    headerTintColor: 'white',
    headerPressColorAndroid: '#38006b',
    headerStyle: {
      elevation: 0,
      backgroundColor: '#673bb7',
      height: 55,
      borderTopColor: '#512da7',
    }
  }

  state = {
    showAlert: false,  // show alert modal.
    alertType: '',     // torrent || magnet
  }

  toggleAlert(type) {
    this.setState({ showAlert: !this.state.showAlert, alertType: type });
  }

  render() {
    const movieDetails = this.props.navigation.state.params;

    return (
      <View style={{ flex:1 }}>
        <StatusBar backgroundColor="#512da7" animated barStyle="light-content" />
        {this.state.showAlert ?
          <View style={styles.alertWrapper}>
            <TouchableHighlight underlayColor='rgba(0,0,0,0.8)' onPress={() => this.setState({ showAlert: false }) }>
              <View>
                <AlertBox movieDetails={movieDetails} toggleAlert={this.toggleAlert.bind(this)} type={this.state.alertType} />
              </View>
            </TouchableHighlight>
          </View>
        : null}
        <ScrollView style={{ flex: 1}}>
          <MovieInfo {...movieDetails} showAlert={this.state.showAlert} toggleAlert={this.toggleAlert.bind(this)} />
          <HeroSection {...movieDetails} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   alertWrapper: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    flex: 1,
    zIndex: 100,
    position: 'absolute',
    height: '100%',
    top: 0,
    width: '100%',
  },
});

export default DetailScreen;