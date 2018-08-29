// 0:a. Importat React from 'react' -- python style I think?
import React, { Component } from 'react';

import { 
  ActivityIndicator, Dimensions, FlatList, TouchableHighlight, ScrollView, StyleSheet, Text, Image, View 
} from 'react-native';

import { Button } from 'react-native-elements'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height   

export default class MultiPromptSelectorA extends React.Component {
 // 1.i constructor for component
  constructor(props){
    super(props);
      KeyWordTwo:'',
    this.state ={ 
      isLoading: true,
      text: '',
      totalText: "placeholder",
      URL: '',
      URLTwo:'',
      KeyWord:'',
      Prompt: ''

    }
  this.updateText = this.updateText.bind(this)
  this.componentDidMount = this.componentDidMount.bind(this)
      
  };

// For Text Input Update--is it needed here
updateText(text){
  // console.log(this)
  this.setState({text:text})
}


// For which word is selected from FlatList
whichSelected(thing){
  console.log(thing)
  this.setState({text:thing})
}

// Load Data In Flatlist
sendForData(dataSource){
    // return a random list of 25 things instead of alphabetical
    // console.log(dataSource)
         let textHolder = []
 // Set the number of responses from API here
       for (var i =0; i-15;i++){
        // let temp = <Text>dataSource[i]</Text>
        textHolder.push(dataSource[i])
      }
    return textHolder

  }

  sendForDataTwo(dataSourceTwo){
      // console.log(dataSource)
      let textHolderTwo = []
 // Set the number of responses from API here
       for (var i =0; i-15;i++){
        // let tempTwo = <Text>dataSourceTwo[i]</Text>
        textHolderTwo.push(dataSourceTwo[i])
      }
    return textHolderTwo

  }


  loadDataOne(){
    return fetch(this.props.URL)  
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson['colors'])
        this.setState({
          isLoading: false,
          dataSource: responseJson[this.props.KeyWord],
          // URL:URL
        }, function(){
        // console.log(this.state)
      console.log(this.props)
        });

      })
      .catch((error) =>{
        console.error(error);
      });

  }



componentDidMount(){

this.loadDataOne()


  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

 // Whole Container View
      <View style={{flex: .5}}>
        <View style={{paddingTop:0, }}>
      <Text style = {{fontSize:45}}> {this.state.text} &</Text>
      </View>

      <View style={{ marginBottom:25, backgroundColor:"#fffff8"}}>
      
      <FlatList
          data={this.sendForData(this.state.dataSource)}
          renderItem={({item}) => <TouchableHighlight style = {ScreenStyles.things} onPress={()=> this.whichSelected(item.color)}><Text>{item.color}</Text></TouchableHighlight>}
          keyExtractor={(item, index) => index.toString()}
        />
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
