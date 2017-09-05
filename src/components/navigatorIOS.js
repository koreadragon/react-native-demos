import React,{Component,PropTypes} from 'react';
import {NavigatorIOS,Text,View,TouchableOpacity,TextInput} from 'react-native';
import Blink from './blink';


class MyScene extends Component{
 

	constructor(props,context){
		super(props,context);
		this._onFoward = this._onFoward.bind(this);
		this._onBack = this._onBack.bind(this);
		this.state={
			toPass:''
		}
	}
	_onBack(){
		this.props.navigator.pop();
	}

	_onFoward(nextRoute){
		this.props.navigator.push(nextRoute);
	}

	render(){
		const nextRoute = {
			component:Blink,
			title:'new one',
			passProps:{pass:this.state.toPass}
		};
		return (
			<View>
				<Text style={{color:'red',backgroundColor:'black',marginTop:64,}}>Current Scene:{this.props.title}</Text>
				<TextInput
			        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
			        onChangeText={(text) => this.setState({toPass:text})}
			        value={this.state.toPass}
			     />
				<TouchableOpacity onPress={()=> this._onFoward(nextRoute)}>
					<Text style={{marginTop: 200, alignSelf: 'center'}}>开始导航</Text>
				</TouchableOpacity>
			</View>

		);
	}
}

export default class NavigatorIOSApp extends Component{
	_handleNavigationRequest(){
		this.refs.nav.push({
			barTintColor:'red',
		})
	}
	render(){
		return(
			<NavigatorIOS 
			initialRoute={
				{component:MyScene,title:'首页'}
			}
			style={{flex:1}}

			barTintColor='#ffffcc'
			/>

		);
	}
}