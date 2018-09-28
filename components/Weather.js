import React from 'react';
import Forecast from './Forecast';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        main: '-', description: '-', temp: 0
      }
    }

  }
  doIt = () => {
    console.log("Hello from console")
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
          <View style={styles.flexbox}>
            <Text style={styles.style1}>Zip code is {this.props.zipCode}.</Text>
            <Forecast {...this.state.forecast} />
          </View>

        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { paddingTop: 25 },
  backdrop: { width: '100%', height: '100%' },
  
  flexbox:
  {
    flexDirection: 'column',
    flex:0.5,
    justifyContent: 'center',
    alignItems: 'center',   
    height: 360,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  style1:
  {
    color:'white',
    fontSize:25,
    
  }
});
