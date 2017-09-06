import React ,{Component} from 'react';
import {Animated,Text} from 'react-native';

class FadeView extends Component{
	constructor(props){
		super(props);
		this.state={
			fadeAnim:new Animated.Value(0),
		};
	}

	componentDidMount(){
		Animated.timing(
			this.state.fadeAnim,{
				toValue:1,
				duration:2000,
		
		}).start();
	}

	render(){
		return(

			<Animated.View style={{...this.props.style,opacity:this.state.fadeAnim,}}>

				{this.props.children}
			</Animated.View>

		);
	}

}


class FinalAnimatedView extends Component{
	render(){
		return(

				<FadeView style={{width:250,height:50,backgroundColor:'powderblue',marginTop:64,alignSelf:'center'}}>
					<Text style={{fontSize:28,textAlign:'center',margin:10}}>Fading in</Text>
				</FadeView>

		);
	}
}

export default FinalAnimatedView;