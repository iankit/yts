import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: 200,
  },
  playIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  heroImage: {
    flexGrow:1,
    height: 200,
    width:null,
    position: 'relative',
  },
  heroText: {
    fontSize: 25,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '900',
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    top: 0,
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(9, 9, 9, 0.68)',
  },
  infoContainer: {
    flexDirection: 'row',
    margin: 12,
  },
  infoImage: {
    height: 200,
    flex: 4,
    borderWidth: 4,
    borderColor: 'white',
  },
  details: {
    flex: 6,
    paddingLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  pad10: {
    padding: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  ytsButton : {
    justifyContent: 'space-around',
    backgroundColor: '#e5e5e5'
  },
  descriptionText: {
    color: 'gray',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  description: {
    backgroundColor: 'white',
    paddingTop: 15,
  },
  descriptionLabel: {
    fontSize: 20,
    color: 'gray',
    fontWeight: '500'
  },
  button: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 25,
  },
  label: {
    color: 'white',
  },
  value: {
    color: 'white',
    fontWeight: '500',
    flexWrap: 'wrap'
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
  outerWrapper: {
    flex: 1,
  },
  movieInfo: {
    flex: 1,
    backgroundColor: '#673bb7'
  },
  titleDetails: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  padUpDown: {
    paddingTop: 3,
    paddingBottom: 3
  }
})