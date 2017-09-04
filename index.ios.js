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
import MyNavigator from './src/components/navigation';
import PassValueNavigator from './src/components/passValue';
import Blink from './src/components/blink';
import HanInput from './src/components/input';


function NewHeader (){
  return(
  	 <View style={{flex:1}}>
         <HanInput text='一闪一闪亮晶晶'/>
     </View>
      
  	 
    )
}
  
AppRegistry.registerComponent('Hello', () => HanInput );
