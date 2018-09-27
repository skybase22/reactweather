import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style = {{color: 'white',fontSize:50}}>{this.props.main}</Text>
                <Text style = {{color: 'white',fontSize:50}}>{this.props.description}</Text>
                <Text style = {{color: 'white',fontSize:50}}>{this.props.temp}</Text>
                <Text style = {{color: 'white',fontSize:40}}>°C</Text>
            </View>
        );
    }
}