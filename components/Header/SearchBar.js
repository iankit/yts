import React from 'react';
import { View, TextInput, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const SearchBar = (props) => {
  return (
    <View>
      <TextInput
        style={styles.searchInput}
        autoFocus={true}
        onChangeText={(text) => props.onSearchPress(text)}
        value={props.searchTerm}
        autoCapitalize='none'
        placeholder='Enter search string'
        placeholderTextColor='white'
        returnKeyType='done'
        clearButtonMode='always'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        selectionColor='white'
        onBlur={() => props.changeSearchLayout(false)}
      />
    </View>
  );
}

export default SearchBar;