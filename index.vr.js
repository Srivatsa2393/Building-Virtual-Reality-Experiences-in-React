import React from 'react';
import { AppRegistry, View, Pano, asset } from 'react-vr';

export default class App extends React.Component{
  render() {
    return(
      <View>
        <Pano 
        source={asset('read-world.jpg')}
        onLoad={() => console.log('Loaded')}
        style={{
          transform: [{ rotateY: -20}]
        }}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
