import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Weather from './Weather';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style={styles.container}>

            <Text style = {styles.style1}>{this.props.main}</Text>

                 <Text style = {styles.style1}>{this.props.description}</Text>

                <Text style = {styles.style1}>{this.props.temp}°C</Text>

            </View>
            
        );
    } 
}
const styles = StyleSheet.create({
    style1:
    {
      color:'white',
      fontSize:25,
      textAlign:'center',
    }
  });