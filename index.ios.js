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
  View
} from 'react-native';

 function Hello () {
  
    return (
      <View style = {[styles.flex,styles.container]}>
        <View style={styles.item}>
          <View style = {[styles.flex,styles.center]}> 
            <Text>酒店</Text>
          </View>
          <View style = {[styles.flex,styles.lineLeftRight]}>
            <View style = {[styles.flex,styles.center,styles.lineCenter]}> 
              <Text>海外酒店</Text>
            </View>
            <View style = {[styles.flex,styles.center]}> 
              <Text>特价酒店</Text>
            </View>
          </View>
          <View style={styles.flex}>
            <View style = {[styles.flex,styles.center,styles.lineCenter]}> 
              <Text>团购</Text>
            </View>
            <View style = {[styles.flex,styles.center]}> 
              <Text>民宿，客栈</Text>
            </View>
          </View>
        </View>
      </View>
    );
   
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    backgroundColor:'#f2f2f2',
  },
  flex:{
    flex:1,
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  item:{
    flexDirection:'row',
    backgroundColor:'#f123ad',
    marginTop:5,
    marginLeft:5,
    marginRight:5,
    height:80,
    borderRadius:5,
  },
  lineLeftRight:{
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'white',

  },
  lineCenter:{
    borderBottomWidth:1,
    borderColor:'white',
  }
});


AppRegistry.registerComponent('Hello', () => Hello);
