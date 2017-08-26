/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Header from './src/components/header';
import News from './src/components/newsContent'; 
import HanImage from './src/components/myImage';
import Movie from './src/components/scrollView';
import MovieList from './src/components/movieList';
import MyListView from './src/components/listView';
import movieListWithListView from './src/components/movieListWithListView';

function NewHeader (){
  return(
  	 <View>
         <Header />
         <MyListView />
     </View>
      
  	 
    )
}
  
AppRegistry.registerComponent('Hello', () => movieListWithListView);
