import React from 'react';
import { AppRegistry, View, Pano, asset, Text, Image, PointLight, Sphere, Box, Cylinder, Plane } from 'react-vr';

export default class App extends React.Component{
  render() {
    return(
      <View>
        {/*<Sphere 
          style={{
            color: 'lightblue',
            transform: [{ translateZ: -2 }]
          }}
          lit
          texture={asset('earth.jpg')}
          heightSegments={20}
          widthSegments={20}
        /> */}

        {/*<Box 
          wireframe
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          style={{
            transform: [{ translateZ: -2 }]
          }}
        />*/}

     {/*   <Cylinder 
          segments={20}
          dimHeight={0.6}
          radiusBottom={0.35}
          radiusTop={0}
          wireframe
          style={{
            transform: [{ translateZ: -2}]
          }}
        />*/}

        <Plane 
          wireframe
          dimWidth={0.5}
          dimHeight={0.5}
          style={{
            transform: [{ translateZ: -2 }]
          }}
        />
        <PointLight 
          intensity = {1}
          style={{
            transform: [{ translate: [0, 700, 700]}]
          }}
        />  
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
