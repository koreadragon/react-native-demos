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
import Header from './header';
import News from './newsContent';
 
let news = [
'泰国男子因点赞国王被PS照片获刑32年泰国男子因点赞国王被PS照片获刑32年',
'男子为泄私愤砸毁80余辆轿车(图)',
'嫌犯被曝因“弄通检察院”未批捕 官方回应',
'老人植钢板2个月即断裂 医院称要赔找钢板厂',
'父母被邻居杀害 女儿电话中听到母亲惨叫(图)',
'泰国男子因点赞国王被PS照片获刑32年泰国男子因点赞国王被PS照片获刑32年',
'男子为泄私愤砸毁80余辆轿车(图)',
'嫌犯被曝因“弄通检察院”未批捕 官方回应',
'老人植钢板2个月即断裂 医院称要赔找钢板厂',
'父母被邻居杀害 女儿电话中听到母亲惨叫(图)',
'泰国男子因点赞国王被PS照片获刑32年泰国男子因点赞国王被PS照片获刑32年',
'男子为泄私愤砸毁80余辆轿车(图)',
'嫌犯被曝因“弄通检察院”未批捕 官方回应',
'老人植钢板2个月即断裂 医院称要赔找钢板厂',
'父母被邻居杀害 女儿电话中听到母亲惨叫(图)'
];


function NewHeader (){
  return(

    <View>
      <Header />
      <News news = {news}/>
    </View>

    )
}
  
AppRegistry.registerComponent('Hello', () => NewHeader);
