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
import MultiPromptSelectorsA from './components/multiPromptSelectorsA.js';
import MultiPromptSelectorsB from './components/multiPromptSelectorsB.js';
import AllTogether from './components/allTogether.js';
   
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height   
export default class App extends React.Component {
    constructor(props){
    super(props);
    this.state ={ 
      responses: []

    }
  this.promptHandler = this.promptHandler.bind(this)
  }

promptHandler(e) {
    e.preventDefault()
    console.log(e)
    this.setState({
      responses:[...this.state.responses, newResponse]
    })
  console.log(responses)
  }

  render() {
    return <RootStack />;
  }
}

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
            
            onPress={() => this.props.navigation.navigate('Shedding')}
        />
      </View>
      )
  }
}

export class Shedding extends React.Component {
      constructor(props){
    super(props);
    this.state ={ 
      response:" "

    }
  // this.promptHandler = this.promptHandler.bind(this)
  }

  localPromptHandler= (e) => {
  console.log(e)
    // e.preventDefault()
    this.setState({
      response:e
      // responses:[...this.state.responses, newResponse]
    })
  }
  render (){
    return(
// next: how can I pass the url and key work as props to the component to set it up for the specfic screen>
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
  
  <PromptSelectors
     promptHandler = {this.localPromptHandler}
     Prompt= 'I am shedding...'
     KeyWord = 'sculpture materials'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/sculpture-materials.json'

  > </PromptSelectors>
         <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="Next"
            onPress={() =>{
             this.props.navigation.navigate('DoneBeing')
             // this.props.promptHandler()
           }}
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
  
  <PromptSelectorObjects
     Prompt= 'I am done being the...'
     KeyWord = 'characters'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/archetypes/character.json'

  > </PromptSelectorObjects>
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

// I have nurtured my
// and gain strengthed from

export class Becoming extends React.Component {
  render (){
    return(
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
<View>
      <View style={{marginBottom:50}}>
    <Text style = {{fontSize: 26}}> I am Becoming</Text>
      </View>
    
</View>
      <View style = {{flex:1,  flexDirection: 'row', alignItems:"center", justifyContent:"center"}}>
    <MultiPromptSelectorsB
     Prompt= 'I am becoming...'
     KeyWord = 'colors'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json'
  > </MultiPromptSelectorsB>
  <MultiPromptSelectorsA
     Prompt= 'I am becoming...'
     KeyWord = 'genres'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/music/genres.json'
  > </MultiPromptSelectorsA>

      </View>

      <View style = {{}}>

         <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="Next"
            
            onPress={() => this.props.navigation.navigate('Remaining')}
        />
      </View>
      </View>
      )
  }

}
export class Remaining extends React.Component {
  render (){
    return(
// next: how can I pass the url and key work as props to the component to set it up for the specfic screen>
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
  <PromptSelectors
  // I will always be
  // I am __ | __
    Prompt= 'I am remaining...'
     KeyWord = 'building materials'
     URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/materials/building-materials.json'

  > </PromptSelectors>
         <Button
            raised
            large
            buttonStyle = {styles.beginButton}
            title="Next"
            
            onPress={() => this.props.navigation.navigate('AllTogetherNow')}
        />
        </View>
      )
  }

}

export class AllTogetherNow extends React.Component {
  render(){
    return(
      <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>

      <AllTogether> </AllTogether>
</View>
      )

  }


}

// up next: add next buttons to other pages
// change out for swipe--or add swipte mechanism

const RootStack = createStackNavigator(
{
  Home: HomeScreen,
  Shedding: Shedding,
  DoneBeing: DoneBeing,
  Remaining: Remaining,
  Becoming: Becoming,
  AllTogetherNow: AllTogetherNow
},
{
initialRouteName:"Home"
}
);




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