import React from 'react'
import { StyleSheet, View } from 'react-native';
import ArticleList from './fragments/ArticleList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ArticleList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20
  }
})

export default HomeScreen