// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppProvider} from './src/context/AppContext';
import Screen1 from './src/screens/screen1';
import Screen2 from './src/screens/screen2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorParamList} from './src/Interfaces';
const Stack = createNativeStackNavigator<NavigatorParamList>();

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="screen1"
            component={Screen1}
            options={{title: 'Enter Email'}}
          />
          <Stack.Screen
            name="screen2"
            component={Screen2}
            options={{title: 'Enter OTP'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
