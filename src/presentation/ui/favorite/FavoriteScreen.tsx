import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { mapsStyles, markers, rutas } from './maps';
import { useEffect, useState } from 'react';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@amrshbib/react-native-geolocation';

const FavoriteScreen = () => {
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    permissionUbi();
  }, []);

  useEffect(() => {
    getLocation();
  }, [location]);

  const getLocation = async () => {
    const myLocation = await Geolocation.getCurrentLocation({
      enableHighAccuracy: true,
      timeout: 15000,
      priority: 'high_accuracy',
    });
    setLocation(myLocation);
  };

  const permissionUbi = async () => {
    const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result === 'granted') {
      return true;
    }
    return false;
  };

  if (!permissionUbi()) {
    return <Text>No permission</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={mapsStyles}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={styles.map}
        region={{
          latitude: location?.coords?.latitude || 37.78825,
          longitude: location?.coords?.longitude || -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {markers.map((marker: any) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}
        <Polyline
          coordinates={rutas[0].points.map((point: any) => ({
            latitude: point.latitude,
            longitude: point.longitude,
            key: point.id,
            title: point.name,
            description: point.description,
            strokeColor: '#000000',
            strokeWidth: 5,
          }))}
        />
      </MapView>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
