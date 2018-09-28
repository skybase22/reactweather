import React from 'react';
import Forecast from './Forecast';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        zipcode: '', main: '-', description: '-', temp: 0
      }
    }

  }
  doIt = () => {
    console.log("Hello from console")
  }

  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=90110,th&units=metric&APPID=6e22eda0422b463a1a0c4e624e7af0e2`)
        .then((response) => response.json())
        .then((json) => {
            this.setState(
                {
                    forecast: {
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    }
                });
        })
        .catch((error) => {
            console.warn(error);
        });
}
componentDidMount = () => this.fetchData()
  
componentDidUpdate = (prevProps) => {
  if (prevProps.zipCode !== this.props.zipCode) {
      this.fetchData()
  }
}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../8.jpg')} style={styles.backdrop}>
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
  container: { paddingTop: 20 },
  backdrop: { width: '100%', height: '100%' },
  
  flexbox:
  {
    flexDirection: 'column',
    flex:0.5,
    alignItems: 'center',   
    height: 360,
    backgroundColor: 'black',
    opacity: 0.5,
    justifyContent:'space-evenly',
  },
  style1:
  {
    color:'white',
    fontSize:25,
    textAlign:'center',
    
  }
});
