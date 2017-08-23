import React from 'react';
import { AppRegistry, View, Pano, asset, Text, Image } from 'react-vr';

export default class App extends React.Component{
  render() {
    return(
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <View
          style={{
            width: 2,
            height: 2.4,
            backgroundColor: 'white',
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0,-3]}],
            justifyContent: 'space-between'
          }}
        >
          <Image 
            source={asset('mountains.jpg')}
            style={{
              height: 1.2
            }}
          />
          <Text
            style={{
              color: '#333',
              fontSize: 0.16,
              textAlign: 'center'
            }}
          >
            Explore Austria with wonderful Ski
          </Text>
          <View 
            style={{flexDirection: 'row'}}
          >
            <Image 
              source={asset('mountains1.jpg')}
              style={{
                width: 0.5,
                height: 0.5
              }}
            />
              <Image 
              source={asset('mountains2.jpg')}
              style={{
                width: 0.5,
                height: 0.5
              }}
            />
            <Image 
              source={asset('mountains3.jpg')}
              style={{
                width: 0.5,
                height: 0.5
              }}
            />
            <Image 
              source={asset('mountains4.jpg')}
              style={{
                width: 0.5,
                height: 0.5
              }}
            />
          </View>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
