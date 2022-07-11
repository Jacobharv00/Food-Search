import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ( { term, onTermChange, onTermSubmit } ) => {
  return (
    <View style={ styles.backgroundStyle }>
      <Feather name="search" style={ styles.icon } />
      <TextInput
        autoCapitalize="none"
        autoCorrect={ false }
        placeholder="Search"
        style={ styles.input }
        value={ term }
        onChangeText={ onTermChange }
        onEndEditing={ onTermSubmit }
      />
    </View>
  )
}

const styles = StyleSheet.create( {
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    marginBottom: 10
  },
  icon: {
    marginHorizontal: 15,
    fontSize: 35,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
} )

export default SearchBar