import React from 'react';
import { AppRegistry, View, Pano, asset, Text } from 'react-vr';

export default class App extends React.Component{
  render() {
    return(
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <Text
          style={{
            transform: [{ translateZ: -1 }],
            color: 'lightblue',
            backgroundColor: '#355',
            fontSize: 0.1,
            fontWeight: 300,
            width: 0.55,
            height: 0.45,
            textAlign: 'center',
            textAlignVertical: 'center',
            layoutOrigin: [0.5,0.5]
          }}
        >
          Srivatsa
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
