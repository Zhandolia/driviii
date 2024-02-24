import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios'; // Import Axios

const DriverLicenseInfo = ({ navigation }) => {
  const [carModel, setCarModel] = useState('');
  const [carPlateNumber, setCarPlateNumber] = useState('');
  const [carPhoto, setCarPhoto] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const photoUri = response.assets[0].uri;
        setCarPhoto(photoUri);
        await verifyDriverLicense(photoUri);
      }
    });
  };

  const verifyDriverLicense = async (photoUri) => {
    const formData = new FormData();
    formData.append('licenseImage', {
      uri: photoUri,
      type: 'image/jpeg',
      name: 'license.jpg',
    });

    try {
      const response = await axios.post('API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'ioBM7y1VCX45pIxunQeLTXVFGk1Y5MgX',
        },
      });

      console.log('Verification response:', response.data);
    } catch (error) {
      console.error('Verification error:', error);
    }
  };

  const handleSubmit = () => {
    navigation.navigate('DriverAdditionalInfo');
  };

  return (
    <View style={styles.container}>
      <Button title="Upload Drivers License" onPress={handleChoosePhoto} />
      {carPhoto && <Image source={{ uri: carPhoto }} style={styles.image} />}
      <Button title="Next" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default DriverLicenseInfo;
