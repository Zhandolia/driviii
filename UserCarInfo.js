import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const UserCarInfo = ({ navigation }) => {
  const [carModel, setCarModel] = useState('');
  const [carPlateNumber, setCarPlateNumber] = useState('');
  const [carPhoto, setCarPhoto] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        setCarPhoto(response.assets[0].uri);
      }
    });
  };

  const handleSubmit = () => {
    navigation.navigate('UserAdditionalInfo');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Car Model"
        value={carModel}
        onChangeText={setCarModel}
        style={styles.input}
      />
      <TextInput
        placeholder="Car Plate Number"
        value={carPlateNumber}
        onChangeText={setCarPlateNumber}
        style={styles.input}
      />
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      {carPhoto && (
        <Image source={{ uri: carPhoto }} style={styles.image} />
      )}
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default UserCarInfo;
