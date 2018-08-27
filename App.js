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
/*Import Custom COmponents*/
import UselessTextInputMultiline from './components/TextInput.js';
// import Selectable from './components/selectable.js';
import TwoWayText from './components/TextInput.js';
import PromptSelectors from './components/PromptSelectors.js';
import PromptSelectorObjects from './components/PromptSelectorObjects.js';
   
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height   
//1. Create Home Screem
export  class HomeScreen extends React.Component {
  render(){
    return (
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text style = {styles.title}> Who are you really? </Text>
           <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="Begin"
            
            onPress={() => this.props.navigation.navigate('DoneBeing')}
        />

     
      </View>
      )
  }

}

export class DoneBeing extends React.Component {
  render (){
    return(
// next: how can I pass the url and key work as props to the component to set it up for the specfic screen>
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
  
  <PromptSelectors
     Prompt= 'I am done being the...'
     KeyWord = 'characters'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/archetypes/character.json'

  > </PromptSelectors>
         <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="Next"
            onPress={() => this.props.navigation.navigate('Shedding')}
        />
    </View>
      )
  }
}

//2. Create I Am Shedding Page

export class Shedding extends React.Component {
  render (){
    return(
// next: how can I pass the url and key work as props to the component to set it up for the specfic screen>
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
  
  <PromptSelectors
     Prompt= 'I am shedding...'
     KeyWord = 'sculpture materials'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/sculpture-materials.json'

  > </PromptSelectors>
         <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="Next"
            onPress={() => this.props.navigation.navigate('Fortifying')}
        />
    </View>
      )
  }
}



export class Becoming extends React.Component {
  render (){
    return(
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>

  <PromptSelectors
     Prompt= 'I am becoming...'
     KeyWord = 'sculpture materials'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/sculpture-materials.json'
  > </PromptSelectors>
         <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="Next"
            
            onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
      </View>
      )
  }

}
export class Remain extends React.Component {
  render (){
    return(
// next: how can I pass the url and key work as props to the component to set it up for the specfic screen>
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
  <PromptSelectors
    Prompt= 'I am remaining...'
     KeyWord = 'sculpture materials'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/sculpture-materials.json'

  > </PromptSelectors>
         <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="Next"
            
            onPress={() => this.props.navigation.navigate('Becoming')}
        />
        </View>
      )
  }

}
// up next: add next buttons to other pages
// change out for swipe--or add swipte mechanism

const RootStack = createStackNavigator(
{
  Home: HomeScreen,
  DoneBeing: DoneBeing,
  Shedding: Shedding,
  Fortifying: Remain,
  Becoming: Becoming
},
{
initialRouteName:"Home"
}
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


// on hold for 1.0 Input component
   //   <View style={{flex: 2, paddingTop:20}}>
     // <UselessTextInputMultiline triggerParentUpdate = {this.updateText}> </UselessTextInputMultiline>
      //</View>



/*STYLE COMPONENTS */
const styles = StyleSheet.create({
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