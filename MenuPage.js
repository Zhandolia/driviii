import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function MenuPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="User Section"
        onPress={() => navigation.navigate('UserPersonalInfo')}
      />
      <Button
        title="Driver Section"
        onPress={() => navigation.navigate('DriverPersonalInfo')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuPage;
