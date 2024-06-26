import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

interface MapProps {
  latitude: number;
  longitude: number;
}
interface MapState {
  isMapLoaded: boolean;
  keyz: string;
}

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
class Map extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
    this.state = {
      isMapLoaded: false,
      keyz: 'AIzaSyApOKL6jKHb8ZORqg9qNQnDAevkmwRjNK8',
    };
  }
  onMapLayout = () => {
    this.setState({
      isMapLoaded: true,
    });
  };

  render(): React.ReactNode {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          margin: 0,
          padding: 0,
          backgroundColor: 'white',
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}>
        {this.props.latitude && this.props.longitude && (
          <>
            <View
              style={{
                backgroundColor: 'white',
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
                borderRadius: 18,
                overflow: 'hidden',
              }}>
              <MapView
                zoomEnabled={true}
                onMapReady={this.onMapLayout}
                zoomControlEnabled={false}
                style={{
                  minHeight: '100%',
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  borderRadius: 18,
                  overflow: 'hidden',
                }}
                initialRegion={{
                  latitude: this.props.latitude,
                  longitude: this.props.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker.Animated
                  coordinate={{
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                  }}
                  pinColor={'orange'}
                />

                {/* {this.props.selectedRegion && (
                <Marker
                  coordinate={{
                    latitude: this.props.selectedRegion.latitude,
                    longitude: this.props.selectedRegion.longitude,
                  }}
                  pinColor={"green"}
                />
              )} */}
              </MapView>
            </View>
          </>
        )}
      </SafeAreaView>
    );
  }
}

export default Map;
