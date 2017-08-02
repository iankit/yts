import React, { PureComponent } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  FlatList,
  BackHandler,
  ActivityIndicator,
  Keyboard, } from 'react-native';
import axios from 'axios';

import { Container } from '../components/Container';
import { Header, SearchBar } from '../components/Header';
import { Loading } from '../components/Loading';
import { Tile } from '../components/Tile';


export default class HomeScreen extends PureComponent {

  static navigationOptions = {
    header: null
  }

  constructor(){
    super();
    this.state = {
      moviesList: [],
      searchList: [],
      currentPageNumber: 1,
      currentSearchPageNumber: 1,
      searching: false,
      searchTerm: '',
      animating: true,
      showSearchInput: false,
    };
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchSearchResult = this.fetchSearchResult.bind(this);
    this.fetchNextSearchPage = this.fetchNextSearchPage.bind(this);
    this.renderElements = this.renderElements.bind(this);
    this.handleSearchCloseIcon = this.handleSearchCloseIcon.bind(this);
    this.changeSearchLayout = this.changeSearchLayout.bind(this);
  }

  async componentWillMount() {
    try {
      var movies = await axios.get('https://yts.ag/api/v2/list_movies.json?&limit=50');
      this.setState({ moviesList: movies.data.data.movies, currentPageNumber: movies.data.data.page_number, animating: false });
    }
    catch(err) {
      console.log(err,'Can load the data from the server');
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.props.navigation.state.routeName == "Welcome") {
        this.setState({ showSearchInput: false });
      }
    }
  )}

  onTilePress = (details) => {
    this.setState({ showSearchInput: (this.state.searchTerm ? true : false) }) 
    this.props.navigation.navigate('Details', details);
    Keyboard.dismiss();
  }

  changeSearchLayout(opt = true) {
    this.setState({ showSearchInput: opt });
  }

  renderTiles = (allMovies) => {
    allMovies = allMovies || [];
    return allMovies.map((movie) =>
      <Tile
        key={movie.id}
        movie={movie}
        onTilePress={this.onTilePress}
      />)
  }
  async fetchSearchResult(text) {
    try {
      const searchResult = await axios.get(`http://yts.ag/api/v2/list_movies.json?query_term=${text}`);
      this.setState({ searchList: searchResult.data.data.movies || [], animating: false });
    }
    catch(err) {
      console.log(err,'Couldnot fetch search result');
    }
  }

  onSearchPress = (text) => {
    this.setState({ searchTerm: text, searching: true, animating: true });
    this.fetchSearchResult(text);
  }

  async fetchNextPage() {
    try {
      let movies = await axios
        .get(`https://yts.ag/api/v2/list_movies.json?&limit=50&page=${this.state.currentPageNumber+1}`
        );
      this.setState({
        moviesList: this.state.moviesList.concat(movies.data.data.movies),
        currentPageNumber: movies.data.data.page_number
      });
    }
    catch(err) {
      console.log(err,'Can load the data from the server');
    }
  }

  async fetchNextSearchPage() {
    try {
      let movies = await axios
        .get(`https://yts.ag/api/v2/list_movies.json?&limit=20?query_term=${this.state.searchTerm}&page=${this.state.currentSearchPageNumber+1}`
        );
      this.setState({
        searchList: this.state.searchList.concat(movies.data.data.movies),
        currentSearchPageNumber: movies.data.data.page_number
      });
    }
    catch(err) {
      console.log(err,'Can load the data from the server');
    }
  }

  renderElements(value) {
    const funcOnEndReached = (value == 'searchList') ? this.fetchNextSearchPage : this.fetchNextPage;
    const threshHold = (value == 'searchList') ? 0.4 : 0.9;
    return(
        this.state[value].length > 0 ?
          <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1, padding: 5, justifyContent: 'space-between'}}>
            <FlatList
              data={this.state[value]}
              keyExtractor={(item, index) => item.id}
              numColumns="3"
              keyboardShouldPersistTaps="handled"
              onEndReached={funcOnEndReached}
              onEndReachedThreshold={threshHold}
              renderItem={({item}) => <Tile key={item.id} movie={item} onTilePress={this.onTilePress}/>}
            />
          </View>
          :
          <Text style={{ textAlign: 'center', fontSize: 24, paddingTop: 30}}>No movies found!</Text>
    );
  }

  handleSearchCloseIcon() {
    this.setState({searching: false, showSearchClose: false, searchTerm: ""});
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#512da7" animated barStyle="light-content" />
        <Header
          navigation={this.props.navigation}
          searchTerm={this.state.searchTerm}
          onSearchPress={this.onSearchPress}
          showSearchClose={this.state.showSearchClose}
          handleSearchCloseIcon={this.handleSearchCloseIcon}
          showSearchInput={this.state.showSearchInput}
          changeSearchLayout={this.changeSearchLayout}
        />
        {
          this.state.animating ?
            <Loading animating={this.props.animating} />
            :
            this.state.searching ?
              this.renderElements('searchList')
              :
              this.renderElements('moviesList')
        }
      </Container>
    );
  }
}