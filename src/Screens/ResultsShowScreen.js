import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ( { navigation } ) => {
  const [ result, setResult ] = useState( null )
  const id = navigation.getParam( 'id' )

  const getResult = async ( id ) => {
    const response = await yelp.get( `/${id}` )
    setResult( response.data )
  }

  useEffect( () => { getResult( id ) }, [ id ] )

  if ( !result ) {
    return null
  }

  return (
    <View>
      <Text style={ styles.name }>{ result.name }</Text>
      <FlatList
        contentContainerStyle={ styles.container }
        data={ result.photos }
        keyExtractor={ photo => photo }
        renderItem={ ( { item } ) => {
          return <Image source={ { uri: item } } style={ styles.image } />
        } }
      />
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginBottom: 10
  },
  name: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 18,
  },
} )

export default ResultsShowScreen