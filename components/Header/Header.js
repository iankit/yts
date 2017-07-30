import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from './SearchBar';
import styles from './styles';

const Header = (props) => (
  <View style={styles.header}>
    <View style={styles.headerWrap}>
      <Text style={styles.headerText}>YIFY</Text>
      <View style={styles.searchWrap}>
        {
          props.showSearchInput ?
            <SearchBar
              searchTerm={props.searchTerm}
              onSearchPress={props.onSearchPress}
              showSearchClose={props.showSearchClose}
              handleSearchCloseIcon={props.handleSearchCloseIcon}
              changeSearchLayout={props.changeSearchLayout}
            />
            :
            <Icon
              style={styles.icon}
              name="search"
              size={22}
              color="white"
              backgroundColor="#673bb7"
              onPress={() => props.changeSearchLayout()}
            />
        }
      </View>
    </View>
  </View>
);

export default Header;