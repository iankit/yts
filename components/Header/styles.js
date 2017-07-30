import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  header: {
    height: 55,
  },
  statusbar: {
  },
  headerWrap: {
    height: 55,
    alignItems: 'center',
    backgroundColor: '#673bb7',
    flexDirection: 'row',
  },
  searchWrap: {
    flex: 7,
  },
  searchInput: {
    padding: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: '400'
  },
  headerText:{
    flex: 2,
    color: 'white',
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: '400',
  },
  icon: {
    textAlign: 'right',
    paddingRight: 20,
  }
});