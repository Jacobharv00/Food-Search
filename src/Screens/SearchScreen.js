import React, { useState } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [ term, setTerm ] = useState( '' )
  const [ errorMessage, results, searchApi ] = useResults()

  const filterResultsByPrice = ( price ) => {
    return results.filter( result => result.price === price )
  }

  return (
    <>
      <SearchBar
        term={ term }
        onTermChange={ setTerm }
        onTermSubmit={ () => searchApi( term ) }
      />
      { errorMessage ? <Text>{ errorMessage }</Text> : null }
      <ScrollView safeAreaBottom>
        <ResultsList
          title='Budget Grub'
          results={ filterResultsByPrice( '$' ) }
        />
        <ResultsList
          title='Average Price'
          results={ filterResultsByPrice( '$$' ) }
        />
        <ResultsList
          title='Spendy Boi'
          results={ filterResultsByPrice( '$$$' ) }
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create( {

} )

export default SearchScreen