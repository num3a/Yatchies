import React, { AppRegistry, Component, StyleSheet, Text, TextInput, View } from 'react-native'
import Button  from 'react-native-button'
import Globals  from '../Globals'

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password : ''
    };

  }
  _onPressLoginButton(){
  }
  _inputOnFocus() {
    
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
      style={styles.input}
      onChangeText={(username) => this.setState({username})}
      placeholder="Username"
      keyboardType="default"
      value={this.state.username}
      />
      <TextInput
      style={styles.input}
      onChangeText={(password) => this.setState({password})}
      placeholder="Password"
      onFocus={this._inputOnFocus}
      value={this.state.password}
      />
      <Button
      style={styles.loginButton}
      onPress={this._onPressLoginButton}
      >Login</Button>
      <Text style={styles.orLabel}>Or</Text>
      <Button style={styles.registerButton}>Register</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Globals.colors.backgroundColor
  },
  input : {
    color : '#ecf0f1',
    height: 40,
    borderBottomColor: '#ecf0f1',
    borderBottomWidth: 40,
    width: 300
  },
  text :{
    color : 'white'
  },
  loginButton:{
    color : 'white'
  },
  registerButton:{
    color : 'white'
  },
  orLabel : {

  }
});

export default Login;
