// 0:a. Importat React from 'react' -- python style I think?
import React, { Component } from 'react';

// 0.b. Import the big three modules(?) from RNative from React 1. StyleSheet 2.Text 3.View--prolly more than three well maybe those are a big three
import { 
  ActivityIndicator, Dimensions, FlatList, TouchableHighlight, ScrollView, StyleSheet, Text, Image, View 
} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

import { Button } from 'react-native-elements'

import {font} from 'expo'


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height   



export  default class AllTogether extends React.Component {
 // 1.i constructor for component
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      text: '',
      totalText: "placeholder",
      URL: '',
      KeyWord:'',
      Prompt: ''

    }
  // this.updateText = this.updateText.bind(this)
  // this.componentDidMount = this.componentDidMount.bind(this)
      
  };

  componentDidMount(){
    console.log(this.props)

  }

  render(){

    // if(this.state.isLoading){
    //   return(
    //     <View style={{flex: 1, padding: 20}}>
    //       <ActivityIndicator/>
    //     </View>
    //   )
    // }

    return(

 // Whole Container View
      <View style={{flex: .5}}>
        <View style={{paddingTop:0, }}>
      <Text style = {{fontSize:45}}> {this.state.text} &</Text>
      </View>

      <View style={{ marginBottom:25, backgroundColor:"#fffff8"}}>
      
     <Text> All Together </Text>
      </View>

 
  
      </View>



    );
  }
}


/*STYLE COMPONENTS */
const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeText: {
    color: '#fffff8'
  },

  title: {
  
    fontSize: 36,
    fontFamily: 'System'
  },
beginButton:{
  width: width,
  height: 200,
  backgroundColor: "rgb(119, 20, 39))"
},
  things: {
       alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 15
    // borderBottomColor: 'white',
    // borderBottomWidth: 12,
    // backgroundColor: "#0C385F"
    // border: '2px solid red'
  }
});

