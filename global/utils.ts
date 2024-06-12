import {Alert, PermissionsAndroid, Platform, ToastAndroid} from 'react-native';

export const modifyPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.startsWith('+91')) {
    phoneNumber = phoneNumber.slice(3);
    console.log(phoneNumber);
  }
  return phoneNumber;
};
export const checkValidPhoneNumber = (phoneNumber: string) => {
  const regex = new RegExp(
    '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
  );
  return regex.test(phoneNumber);
};
export const errorMessage = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert(message);
  }
};
export const ToastMessage = (message: string) => {
  if (Platform.OS === 'android') {
    Alert.alert(message);
  } else {
    Alert.alert(message);
  }
};

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};
