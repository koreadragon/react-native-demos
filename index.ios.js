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

import Header from './header';
import News from './newsContent';
import Fuck from './fuck'; 
import HanImage from './myImage';
import Movie from './scrollView';
import MovieList from './movieList';
import MyListView from './listView';
import movieListWithListView from './movieListWithListView';

function NewHeader (){
  return(
  	 <View>
         <Header />
         <MyListView />
     </View>
      
  	 
    )
}
  
AppRegistry.registerComponent('Hello', () => movieListWithListView);
