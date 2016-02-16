import React, { AppRegistry, Component, StyleSheet, Text, View } from 'react-native'
import Login  from './components/login/Login'

class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
       <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
