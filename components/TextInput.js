import React, { Component } from 'react';
import {View, TextInput, Text } from 'react-native';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput style={{
       // backgroundColor: this.state.text,
       backgroundColor: '#771427',
       borderBottomColor: '#000000',
       paddingBottom:50,
       fontSize:27,
       borderBottomWidth: 12 }}
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {240}
        // onChangeText={(text) => this.setState({text})}
      />
    );
  }
}




export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
     <View style={{
       // backgroundColor: this.state.text,
       borderBottomColor: '#771427',
       paddingBottom:20,
        }}
     >

       <UselessTextInput
         multiline = {true}
         numberOfLines = {10}
         // onChangeText={(text) => this.setState({text})}
         onChangeText={this.props.triggerParentUpdate}
         value={this.state.text}
       />

        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
     </View>
    );
  }
}

