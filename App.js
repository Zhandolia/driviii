import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuPage from './MenuPage';
import UserPersonalInfo from './UserPersonalInfo';
import UserCarInfo from './UserCarInfo';
import UserAdditionalInfo from './UserAdditionalInfo';
import UserSecurityInfo from './UserSecurityInfo';
import DriverPersonalInfo from './DriverPersonalInfo';
import DriverLicenseInfo from './DriverLicenseInfo';
import DriverAdditionalInfo from './DriverAdditionalInfo';
import DriverSecurityInfo from './DriverSecurityInfo';
import UserMenu from './UserMenu';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MenuPage" component={MenuPage} options={{ title: 'Welcome' }} />
        <Stack.Screen name="UserPersonalInfo" component={UserPersonalInfo} options={{ title: 'User Personal Information' }} />
        <Stack.Screen name="UserCarInfo" component={UserCarInfo} options={{ title: 'User Car Information' }} />
        <Stack.Screen name="UserAdditionalInfo" component={UserAdditionalInfo} options={{ title: 'User Additional Information' }} />
        <Stack.Screen name="UserSecurityInfo" component={UserSecurityInfo} options={{ title: 'User Security Info' }} />
        <Stack.Screen name="DriverPersonalInfo" component={DriverPersonalInfo} options={{ title: 'Driver Personal Info' }} />
        <Stack.Screen name="DriverLicenseInfo" component={DriverLicenseInfo} options={{ title: 'Driver License Info' }} />
        <Stack.Screen name="DriverAdditionalInfo" component={DriverAdditionalInfo} options={{ title: 'Driver Additional Info' }} />
        <Stack.Screen name="DriverSecurityInfo" component={DriverSecurityInfo} options={{ title: 'Driver Security Info' }} />
        <Stack.Screen name="UserMenu" component={UserMenu} options={{title: 'User Menu'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
