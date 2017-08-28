import React from 'react';
import { AppRegistry, View, Pano, asset, Text, Image, PointLight, Sphere, Box, Cylinder, 
        Plane, AmbientLight, DirectionalLight, SpotLight  } from 'react-vr';

export default class App extends React.Component{
  render() {
    return(
      <View>
        {/* <AmbientLight 
          intensity={2}
          style={{
            color: 'brown'
          }}
        /> */}

        {/* <DirectionalLight 
          intensity={0.5}
          style={{
            transform: [{
              translateX: -1000
            }]
          }}
        />*/}

        <SpotLight 
          style={{
            transform: [{
              translateZ: -5
            }]
          }}
        />
        <Sphere
          lit
          style={{
            color: 'yellow',
            transform: [
              { translate: [-1.5, 0, -4] }
            ]
          }}
          heightSegments={20}
          widthSegments={20}
        /> 

        <Box 
          lit
          wireframe
          style={{
            color: 'blue',
            transform: [
              { translate: [0, 0, -6] }
            ]
          }}
        />

        <Cylinder 
          lit
          segments={20}
          radiusTop={0}
          wireframe
          style={{
            color: 'red',
            transform: [
              { translate: [1.5, 0, -4] }
            ]
          }}
        />

        <Plane
          lit
          dimWidth={4}
          dimHeight={4}
          style={{
            color: 'green',
            transform: [
              { translate: [0, -0.5, -5] },
              { rotateX: -90 }
            ]
          }}
        />


      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
